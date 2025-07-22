import ProductDetail from '@/components/product-detail';
import { getProductId } from '@/lib/http/get-product-id';
export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const product = await getProductId(id);
  const plainProduct = JSON.parse(JSON.stringify(product));

  return <ProductDetail product={plainProduct} />;
}
