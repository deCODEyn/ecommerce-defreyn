import { XCircleIcon } from 'lucide-react';

export function HomeErrorProducts() {
  return (
    <output className="container mx-auto py-8 text-center">
      <XCircleIcon className="mx-auto mb-4 size-16 text-red-500" />
      <p className="mb-2 font-medium text-lg text-red-500">
        Ocorreu um erro ao carregar os produtos do servidor.
      </p>
      <p className="text-base text-muted-foreground">
        Por favor, tente novamente mais tarde. Se o problema persistir, utilize
        nossa guia "Fale Conosco".
      </p>
    </output>
  );
}
