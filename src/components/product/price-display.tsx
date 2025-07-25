import type { PriceDisplayType } from '@/types';
import { logError } from '@/utils/logger';

export function PriceDisplay({ price, className }: PriceDisplayType) {
  if (!(price?.unit_amount && price?.currency)) {
    return null;
  }

  try {
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: price.currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price.unit_amount / 100);
    return <p className={className}>{formattedPrice}</p>;
  } catch (error) {
    logError('Erro ao formatar preço:', error);
    return <p className={className}>Preço Inválido</p>;
  }
}
