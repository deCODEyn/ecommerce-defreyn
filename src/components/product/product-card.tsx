import Link from 'next/link';
import type Stripe from 'stripe';
import { PriceDisplay, ProductImage } from '@/components/product';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import type { ProductType } from '@/types';

export function ProductCard({ product }: ProductType) {
  const price = product.default_price as Stripe.Price;

  return (
    <Link
      aria-label={`Ver detalhes do produto ${product.name}`}
      className="block h-full"
      href={`/products/${product.id}`}
    >
      <Card className="group flex h-[480px] flex-col gap-0 border-border bg-card py-0 transition duration-300 hover:shadow-xl sm:h-[520px] lg:h-[580px]">
        <ProductImage
          altText={product.name}
          imageClassName="object-cover transition-opacity duration-300 group-hover:opacity-75"
          imageSizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          imageUrl={product.images[0]}
          wrapperClassName="relative h-60 w-full overflow-hidden rounded-t-lg sm:h-72 lg:h-80"
        />
        <CardHeader className="h-[88px] flex-shrink-0 p-4">
          <CardTitle className="line-clamp-2 font-bold text-2xl text-primary">
            {product.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-grow flex-col justify-between p-4">
          {product.description && (
            <p className="mb-2 line-clamp-3 h-[68px] text-muted-foreground text-sm">
              {product.description}
            </p>
          )}
          <PriceDisplay
            className="text-right font-bold text-lg text-secondary-foreground"
            price={price}
          />
          <Button
            aria-label={`Ver detalhes de ${product.name}`}
            className="mt-4 w-full shadow-md transition-all duration-300 hover:scale-[1.02]"
            variant="default"
          >
            Detalhes
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}
