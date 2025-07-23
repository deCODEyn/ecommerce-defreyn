'use client';

import { Button } from '@/components';
import { useAddToCart, useCartStore } from '@/hooks';
import type { QuantitySelectorType } from '@/types';

export function QuantitySelector({
  productName,
  productId,
  quantity,
}: QuantitySelectorType) {
  const { incrementItemQuantityById } = useCartStore();
  const { removeProductFromCart } = useAddToCart();

  function handleAddClick() {
    incrementItemQuantityById(productId);
  }

  function handleRemoveClick() {
    removeProductFromCart(productId, productName);
  }

  return (
    <div className="flex items-center justify-center space-x-4 pt-4">
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
