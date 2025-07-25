import { redirect } from 'next/navigation';
import { ProductsList } from '@/components/product';
import { getProductsList } from '@/lib/http/get-product-list';
import { logError } from '@/utils/logger';

export default async function Products() {
  const products = await getProductsList(false);

  if (!products?.data?.length) {
    logError('Erro ao buscar produtos na página Produtct');
    redirect('/?error=no_products_available');
  }

  return (
    <div className="bg-background pb-8 text-foreground">
      <h1 className="mb-8 text-center font-bold text-3xl text-primary leading-none tracking-tight">
        Catálogo de Produtos
      </h1>
      <ProductsList products={products.data} />
    </div>
  );
}
