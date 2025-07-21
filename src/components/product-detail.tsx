'use client';

import Image from 'next/image';
import type Stripe from 'stripe';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cart-store';
import type { ProductType } from '@/types/product-type';

export default function ProductDetail({ product }: ProductType) {
  const { items, addItem, removeItem } = useCartStore();
  const price = product.default_price as Stripe.Price;
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  function onAddItem() {
    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount as number,
      imageUrl: product.images ? product.images[0] : null,
      quantity: 1,
    });
  }

  return (
    <div className="container mx-auto flex flex-col items-center gap-8 px-4 py-8 md:flex-row">
      {product.images?.[0] && (
        <div className="relative h-96 w-full overflow-hidden rounded-lg sm:w-1/2 lg:h-180">
          <Image
            alt={product.name}
            className="transition duration-300 hover:opacity-90"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            src={product.images[0]}
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
      <div className="md:w-1/2">
        <h1 className="mb-4 font-bold text-3xl text-amber-700">
          {product.name}
        </h1>
        {product.description && (
          <p className="mb-4 text-purple-300">{product.description}</p>
        )}
        {price?.unit_amount && (
          <p className="mb-10 font-semibold text-2xl text-teal-500">
            R${(price.unit_amount / 100).toFixed(2)}
          </p>
        )}
        <div className="m-10 flex items-center space-x-4">
          <Button
            className="size-9 text-teal-500 text-xl"
            onClick={() => removeItem(product.id)}
            variant="outline"
          >
            -
          </Button>
          <span className="font-semibold text-lg text-teal-500">
            {quantity}
          </span>
          <Button
            className="size-9 text-teal-500 text-xl"
            onClick={onAddItem}
            variant="outline"
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
}
