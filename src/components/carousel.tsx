'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import type Stripe from 'stripe';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import type { ProductsList } from '@/types/products-list';

export function Carousel({ products }: ProductsList) {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  const currentProduct = products[current];
  const price = currentProduct.default_price as Stripe.Price;

  return (
    <Card className="relative overflow-hidden rounded-lg border-gray-300 shadow-md">
      {currentProduct.images?.[0] && (
        <div className="relative h-120 w-full lg:h-180">
          <Image
            alt={currentProduct.name}
            className="transition-opacity duration-500 ease-in-out"
            layout="fill"
            objectFit="cover"
            src={currentProduct.images[0]}
          />
        </div>
      )}
      <CardContent className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <CardTitle className="mb-2 font-bold text-3xl text-white">
          {currentProduct.name}
        </CardTitle>
        {price?.unit_amount && (
          <p className="text-white text-xl">
            R${(price.unit_amount / 100).toFixed(2)}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
