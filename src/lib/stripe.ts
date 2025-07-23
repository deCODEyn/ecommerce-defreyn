import Stripe from 'stripe';
import { env } from '@/utils';

export const stripe = new Stripe(env.STRIPE_SECRET_KEY);
