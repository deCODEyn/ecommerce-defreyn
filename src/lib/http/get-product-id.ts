import type Stripe from 'stripe';
import { stripe } from '../stripe';

export async function getProductId(
  id: string
): Promise<Stripe.Response<Stripe.Product>> {
  return await stripe.products.retrieve(id, {
    expand: ['default_price'],
  });
}
