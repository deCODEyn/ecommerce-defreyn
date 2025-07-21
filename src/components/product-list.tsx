import type { ProductsListType } from '@/types/products-list-type';
import { ProductCard } from './product-card';

export function ProductsList({ products }: ProductsListType) {
  return (
    <div>
      <div className="mb-6 flex justify-center">
        <input
          className="w-full max-w-md rounded border border-teal-400 px-4 py-2 text-teal-500 focus:outline-none focus:ring-2 focus:ring-pink-300"
          placeholder="Pesquisar produtos"
          type="text"
        />
      </div>
      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
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
