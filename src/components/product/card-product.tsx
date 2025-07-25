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
import type { ProductCardType } from '@/types';

export function CardProduct({
  product,
  showDescription = true,
  showDetailsButton = true,
  cardClass,
  cardContentClass,
  cardHeaderClass,
  cardTitleClass,
  imageSizes,
  imageWrapperClass,
  linkClass,
  priceDisplayClass,
  productImageClass,
}: ProductCardType) {
  const price = product.default_price as Stripe.Price;

  return (
    <Link
      aria-label={`Ver detalhes do produto ${product.name}`}
      className={`block h-full ${linkClass}`}
      href={`/products/${product.id}`}
    >
      <Card className={`flex flex-col border-border ${cardClass}`}>
        <ProductImage
          altText={product.name}
          imageClassName={`object-cover transition-opacity ${productImageClass}`}
          imageSizes={imageSizes}
          imageUrl={product.images[0]}
          wrapperClassName={`relative ${imageWrapperClass}`}
        />
        <CardHeader className={cardHeaderClass}>
          <CardTitle
            className={`font-bold text-2xl text-primary ${cardTitleClass}`}
          >
            {product.name}
          </CardTitle>
        </CardHeader>
        <CardContent className={cardContentClass}>
          {showDescription && product.description && (
            <p className="mb-2 line-clamp-3 h-[68px] text-muted-foreground text-sm">
              {product.description}
            </p>
          )}
          <PriceDisplay
            className={`text-lg ${priceDisplayClass}`}
            price={price}
          />
          {showDetailsButton && (
            <Button
              aria-hidden="true"
              aria-label={`Ver detalhes de ${product.name}`}
              className="mt-4 w-full shadow-md transition-all duration-300 hover:scale-[1.02]"
              tabIndex={-1}
              variant="default"
            >
              Detalhes
            </Button>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
