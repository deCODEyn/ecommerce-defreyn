import { ProductImage } from '@/components/product';
import type { CheckoutItemType } from '@/types';
import { CartItemDetail } from '../cart';

export function CheckoutItem({ item }: CheckoutItemType) {
  return (
    <li className="flex items-center gap-4 border-border border-b pb-4 last:border-b-0 last:pb-0">
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-border bg-muted">
        <ProductImage
          altText={item.name}
          imageClassName="object-cover"
          imageSizes="80px"
          imageUrl={item.imageUrl}
          wrapperClassName="relative h-full w-full"
        />
      </div>
      <CartItemDetail item={item} />
      <span className="font-bold text-lg text-primary">
        R${((item.price * item.quantity) / 100).toFixed(2)}
      </span>
    </li>
  );
}
