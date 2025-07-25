import type { CheckoutPriceSummaryType } from '@/types';
import { formatCurrency } from '@/utils/currency';

export function CheckoutPriceSummary({
  subtotal,
  shippingCost,
  finalTotal,
}: CheckoutPriceSummaryType) {
  return (
    <div className="mb-6 space-y-3">
      <div className="flex justify-between text-foreground">
        <span>Subtotal:</span>
        <span>{formatCurrency(subtotal)}</span>
      </div>
      <div className="flex justify-between text-foreground">
        <span>Frete:</span>
        <span>{formatCurrency(shippingCost)}</span>
      </div>
      <div className="flex justify-between border-border border-t pt-3 font-bold text-primary text-xl">
        <span>Total:</span>
        <span>{formatCurrency(finalTotal)}</span>
      </div>
    </div>
  );
}
