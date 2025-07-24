import { CarouselHome } from '@/components/carousel';
import type { ProductsListType } from '@/types';

export function ProductOrbitSection({ products }: ProductsListType) {
  return (
    <section className="mx-4 mt-12 max-w-7xl rounded-3xl bg-azul-galactico py-12 text-nevoa-lunar md:mx-8 lg:mx-auto">
      <h2 className="mb-8 text-center font-bold text-3xl text-primary">
        Produtos em Órbita
      </h2>
      <CarouselHome products={products} />
    </section>
  );
}
