import type { CartItem } from '@/types/cart/cart-item-type';

export interface CartStor {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}
