import { ButtonLink } from '@/components';

export function CallToActionSection() {
  return (
    <section className="mx-4 mt-12 mb-8 max-w-7xl rounded-3xl bg-muted py-12 text-foreground shadow-inner md:mx-8 lg:mx-auto">
      <div className="container mx-auto px-4 text-center">
        <h3 className="mb-4 font-bold text-3xl text-primary">
          Sua Jornada Começa Aqui
        </h3>
        <p className="mx-auto max-w-2xl text-foreground text-lg leading-relaxed">
          Descubra a qualidade que transcende. Cada item, uma estrela em nossa
          coleção.
        </p>
        <ButtonLink
          ariaLabel="Entre em contato conosco"
          className="mt-8 text-background"
          href="/contact"
          label="Fale Conosco"
          variant="secondary"
        />
      </div>
    </section>
  );
}
