import type { CheckoutHeaderType } from '@/types';

export function CheckoutHeader({ title }: CheckoutHeaderType) {
  return (
    <h1 className="mb-8 text-center font-bold text-4xl text-primary">
      {title}
    </h1>
  );
}
