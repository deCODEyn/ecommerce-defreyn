'use client';

import { useState, useTransition } from 'react';
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
import { CheckoutPriceSummary } from './checkout-price-summary';

export function OrderSummaryCard({ items, total }: CheckoutItemCardType) {
  const [isPending, startTransition] = useTransition();
  const [isCheckoutError, setIsCheckoutError] = useState(false);

  const shippingCost = 0;
  const finalTotal = total + shippingCost;

  const handleCheckoutSubmit = () => {
    setIsCheckoutError(false);
    startTransition(async () => {
      try {
        await checkoutAction(items);
      } catch (error) {
        logError('Erro ao finalizar a compra no cliente:', error);
        toast.error('Ocorreu um erro ao finalizar a compra. Tente novamente.');
        setIsCheckoutError(true);
      }
    });
  };

  return (
    <Card className="sticky top-4 mb-6 border-border bg-card">
      <CardHeader>
        <CardTitle className="font-bold text-2xl text-foreground">
          Finalizar Compra
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CheckoutPriceSummary
          finalTotal={finalTotal}
          shippingCost={shippingCost}
          subtotal={total}
        />
        <form className="space-y-4">
          <Button
            className="w-full py-3"
            disabled={isPending}
            onClick={handleCheckoutSubmit}
            type="button"
            variant={isCheckoutError ? 'destructive' : 'default'}
          >
            {isPending ? 'Processando...' : 'Ir para o Pagamento'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
