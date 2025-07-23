import { ProductsList } from '@/components';
import { getProductsList } from '@/lib';

export default async function Products() {
  const products = await getProductsList(false);

  return (
    <div className="bg-background pb-8 text-foreground">
      <h1 className="mb-8 text-center font-bold text-3xl text-primary leading-none tracking-tight">
        Catálogo de Produtos
      </h1>
      <ProductsList products={products.data} />
    </div>
  );
}
