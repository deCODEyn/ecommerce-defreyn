import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from '@/components/carousel';
import { Button } from '@/components/ui/button';
import { stripe } from '@/lib/stripe';

export default async function Home() {
  const products = await stripe.products.list({
    expand: ['data.default_price'],
    limit: 5,
  });

  return (
    <div>
      <section className="rounded-3xl border-2 border-cyan-950 py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
          <div className="max-w-md space-y-4">
            <h2 className="font-bold text-3xl tracking-tight md:text-4xl">
              Bem vindo
            </h2>
            <p className="text-neutral-400">
              Descruba os produtos mais recentes com os melhores preços!
            </p>
            <Button
              asChild
              className="inline-flex items-center justify-center rounded-full bg-amber-700 px-6 py-3 text-fuchsia-200"
              variant="default"
            >
              <Link
                className="inline-flex items-center justify-center rounded-full px-6 py-3"
                href="/products"
              >
                Catálogo
              </Link>
            </Button>
          </div>
          <Image
            alt="Imagem baner de um de nosso produtos."
            className="rounded"
            height={450}
            src={products.data[0].images[0]}
            width={450}
          />
        </div>
      </section>
      <section className="py-8">
        <Carousel products={products.data} />
      </section>
    </div>
  );
}
