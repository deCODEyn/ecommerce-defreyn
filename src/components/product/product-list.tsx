'use client';

import { useState } from 'react';
import { CardProduct } from '@/components/product';
import { Input } from '@/components/ui';
import { useDebounce } from '@/hooks/use-debounce';
import type { ProductsListType } from '@/types';

export function ProductsList({ products }: ProductsListType) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const filteredProduct = products.filter((product) => {
    const term = debouncedSearchTerm.toLowerCase();
    if (term === '') {
      return true;
    }
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
      <ul className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
        {filteredProduct.map((product) => {
          return (
            <li className="m-auto" key={product.id}>
              <CardProduct
                cardClass="group h-[480px] gap-0 bg-card py-0 transition duration-300 hover:shadow-xl sm:h-[520px] lg:h-[580px]"
                cardContentClass="flex flex-grow flex-col justify-between p-4"
                cardHeaderClass="h-[88px] flex-shrink-0 justify-center p-4"
                cardTitleClass="line-clamp-2"
                imageSizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                imageWrapperClass="h-60 w-full overflow-hidden rounded-t-lg sm:h-72 lg:h-80"
                linkClass="w-[420px]"
                priceDisplayClass="text-right font-bold text-secondary-foreground"
                product={product}
                productImageClass="duration-300 group-hover:opacity-75"
              />
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
