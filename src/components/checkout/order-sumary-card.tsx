'use client';

import { toast } from 'sonner';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import { checkoutAction } from '@/lib/http/checkout-action';
import type { CheckoutItemCardType } from '@/types';
import { logError } from '@/utils/logger';

export function OrderSummaryCard({ items, total }: CheckoutItemCardType) {
  const shippingCost = 0;
  const finalTotal = total + shippingCost;

  const handleCheckoutSubmit = async (formData: FormData) => {
    formData.append('items', JSON.stringify(items));
    try {
      await checkoutAction(formData);
    } catch (error) {
      logError('Erro ao finalizar a compra no cliente:', error);
      toast.error('Ocorreu um erro ao finalizar a compra. Tente novamente.');
    }
  };

  return (
    <Card className="sticky top-4 mb-6 border-border bg-card">
      <CardHeader>
        <CardTitle className="font-bold text-2xl text-primary-foreground">
          Finalizar Compra
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6 space-y-3">
          <div className="flex justify-between text-foreground">
            <span>Subtotal:</span>
            <span>R${(total / 100).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-foreground">
            <span>Frete:</span>
            <span>R${(shippingCost / 100).toFixed(2)}</span>{' '}
          </div>
          <div className="flex justify-between border-border border-t pt-3 font-bold text-primary text-xl">
            <span>Total Geral:</span>
            <span>R${(finalTotal / 100).toFixed(2)}</span>{' '}
          </div>
        </div>
        <form action={handleCheckoutSubmit} className="space-y-4">
          <input name="items" type="hidden" value={JSON.stringify(items)} />
          <Button className="w-full py-3" type="submit" variant="default">
            Ir para o Pagamento
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
