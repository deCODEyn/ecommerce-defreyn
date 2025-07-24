import type { CartItemType } from '@/types';

export type CheckoutHeaderType = {
  title: string;
};

export type CheckoutItemCardType = {
  items: CartItemType[];
  total: number;
};

export type CheckoutItemType = {
  item: CartItemType;
};
