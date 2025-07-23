import { ProductDetail } from '@/components';
import { getProductId } from '@/lib';
export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const product = await getProductId(id);
  const plainProduct = JSON.parse(JSON.stringify(product));

  return (
    <div className="bg-background text-foreground">
      <ProductDetail product={plainProduct} />
    </div>
  );
}
