import type Stripe from 'stripe';
import { stripe } from '@/lib';

export async function getProductsList(
  needLimit: boolean,
  limit?: number
): Promise<Stripe.ApiListPromise<Stripe.Product>> {
  return needLimit
    ? await stripe.products.list({ expand: ['data.default_price'], limit })
    : await stripe.products.list({ expand: ['data.default_price'] });
}
