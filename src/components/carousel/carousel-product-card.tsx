import Image from 'next/image';
import Link from 'next/link';
import type Stripe from 'stripe';
import { Card, CardContent, CardTitle, PriceDisplay } from '@/components';
import type { ProductType } from '@/types';

export function CarouselProductCard({ product }: ProductType) {
  const itemPrice = product.default_price as Stripe.Price;

  return (
    <Link
      aria-label={`Ver detalhes do produto ${product.name}`}
      className="block h-full w-full"
      href={`/products/${product.id}`}
    >
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
          <PriceDisplay className="text-foreground text-xl" price={itemPrice} />
        </CardContent>
      </Card>
    </Link>
  );
}
