import type { PriceDisplayType } from '@/types';
import { formatCurrency } from '@/utils/currency';
import { logError } from '@/utils/logger';

export function PriceDisplay({ price, className }: PriceDisplayType) {
  if (!(price?.unit_amount && price?.currency)) {
    return null;
  }

  try {
    const formattedPrice = formatCurrency(price.unit_amount);
    return <p className={className}>{formattedPrice}</p>;
  } catch (error) {
    logError('Erro ao formatar preço:', error);
    return <p className={className}>Preço Inválido</p>;
  }
}
