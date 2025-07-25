'use server';

import type Stripe from 'stripe';
import { stripe } from '@/lib/stripe';
import { logError } from '@/utils/logger';

export async function getProductsList(
  needLimit: boolean,
  limit?: number
): Promise<Stripe.ApiListPromise<Stripe.Product> | null> {
  try {
    const params: Stripe.ProductListParams = {
      expand: ['data.default_price'],
    };

    if (needLimit && limit !== undefined) {
      params.limit = limit;
    }
    const products = await stripe.products.list(params);
    return products;
  } catch (error) {
    logError('Falha ao recuperar lista de produtos Stripe.', error, {
      needLimit,
      limit,
    });
    return null;
  }
}
