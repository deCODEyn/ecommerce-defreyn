import { ProductsList } from '@/components/product-list';
import { getProductsList } from '@/lib/http/get-product-list';

export default async function Products() {
  const products = await getProductsList(false);

  return (
    <div className="pb-8">
      <h1 className="mb-8 text-center font-bold text-3xl text-amber-700 leading-none tracking-tight">
        Catálogo
      </h1>
      <ProductsList products={products.data} />
    </div>
  );
}
