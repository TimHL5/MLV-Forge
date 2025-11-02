import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-12-18.acacia',
  typescript: true,
});

export async function createPaymentIntent(
  amount: number,
  metadata?: Record<string, string>
): Promise<Stripe.PaymentIntent> {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: 'usd',
      metadata,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return paymentIntent;
  } catch (error) {
    console.error('Stripe payment intent error:', error);
    throw new Error('Failed to create payment intent');
  }
}

export async function createCustomer(
  email: string,
  name: string,
  metadata?: Record<string, string>
): Promise<Stripe.Customer> {
  try {
    const customer = await stripe.customers.create({
      email,
      name,
      metadata,
    });

    return customer;
  } catch (error) {
    console.error('Stripe customer creation error:', error);
    throw new Error('Failed to create customer');
  }
}

export async function createConnectedAccount(
  email: string,
  metadata?: Record<string, string>
): Promise<Stripe.Account> {
  try {
    const account = await stripe.accounts.create({
      type: 'express',
      email,
      capabilities: {
        card_payments: { requested: true },
        transfers: { requested: true },
      },
      metadata,
    });

    return account;
  } catch (error) {
    console.error('Stripe account creation error:', error);
    throw new Error('Failed to create connected account');
  }
}

export async function createAccountLink(
  accountId: string,
  refreshUrl: string,
  returnUrl: string
): Promise<Stripe.AccountLink> {
  try {
    const accountLink = await stripe.accountLinks.create({
      account: accountId,
      refresh_url: refreshUrl,
      return_url: returnUrl,
      type: 'account_onboarding',
    });

    return accountLink;
  } catch (error) {
    console.error('Stripe account link error:', error);
    throw new Error('Failed to create account link');
  }
}

export async function createTransfer(
  amount: number,
  destination: string,
  metadata?: Record<string, string>
): Promise<Stripe.Transfer> {
  try {
    const transfer = await stripe.transfers.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: 'usd',
      destination,
      metadata,
    });

    return transfer;
  } catch (error) {
    console.error('Stripe transfer error:', error);
    throw new Error('Failed to create transfer');
  }
}

export async function createRefund(
  paymentIntentId: string,
  amount?: number,
  reason?: Stripe.RefundCreateParams.Reason
): Promise<Stripe.Refund> {
  try {
    const refund = await stripe.refunds.create({
      payment_intent: paymentIntentId,
      amount: amount ? Math.round(amount * 100) : undefined,
      reason,
    });

    return refund;
  } catch (error) {
    console.error('Stripe refund error:', error);
    throw new Error('Failed to create refund');
  }
}

export async function createSubscription(
  customerId: string,
  priceId: string,
  metadata?: Record<string, string>
): Promise<Stripe.Subscription> {
  try {
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
      metadata,
      payment_behavior: 'default_incomplete',
      payment_settings: { save_default_payment_method: 'on_subscription' },
      expand: ['latest_invoice.payment_intent'],
    });

    return subscription;
  } catch (error) {
    console.error('Stripe subscription error:', error);
    throw new Error('Failed to create subscription');
  }
}

export async function cancelSubscription(
  subscriptionId: string
): Promise<Stripe.Subscription> {
  try {
    const subscription = await stripe.subscriptions.cancel(subscriptionId);
    return subscription;
  } catch (error) {
    console.error('Stripe cancellation error:', error);
    throw new Error('Failed to cancel subscription');
  }
}

export async function constructWebhookEvent(
  payload: string | Buffer,
  signature: string
): Promise<Stripe.Event> {
  try {
    const event = stripe.webhooks.constructEvent(
      payload,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET || ''
    );

    return event;
  } catch (error) {
    console.error('Stripe webhook error:', error);
    throw new Error('Webhook signature verification failed');
  }
}

// Helper function to format amount from cents to dollars
export function formatStripeAmount(amount: number): number {
  return amount / 100;
}

// Helper function to calculate platform fee
export function calculateFees(
  amount: number,
  platformFeePercentage: number = 0.25
): {
  total: number;
  platformFee: number;
  studentEarnings: number;
  stripeFee: number;
} {
  const platformFee = Math.round(amount * platformFeePercentage * 100) / 100;
  const studentEarnings = amount - platformFee;
  const stripeFee = Math.round((amount * 0.029 + 0.3) * 100) / 100; // Stripe's fee

  return {
    total: amount,
    platformFee,
    studentEarnings,
    stripeFee,
  };
}
