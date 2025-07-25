import { QuantitySelector } from '@/components/elements';
import { Button } from '@/components/ui';
import { useCartStore } from '@/hooks';
import type { CartItemActionType } from '@/types';

export function CartItemAction({
  itemId,
  itemName,
  itemQuantity,
}: CartItemActionType) {
  const { removeProduct } = useCartStore();

  return (
    <div className="mt-2 flex items-center justify-between">
      <QuantitySelector
        className="justify-start space-x-2 pt-0"
        productId={itemId}
        productName={itemName}
        quantity={itemQuantity}
      />
      <Button
        className="text-destructive-foreground hover:bg-destructive/80"
        onClick={() => removeProduct(itemId)}
        size="sm"
        variant="destructive"
      >
        Remover
      </Button>
    </div>
  );
}
