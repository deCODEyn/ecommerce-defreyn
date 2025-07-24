import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui';

export function DeliveryAddressCard() {
  return (
    <Card className="mb-6 border-border bg-card">
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
    </Card>
  );
}
