import { ButtonLink, HomeBannerImage } from '@/components';
import type { ImageUrlType } from '@/types';

export function HeroSection({ imageUrl }: ImageUrlType) {
  return (
    <section className="mx-4 mt-8 max-w-7xl rounded-3xl border-2 border-border bg-card py-8 shadow-lg sm:py-12 md:mx-8 lg:mx-auto">
      <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-4 sm:px-8 md:grid-cols-2">
        <div className="max-w-md space-y-4 text-center md:text-left">
          <h2 className="font-bold text-4xl text-primary tracking-tight md:text-5xl">
            Bem-vindo ao Nosso Universo!
          </h2>
          <p className="text-foreground leading-relaxed opacity-90">
            Desvende os produtos mais recentes e mergulhe em ofertas estelares.
            Qualidade e inovação para sua jornada.
          </p>
          <ButtonLink
            ariaLabel="Explorar todo o catálogo de produtos"
            href="/products"
            label="Explorar Catálogo"
            variant="default"
          />
        </div>
        <HomeBannerImage imageUrl={imageUrl} />{' '}
      </div>
    </section>
  );
}
