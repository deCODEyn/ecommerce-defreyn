import Image from 'next/image';
import type Stripe from 'stripe';
import { Button } from '@/components/ui/button';
import type { ProductType } from '@/types/product-type';

export default function ProductDetail({ product }: ProductType) {
  const price = product.default_price as Stripe.Price;

  return (
    <div className="container mx-auto flex flex-col items-center gap-8 px-4 py-8 md:flex-row">
      {product.images?.[0] && (
        <div className="relative h-96 w-full overflow-hidden rounded-lg sm:w-1/2 lg:h-180">
          <Image
            alt={product.name}
            className="transition duration-300 hover:opacity-90"
            layout="fill"
            objectFit="cover"
            src={product.images[0]}
          />
        </div>
      )}
      <div className="md:w-1/2">
        <h1 className="mb-4 font-bold text-3xl text-amber-700">
          {product.name}
        </h1>
        {product.description && (
          <p className="mb-4 text-purple-300">{product.description}</p>
        )}
        {price?.unit_amount && (
          <p className="mb-10 font-semibold text-2xl text-teal-500">
            R${(price.unit_amount / 100).toFixed(2)}
          </p>
        )}
        <div className="m-10 flex items-center space-x-4">
          <Button className="size-9 text-teal-500 text-xl" variant="outline">
            -
          </Button>
          <span className="font-semibold text-lg text-teal-500">
            quantidade
          </span>
          <Button className="size-9 text-teal-500 text-xl" variant="outline">
            +
          </Button>
        </div>
      </div>
    </div>
  );
}
