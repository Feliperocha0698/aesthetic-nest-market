import { createClient } from "npm:@supabase/supabase-js@2";
import { type StripeEnv, verifyWebhook } from "../_shared/stripe.ts";

let _supabase: ReturnType<typeof createClient> | null = null;
function getSupabase() {
  if (!_supabase) {
    _supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );
  }
  return _supabase;
}

async function markBooking(session: any, status: string) {
  const bookingId = session?.metadata?.bookingId;
  if (!bookingId) {
    console.log("Session without bookingId metadata:", session?.id);
    return;
  }
  await getSupabase()
    .from("booking_requests")
    .update({
      payment_status: status,
      ...(status === "paid" ? { status: "confirmed" } : {}),
      stripe_session_id: session.id,
    })
    .eq("id", bookingId);
}

Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

  const rawEnv = new URL(req.url).searchParams.get("env");
  if (rawEnv !== "sandbox" && rawEnv !== "live") {
    console.error("Invalid env query parameter:", rawEnv);
    return new Response(JSON.stringify({ received: true, ignored: "invalid env" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  const env: StripeEnv = rawEnv;

  try {
    const event = await verifyWebhook(req, env);
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        if (session.payment_status !== "unpaid") await markBooking(session, "paid");
        else await markBooking(session, "processing");
        break;
      }
      case "checkout.session.async_payment_succeeded":
        await markBooking(event.data.object, "paid");
        break;
      case "checkout.session.async_payment_failed":
        await markBooking(event.data.object, "failed");
        break;
      default:
        console.log("Unhandled event:", event.type);
    }
    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Webhook error:", e);
    return new Response("Webhook error", { status: 400 });
  }
});
