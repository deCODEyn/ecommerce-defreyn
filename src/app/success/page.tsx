'use client';

import {
  CheckCircleIcon,

  /*  ExternalLinkIcon */
} from 'lucide-react';

import Link from 'next/link';
import { useEffect } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import { useCartStore } from '@/hooks';

export default function SuccessPage() {
  const { clearCart } = useCartStore();
  useEffect(() => {
    clearCart();
  }, [clearCart]);
  return (
    <div className="flex min-h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center bg-background px-4 py-8 sm:px-6 lg:px-8">
      <Card className="w-full max-w-lg border-border bg-card p-6 text-center shadow-lg">
        <CardHeader className="flex flex-col items-center justify-center space-y-4 pb-4">
          <CheckCircleIcon className="h-20 w-20 text-green-500" />
          <CardTitle className="font-extrabold text-4xl text-foreground">
            Pedido Realizado com Sucesso!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-muted-foreground">
            Sua compra foi concluída com sucesso. Agradecemos a preferência!
          </p>
          <p className="text-base text-foreground">
            Seu pedido será processado após a confirmação do pagamento. Você
            receberá um e-mail de confirmação com os detalhes e o rastreamento
            em breve.
          </p>
          {/* 
          {orderId && ( // Exibe o ID do pedido se disponível
            <p className="font-semibold text-primary text-xl">
              ID do Pedido:
              <span className="text-secondary-foreground">{orderId}</span>
            </p>
          )} */}

          <div className="flex flex-col gap-4">
            <Button asChild className="w-full py-3" variant="default">
              <Link href="/products">Continuar Comprando</Link>
            </Button>

            {/* <Button asChild className="w-full py-3" variant="outline">
              <Link href="/my-orders">
                Ver Detalhes do Meu Pedido
                <ExternalLinkIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button> */}

            <Button asChild className="w-full bg-muted py-3" variant="ghost">
              <Link href="/contact">Precisa de Ajuda? Fale Conosco</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
