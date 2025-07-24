'use server';

import { redirect } from 'next/navigation';
import type Stripe from 'stripe';
import { stripe } from '@/lib/stripe';
import type { CartItemType } from '@/types';
import { env } from '@/utils/env';
import { logError } from '@/utils/logger';

export async function checkoutAction(formData: FormData): Promise<void> {
  const itemsJson = formData.get('items') as string;
  const items = JSON.parse(itemsJson);
  const line_items = items.map((item: CartItemType) => ({
    price_data: {
      currency: 'brl',
      product_data: { name: item.name },
      unit_amount: item.price,
    },
    quantity: item.quantity,
  }));

  let session: Stripe.Response<Stripe.Checkout.Session>;
  try {
    session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'boleto'],
      line_items,
      mode: 'payment',
      success_url: `${env.NEXT_PUBLIC_BASE_URL}/`,
      cancel_url: `${env.NEXT_PUBLIC_BASE_URL}/checkout`,
    });
  } catch (error) {
    logError('Falha ao criar sessão de checkout com Stripe.', error);
    redirect(`${env.NEXT_PUBLIC_BASE_URL}/checkout?error=stripe_api_error`);
  }

  if (session.url) {
    redirect(session.url);
  } else {
    logError('URL da sessão de checkout não foi gerada.', {
      sessionId: session?.id,
    });
    redirect(`${env.NEXT_PUBLIC_BASE_URL}/checkout?error=no_url`);
  }
}
