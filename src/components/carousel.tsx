'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import type Stripe from 'stripe';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import {
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Carousel as ShadcnCarousel,
} from '@/components/ui/carousel';
import type { ProductsListType } from '@/types/products-list-type';

export function Carousel({ products }: ProductsListType) {
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

    api.on('select', () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      if (api) {
        api.scrollTo(index);
      }
    },
    [api]
  );

  return (
    <div className="group relative">
      <ShadcnCarousel className="w-full" opts={{ loop: true }} setApi={setApi}>
        <CarouselContent>
          {products.map((product) => {
            const itemPrice = product.default_price as Stripe.Price;
            return (
              <CarouselItem key={product.id}>
                <Card className="relative overflow-hidden rounded-lg border-border shadow-md">
                  {product.images?.[0] && (
                    <div className="relative h-120 w-full lg:h-180">
                      <Image
                        alt={product.name}
                        className="object-cover transition-opacity duration-500 ease-in-out"
                        fill
                        sizes="100vw"
                        src={product.images[0]}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  )}
                  <CardContent className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-card-foreground">
                    <CardTitle className="mb-2 font-bold text-3xl text-primary">
                      {product.name}
                    </CardTitle>
                    {itemPrice?.unit_amount && (
                      <p className="font-bold text-foreground text-xl">
                        R${(itemPrice.unit_amount / 100).toFixed(2)}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="-translate-y-1/2 absolute top-1/2 left-4 z-10 hidden size-10 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100 md:flex" />
        <CarouselNext className="-translate-y-1/2 absolute top-1/2 right-4 z-10 hidden size-10 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100 md:flex" />
      </ShadcnCarousel>
      <div className="-translate-x-1/2 absolute bottom-4 left-1/2 z-10 flex space-x-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            aria-label={`Ir para o slide ${index + 1}`}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-primary' : 'bg-muted-foreground opacity-60'}`}
            key={index.toString()}
            onClick={() => scrollTo(index)}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
