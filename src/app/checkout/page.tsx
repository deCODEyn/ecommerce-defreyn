'use client';

import {
  CheckoutHeader,
  CheckoutItemListCard,
  EmptyCart,
  OrderSummaryCard,
} from '@/components/checkout';
import { useCartStore } from '@/hooks';

export default function CheckoutPage() {
  const { items } = useCartStore();
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    <EmptyCart />;
  }

  return (
    <div className="container mx-auto bg-background px-4 py-8 text-foreground">
      <CheckoutHeader title="Finalizar Compra" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <CheckoutItemListCard items={items} total={total} />
          {/* <DeliveryAddressCard /> */}
        </div>
        <div className="md:col-span-1">
          <OrderSummaryCard items={items} total={total} />
        </div>
      </div>
    </div>
  );
}
