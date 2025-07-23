import type Stripe from 'stripe';

export type PriceDisplayType = {
  price?: Stripe.Price | null;
  className?: string;
};
