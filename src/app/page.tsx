import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from '@/components/carousel/carousel';
import { Button } from '@/components/ui/button';
import { getProductsList } from '@/lib/http/get-product-list';

export default async function Home() {
  const products = await getProductsList(true, 5);
  const bannerImageUrl =
    products.data?.[0]?.images?.[0] ||
    'https://placehold.co/600x400/D8D9D7/1A2B3D?text=Produto+Destaque';

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="mx-4 mt-8 max-w-7xl rounded-3xl border-2 border-border bg-card py-8 shadow-lg sm:py-12 md:mx-8 lg:mx-auto">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-4 sm:px-8 md:grid-cols-2">
          <div className="max-w-md space-y-4 text-center md:text-left">
            <h2 className="font-bold text-4xl text-primary tracking-tight md:text-5xl">
              Bem-vindo ao Nosso Universo!
            </h2>
            <p className="text-foreground leading-relaxed opacity-90">
              Desvende os produtos mais recentes e mergulhe em ofertas
              estelares. Qualidade e inovação para sua jornada.
            </p>
            <Button
              asChild
              className="inline-flex items-center justify-center rounded-full px-8 py-3 shadow-md transition-all duration-300 hover:scale-105"
              variant="default"
            >
              <Link
                aria-label="Explorar todo o catálogo de produtos"
                className="inline-flex items-center justify-center rounded-full px-6 py-3"
                href="/products"
              >
                Explorar Catálogo
              </Link>
            </Button>
          </div>
          {bannerImageUrl && (
            <div className="relative h-96 w-full max-w-sm overflow-hidden rounded-lg md:max-w-md lg:h-[450px]">
              <Image
                alt="Imagem de destaque de um de nossos produtos exclusivos."
                className="border-2 border-muted object-cover shadow-xl"
                fill
                priority
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 400px"
                src={bannerImageUrl}
              />
            </div>
          )}
        </div>
      </section>

      <section className="mx-4 mt-12 max-w-7xl rounded-3xl bg-azul-galactico py-12 text-nevoa-lunar md:mx-8 lg:mx-auto">
        <h2 className="mb-8 text-center font-bold text-3xl text-primary">
          Produtos em Órbita
        </h2>
        <Carousel products={products.data} />
      </section>

      <section className="mx-4 mt-12 mb-8 max-w-7xl rounded-3xl bg-muted py-12 text-foreground shadow-inner md:mx-8 lg:mx-auto">
        <div className="container mx-auto px-4 text-center">
          <h3 className="mb-4 font-bold text-3xl text-primary">
            Sua Jornada Começa Aqui
          </h3>
          <p className="mx-auto max-w-2xl text-foreground text-lg leading-relaxed">
            Descubra a qualidade que transcende. Cada item, uma estrela em nossa
            coleção.
          </p>
          <Button
            asChild
            className="mt-8 inline-flex items-center justify-center rounded-full px-8 py-3 shadow-md transition-all duration-300 hover:scale-105"
            variant="secondary"
          >
            <Link aria-label="Entre em contato conosco" href="/contact">
              Fale Conosco
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
