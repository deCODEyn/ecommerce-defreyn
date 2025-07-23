'use client';

import { Button } from '@/components';
import { useAddToCart } from '@/hooks';
import type { AddToCartButtonType } from '@/types';

export function AddToCartButton({ product, className }: AddToCartButtonType) {
  const { addInitialProductToCart } = useAddToCart();

  const handleAddItemClick = () => {
    addInitialProductToCart(product, 1); // Adiciona 1 unidade do produto inicial
  };

  return (
    <Button
      aria-label={`Adicionar ${product.name} ao carrinho`}
      className={`w-full max-w-[284px] shadow-md transition-all duration-300 hover:scale-[1.02] ${className || ''}`}
      onClick={handleAddItemClick}
      variant="default"
    >
      Adicionar ao Carrinho
    </Button>
  );
}
