import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { createClient } from "npm:@supabase/supabase-js@2";
import { type StripeEnv, createStripeClient } from "../_shared/stripe.ts";

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const UUID_RE = /^[0-9a-fA-F-]{36}$/;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const body = await req.json();
    const bookingId: string = body.bookingId ?? "";
    const email: string | undefined = body.email;
    const returnUrl: string = body.returnUrl ?? "";
    const environment: StripeEnv = body.environment === "live" ? "live" : "sandbox";

    if (!UUID_RE.test(bookingId)) return json({ error: "Invalid bookingId" }, 400);
    if (!returnUrl.startsWith("http")) return json({ error: "Invalid returnUrl" }, 400);

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data: booking, error: bookingError } = await supabase
      .from("booking_requests")
      .select("id, email, service, payment_status")
      .eq("id", bookingId)
      .maybeSingle();

    if (bookingError) throw bookingError;
    if (!booking) return json({ error: "Booking not found" }, 404);
    if (booking.payment_status === "paid") return json({ error: "Already paid" }, 409);

    const stripe = createStripeClient(environment);

    const prices = await stripe.prices.list({ lookup_keys: ["reserva_sinal_100"] });
    if (!prices.data.length) return json({ error: "Price not found" }, 500);
    const stripePrice = prices.data[0];

    const productId = typeof stripePrice.product === "string"
      ? stripePrice.product
      : stripePrice.product.id;
    const product = await stripe.products.retrieve(productId);

    const customerEmail = booking.email ?? email;
    let customerId: string | undefined;
    if (customerEmail) {
      const existing = await stripe.customers.list({ email: customerEmail, limit: 1 });
      customerId = existing.data.length
        ? existing.data[0].id
        : (await stripe.customers.create({ email: customerEmail })).id;
    }

    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: stripePrice.id, quantity: 1 }],
      mode: "payment",
      ui_mode: "embedded_page",
      return_url: returnUrl,
      ...(customerId && { customer: customerId }),
      payment_intent_data: { description: product.name },
      metadata: { bookingId, service: booking.service ?? "" },
    });

    await supabase
      .from("booking_requests")
      .update({
        stripe_session_id: session.id,
        deposit_amount: (stripePrice.unit_amount ?? 0) / 100,
      })
      .eq("id", bookingId);

    return json({ clientSecret: session.client_secret });
  } catch (error) {
    console.error("create-checkout error:", error);
    return json({ error: error instanceof Error ? error.message : "Unexpected error" }, 500);
  }
});
