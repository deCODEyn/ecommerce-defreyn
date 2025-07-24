'use client';

import { useState } from 'react';
import { ProductCard } from '@/components/product';
import { Input } from '@/components/ui';
import type { ProductsListType } from '@/types';

export function ProductsList({ products }: ProductsListType) {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredProduct = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    const nameMatch = product.name.toLowerCase().includes(term);
    const descriptionMatch = product.description
      ? product.description.toLowerCase().includes(term)
      : false;

    return nameMatch || descriptionMatch;
  });

  return (
    <div>
      <div className="mb-6 flex justify-center">
        <Input
          aria-label="Campo de pesquisa de produtos"
          className="w-full max-w-md"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Pesquisar produtos..."
          type="text"
          value={searchTerm}
        />
      </div>
      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProduct.map((product) => {
          return (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          );
        })}
      </ul>
      {filteredProduct.length === 0 && (
        <p className="mt-8 text-center text-lg text-muted-foreground">
          Nenhum produto encontrado para sua pesquisa.
        </p>
      )}
    </div>
  );
}
