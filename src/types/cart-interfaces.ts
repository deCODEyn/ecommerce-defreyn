import type { ProductType } from '@/types';

export interface CartStorInterface {
  addItem: (item: CartItemType) => void;
  clearCart: () => void;
  incrementItemById: (id: string) => void;
  removeItem: (id: string) => void;
  removeProduct: (id: string) => void;
  items: CartItemType[];
}

export type AddToCartButtonType = {
  className?: string;
  product: ProductType['product'];
};

export type CartIconButtonType = {
  className?: string;
};

export type CartItemType = {
  id: string;
  imageUrl: string | null;
  name: string;
  price: number;
  quantity: number;
};
