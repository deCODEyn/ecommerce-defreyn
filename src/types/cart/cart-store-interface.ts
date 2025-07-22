import type { CartItemType } from '@/types';

export interface CartStorInterface {
  items: CartItemType[];
  addItem: (item: CartItemType) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}
