import type { PriceDisplayType } from '@/types';

export function PriceDisplay({ price, className }: PriceDisplayType) {
  if (!price?.unit_amount) {
    return null;
  }
  return <p className={className}>R${(price.unit_amount / 100).toFixed(2)}</p>;
}
