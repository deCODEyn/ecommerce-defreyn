'use client';

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CheckoutItem,
} from '@/components';
import { useCartStore } from '@/hooks';
import { checkoutAction } from '@/lib/http/checkout-action';

export default function CheckoutPage() {
  const { items } = useCartStore();
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="container mx-auto flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center bg-background px-4 py-8 text-center text-foreground">
        <h1 className="mb-4 font-bold text-3xl">Seu carrinho está vazio!</h1>
        <p className="text-muted-foreground">
          Adicione alguns produtos para finalizar sua compra.
        </p>
        <Button asChild className="mt-6" variant="default">
          <a href="/products">Ver Produtos</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto bg-background px-4 py-8 text-foreground">
      <h1 className="mb-8 text-center font-bold text-4xl text-primary">
        Finalizar Compra
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="mb-6 border-border bg-card">
            <CardHeader>
              <CardTitle className="font-bold text-2xl text-primary-foreground">
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
                <span className="font-semibold text-foreground text-xl">
                  Total:
                </span>
                <span className="font-bold text-2xl text-primary">
                  R${(total / 100).toFixed(2)}
                </span>
              </div>
            </CardContent>
          </Card>
          {/* <Card className="mb-6 border-border bg-card">
            <CardHeader>
              <CardTitle className="font-bold text-primary-foreground text-xl">
                Endereço de Entrega
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">Seu Endereço Aqui</p>
              <Button className="mt-2 px-0" variant="link">
                Alterar
              </Button>
            </CardContent>
          </Card> */}
        </div>
        <div className="md:col-span-1">
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
                  <span>R$XX.XX implementar lógica de frete!</span>
                </div>
                <div className="flex justify-between border-border border-t pt-3 font-bold text-primary text-xl">
                  <span>Total Geral:</span>
                  <span>R${(total / 100).toFixed(2)} + valor do frete!</span>
                </div>
              </div>
              <form action={checkoutAction} className="space-y-4">
                <input
                  name="items"
                  type="hidden"
                  value={JSON.stringify(items)}
                />
                <Button className="w-full py-3" type="submit" variant="default">
                  Ir para o Pagamento
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
