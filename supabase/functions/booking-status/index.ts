import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { createClient } from "npm:@supabase/supabase-js@2";
import { type StripeEnv, createStripeClient } from "../_shared/stripe.ts";

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const UUID_RE = /^[0-9a-fA-F-]{36}$/;
const SESSION_RE = /^cs_[a-zA-Z0-9_]+$/;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const body = await req.json();
    const bookingId: string = body.bookingId ?? "";
    const sessionId: string = body.sessionId ?? "";
    const environment: StripeEnv = body.environment === "live" ? "live" : "sandbox";

    if (!UUID_RE.test(bookingId)) return json({ error: "Invalid bookingId" }, 400);
    if (!SESSION_RE.test(sessionId)) return json({ error: "Invalid sessionId" }, 400);

    const stripe = createStripeClient(environment);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.metadata?.bookingId !== bookingId) return json({ error: "Mismatch" }, 403);

    const paid = session.payment_status === "paid" ||
      session.payment_status === "no_payment_required";
    const status = paid ? "paid" : session.payment_status === "unpaid" ? "processing" : "pending";

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );
    await supabase
      .from("booking_requests")
      .update({
        payment_status: status,
        ...(paid ? { status: "confirmed" } : {}),
        stripe_session_id: sessionId,
      })
      .eq("id", bookingId);

    return json({ paymentStatus: status, paid });
  } catch (error) {
    console.error("booking-status error:", error);
    return json({ error: error instanceof Error ? error.message : "Unexpected error" }, 500);
  }
});
