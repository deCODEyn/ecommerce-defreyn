import { HomeErrorProducts, ProductOrbitSection } from '@/components/home';
import { HomeLayout } from '@/components/home/home-layout';
import { getProductsList } from '@/lib/http/get-product-list';

export default async function Home() {
  const products = await getProductsList(true, 5);
  const hasProductsToDisplay = products?.data && products.data.length > 0;

  const bannerImageUrl =
    products?.data?.[0]?.images?.[0] ||
    'https://placehold.co/600x400/D8D9D7/1A2B3D?text=Produto+Destaque';

  const dynamicContent = hasProductsToDisplay ? (
    <ProductOrbitSection products={products.data} />
  ) : (
    <HomeErrorProducts />
  );

  return (
    <HomeLayout bannerImageUrl={bannerImageUrl}>{dynamicContent}</HomeLayout>
  );
}
