'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { CarouselPagination, CarouselProductCard } from '@/components/carousel';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui';
import type { ProductsListType } from '@/types';

export function CarouselHome({ products }: ProductsListType) {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [count, setCount] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoScroll = useCallback(() => {
    if (api && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        api.scrollNext();
      }, 3000);
    }
  }, [api]);

  const stopAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll, stopAutoScroll]);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrentSlide(api.selectedScrollSnap());

    const handleSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
      stopAutoScroll();
      startAutoScroll();
    };
    api.on('select', handleSelect);
    return () => {
      api.off('select', handleSelect);
    };
  }, [api, stopAutoScroll, startAutoScroll]);

  return (
    //biome-ignore lint/nursery/noNoninteractiveElementInteractions: Este elemento <section> age como um contêiner para o carrossel, e seus eventos de mouse/foco são essenciais para a funcionalidade de auto-pausa do carrossel, sem comprometer a acessibilidade semântica da seção.
    <section
      aria-label="Carrossel de Produtos em Destaque"
      className="group relative"
      onBlur={startAutoScroll}
      onFocus={stopAutoScroll}
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
    >
      <Carousel className="w-full" opts={{ loop: true }} setApi={setApi}>
        <CarouselContent>
          {products.map((product) => {
            return (
              <CarouselItem key={product.id}>
                <CarouselProductCard product={product} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="-translate-y-1/2 absolute top-1/2 left-4 z-10 hidden size-5 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-75 shadow-md transition-opacity duration-300 md:flex" />
        <CarouselNext className="-translate-y-1/2 absolute top-1/2 right-4 z-10 hidden size-5 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-75 shadow-md transition-opacity duration-300 md:flex" />
      </Carousel>
      <CarouselPagination api={api} count={count} currentSlide={currentSlide} />
    </section>
  );
}
