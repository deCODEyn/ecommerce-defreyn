import Image from 'next/image';
import Link from 'next/link';
import type Stripe from 'stripe';
import { Button } from '@/components//ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { ProductType } from '@/types/product-type';

export function ProductCard({ product }: ProductType) {
  const price = product.default_price as Stripe.Price;

  return (
    <Link className="block h-full" href="/products/1">
      <Card className="group flex h-full flex-col gap-0 border-gray-300 bg-background py-0 transition duration-300 hover:shadow-2xl">
        {product.images?.[0] && (
          <div className="relative h-80 w-full lg:h-120">
            <Image
              alt={product.name}
              className="rounded-t-lg transition-opacity duration-300 group-hover:opacity-90"
              layout="fill"
              objectFit="cover"
              src={product.images[0]}
            />
          </div>
        )}
        <CardHeader className="p-4">
          <CardTitle className="h-12 font-bold text-2xl text-amber-700">
            {product.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-grow flex-col justify-between p-4">
          {product.description && (
            <p className="mb-2 h-12 text-pink-200 text-sm">
              {product.description}
            </p>
          )}
          {price?.unit_amount && (
            <p className="ont-semibold h-6 text-right font-bold text-lg text-teal-500">
              R${(price.unit_amount / 100).toFixed(2)}
            </p>
          )}
          <Button className="mt-4 bg-amber-950 text-teal-700 text-xl">
            Detalhes
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}
