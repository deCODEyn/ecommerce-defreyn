import type { CheckoutItemType } from '@/types';
import { CartItemAction } from './cart-item-action';

export function CartItemDetail({ item }: CheckoutItemType) {
  return (
    <div className="flex-grow">
      <h3 className="font-semibold text-foreground text-lg">{item.name}</h3>
      <p className="text-muted-foreground text-sm">
        R${(item.price / 100).toFixed(2)} / un
      </p>
      <CartItemAction
        itemId={item.id}
        itemName={item.name}
        itemQuantity={item.quantity}
      />
    </div>
  );
}
