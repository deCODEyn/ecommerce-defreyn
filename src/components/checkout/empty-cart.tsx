import Link from 'next/link';
import { Button } from '@/components/ui';

export function EmptyCart() {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center bg-background px-4 py-8 text-center text-foreground">
      <h1 className="mb-4 font-bold text-3xl">Seu carrinho está vazio!</h1>
      <p className="text-muted-foreground">
        Adicione alguns produtos para finalizar sua compra.
      </p>
      <Button asChild className="mt-6" variant="default">
        <Link href="/products">Ver Produtos</Link>
      </Button>
    </div>
  );
}
