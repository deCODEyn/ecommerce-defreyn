import type Stripe from 'stripe';

export interface ProductsList {
  products: Stripe.Product[];
}
