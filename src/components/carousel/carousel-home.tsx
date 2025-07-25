'use client';

import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrentSlide(api.selectedScrollSnap());

    const handleSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };
    api.on('select', handleSelect);
    return () => {
      api.off('select', handleSelect);
    };
  }, [api]);

  return (
    <div className="group relative">
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
        <CarouselPrevious className="-translate-y-1/2 absolute top-1/2 left-4 z-10 hidden size-10 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100 md:flex" />
        <CarouselNext className="-translate-y-1/2 absolute top-1/2 right-4 z-10 hidden size-10 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100 md:flex" />
      </Carousel>
      <CarouselPagination api={api} count={count} currentSlide={currentSlide} />
    </div>
  );
}
