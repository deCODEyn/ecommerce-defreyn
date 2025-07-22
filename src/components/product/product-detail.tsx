'use client';

import Image from 'next/image';
import type Stripe from 'stripe';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cart-store';
import type { ProductType } from '@/types/product/product-type';

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
    <div className="container mx-auto flex flex-col items-center gap-8 rounded-lg bg-card px-4 py-8 shadow-lg md:flex-row">
      {product.images?.[0] && (
        <div className="relative h-96 w-full overflow-hidden rounded-lg sm:w-1/2 lg:h-180">
          <Image
            alt={product.name}
            className="object-cover transition duration-300 hover:opacity-90"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            src={product.images[0]}
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
      <div className="flex flex-col items-center space-y-4 text-center md:w-1/2">
        <h1 className="font-bold text-4xl text-primary">{product.name}</h1>
        {product.description && (
          <p className="text-muted-foreground leading-relaxed">
            {product.description}
          </p>
        )}
        {price?.unit_amount && (
          <p className="font-semibold text-3xl text-secondary-foreground">
            R${(price.unit_amount / 100).toFixed(2)}
          </p>
        )}
        <div className="flex items-center justify-center space-x-4 pt-4">
          <Button
            aria-label={`Remover uma unidade de ${product.name} do carrinho`}
            className="size-10 border-border text-secondary-foreground text-xl transition-colors hover:bg-secondary/80"
            onClick={() => removeItem(product.id)}
            variant="outline"
          >
            -
          </Button>
          <span className="font-semibold text-foreground text-lg">
            {quantity}
          </span>
          <Button
            aria-label={`Adicionar uma unidade de ${product.name} ao carrinho`}
            className="size-10 border-border text-secondary-foreground text-xl transition-colors hover:bg-secondary/80"
            onClick={onAddItem}
            variant="outline"
          >
            +
          </Button>
        </div>
        <Button
          aria-label={`Adicionar ${product.name} ao carrinho`}
          className="mt-6 w-full max-w-[284px] shadow-md transition-all duration-300 hover:scale-[1.02]"
          onClick={onAddItem}
          variant="default"
        >
          Adicionar ao Carrinho
        </Button>
      </div>
    </div>
  );
}
