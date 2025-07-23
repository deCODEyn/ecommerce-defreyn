import {
  CallToActionSection,
  HeroSection,
  ProductOrbitSection,
} from '@/components';
import { getProductsList } from '@/lib';

export default async function Home() {
  const products = await getProductsList(true, 5);
  const bannerImageUrl =
    products.data?.[0]?.images?.[0] ||
    'https://placehold.co/600x400/D8D9D7/1A2B3D?text=Produto+Destaque';

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection imageUrl={bannerImageUrl} />

      <ProductOrbitSection products={products.data} />

      <CallToActionSection />
    </div>
  );
}
