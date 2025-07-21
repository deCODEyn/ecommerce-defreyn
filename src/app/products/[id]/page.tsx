// biome-ignore-all lint/suspicious/noConsole: <dev test>

import ProductDetail from '@/components/product-detail';
import { getProductId } from '@/lib/http/get-product-id';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductId(id);

  return <ProductDetail product={product} />;
}
