'use client';

import { useState } from 'react';
import { ProductCard } from '@/components/product-card';
import type { ProductsListType } from '@/types/products-list-type';

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
        <input
          className="w-full max-w-md rounded border border-teal-400 px-4 py-2 text-teal-500 focus:outline-none focus:ring-2 focus:ring-pink-300"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Pesquisar produtos"
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
    </div>
  );
}
