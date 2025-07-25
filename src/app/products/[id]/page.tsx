import { redirect } from 'next/navigation';
import { ProductDetail } from '@/components/product';
import { getProductId } from '@/lib/http/get-product-id';
import { logError } from '@/utils/logger';

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const product = await getProductId(id);

  if (!product) {
    logError('Erro ao buscar produtos na página ProdutctPage');
    redirect('/?error=product_not_found');
  }

  const plainProduct = JSON.parse(JSON.stringify(product));

  return (
    <div className="bg-background text-foreground">
      <ProductDetail product={plainProduct} />
    </div>
  );
}
