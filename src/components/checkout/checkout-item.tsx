import { Button, ProductImage, QuantitySelector } from '@/components';
import { useCartStore } from '@/hooks';
import type { CheckoutItemType } from '@/types';

export function CheckoutItem({ item }: CheckoutItemType) {
  const { removeProduct } = useCartStore();

  return (
    <li className="flex items-center gap-4 border-border border-b pb-4 last:border-b-0 last:pb-0">
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-border bg-muted">
        {item.imageUrl && (
          <ProductImage
            altText={item.name}
            imageClassName="object-cover"
            imageSizes="80px"
            imageUrl={item.imageUrl}
            wrapperClassName="relative h-full w-full"
          />
        )}
        {!item.imageUrl && (
          <div className="flex h-full w-full items-center justify-center bg-muted p-1 text-center text-muted-foreground text-xs">
            Sem Imagem
          </div>
        )}
      </div>
      <div className="flex-grow">
        <h3 className="font-semibold text-foreground text-lg">{item.name}</h3>
        <p className="text-muted-foreground text-sm">
          R${(item.price / 100).toFixed(2)} / un
        </p>
        <div className="mt-2 flex items-center justify-between">
          <QuantitySelector
            className="justify-start space-x-2 pt-0"
            productId={item.id}
            productName={item.name}
            quantity={item.quantity}
          />
          <Button
            className="text-destructive-foreground hover:bg-destructive/80"
            onClick={() => removeProduct(item.id)}
            size="sm"
            variant="destructive"
          >
            Remover
          </Button>
        </div>
      </div>
      <span className="font-bold text-lg text-primary">
        R${((item.price * item.quantity) / 100).toFixed(2)}
      </span>
    </li>
  );
}
