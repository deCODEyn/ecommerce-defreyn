'use client';

import { Button } from '@/components/ui';
import { useAddToCart, useCartStore } from '@/hooks';
import type { QuantitySelectorType } from '@/types';

export function QuantitySelector({
  productName,
  productId,
  quantity,
  className,
}: QuantitySelectorType) {
  const { incrementItemById } = useCartStore();
  const { removeProductFromCart } = useAddToCart();

  function handleAddClick() {
    incrementItemById(productId);
  }

  function handleRemoveClick() {
    removeProductFromCart(productId, productName);
  }

  return (
    <div className={`flex items-center ${className || ''}`}>
      <Button
        aria-label={`Remover uma unidade de ${productName} do carrinho`}
        className="size-10 border-border text-secondary-foreground text-xl transition-colors hover:bg-secondary/80"
        disabled={quantity === 0}
        onClick={handleRemoveClick}
        variant="outline"
      >
        -
      </Button>
      <span className="font-semibold text-foreground text-lg">{quantity}</span>
      <Button
        aria-label={`Adicionar uma unidade de ${productName} ao carrinho`}
        className="size-10 border-border text-secondary-foreground text-xl transition-colors hover:bg-secondary/80"
        onClick={handleAddClick}
        variant="outline"
      >
        +
      </Button>
    </div>
  );
}
