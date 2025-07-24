import type Stripe from 'stripe';
import { stripe } from '@/lib/stripe';
import { logError } from '@/utils/logger';

export async function getProductId(
  id: string
): Promise<Stripe.Response<Stripe.Product> | null> {
  try {
    const product = await stripe.products.retrieve(id, {
      expand: ['default_price'],
    });
    return product;
  } catch (error) {
    logError(`Falha ao recuperar produto Stripe com ID: ${id}`, error, {
      productId: id,
    });
    return null;
  }
}
