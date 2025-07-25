import { CheckoutItem } from '@/components/checkout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import type { CheckoutItemCardType } from '@/types';

export function CheckoutItemListCard({ items, total }: CheckoutItemCardType) {
  return (
    <Card className="mb-6 border-border bg-card">
      <CardHeader>
        <CardTitle className="font-bold text-2xl text-foreground">
          Seu Pedido
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {items.map((item) => (
            <CheckoutItem item={item} key={item.id} />
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between border-border border-t pt-4">
          <span className="font-semibold text-foreground text-xl">Total:</span>
          <span className="font-bold text-2xl text-primary">
            R${(total / 100).toFixed(2)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
