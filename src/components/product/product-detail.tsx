'use client';

import type Stripe from 'stripe';
import {
  AddToCartButton,
  PriceDisplay,
  ProductImage,
  QuantitySelector,
} from '@/components';
import { useCartStore } from '@/hooks';
import type { ProductType } from '@/types';

export function ProductDetail({ product }: ProductType) {
  const { items } = useCartStore();
  const price = product.default_price as Stripe.Price;
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="container mx-auto flex flex-col items-center gap-8 rounded-lg border border-border bg-card px-4 py-8 shadow-xl md:flex-row">
      <ProductImage
        altText={product.name}
        imageClassName="object-cover transition duration-300 hover:opacity-90"
        imageSizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        imageUrl={product.images[0]}
        wrapperClassName="relative h-96 w-full overflow-hidden rounded-lg sm:w-1/2 lg:h-180"
      />
      <div className="flex flex-col items-center space-y-4 text-center md:w-1/2">
        <h1 className="font-bold text-4xl text-primary">{product.name}</h1>
        {product.description && (
          <p className="text-left text-muted-foreground leading-relaxed">
            {product.description}
          </p>
        )}
        <PriceDisplay
          className="font-semibold text-3xl text-secondary-foreground"
          price={price}
        />
        {quantity === 0 ? (
          <AddToCartButton className="mt-6" product={product} />
        ) : (
          <QuantitySelector
            className="justify-center space-x-4 pt-4"
            productId={product.id}
            productName={product.name}
            quantity={quantity}
          />
        )}
      </div>
    </div>
  );
}
