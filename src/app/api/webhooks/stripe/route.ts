import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get("stripe-signature");

  if (!signature) {
    return new NextResponse("Missing stripe-signature header", { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    console.error("Webhook signature verification failed:", error);
    return new NextResponse("Webhook signature verification failed", {
      status: 400,
    });
  }

  console.log("Stripe webhook event:", event.type);

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;

        // Handle successful checkout
        // This will be implemented when we add payment features
        console.log("Checkout completed:", session.id);

        break;
      }

      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;

        // Update payment record in database
        // Using updateMany to avoid unique constraint requirement
        await db.payment.updateMany({
          where: {
            stripePaymentIntentId: paymentIntent.id,
          },
          data: {
            status: "held", // Money is in escrow
          },
        });

        console.log("Payment succeeded:", paymentIntent.id);
        break;
      }

      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;

        // Handle failed payment
        console.log("Payment failed:", paymentIntent.id);
        break;
      }

      case "transfer.created": {
        const transfer = event.data.object as Stripe.Transfer;

        // Update payment record when transfer to student is created
        console.log("Transfer created:", transfer.id);
        break;
      }

      case "customer.subscription.created":
      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;

        // Update company subscription status
        await db.companyProfile.updateMany({
          where: {
            stripeCustomerId: subscription.customer as string,
          },
          data: {
            subscriptionStatus: subscription.status,
          },
        });

        console.log("Subscription updated:", subscription.id);
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;

        // Handle subscription cancellation
        await db.companyProfile.updateMany({
          where: {
            stripeCustomerId: subscription.customer as string,
          },
          data: {
            subscriptionStatus: "cancelled",
          },
        });

        console.log("Subscription cancelled:", subscription.id);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return new NextResponse("Webhook processing failed", { status: 500 });
  }
}
