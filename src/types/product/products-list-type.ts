import type Stripe from 'stripe';

export type ProductsListType = {
  products: Stripe.Product[];
};
