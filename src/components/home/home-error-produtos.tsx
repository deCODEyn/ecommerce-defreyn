export function HomeErrorProducts() {
  return (
    <div className="container mx-auto py-8 text-center">
      <p className="mb-2 font-medium text-lg text-red-500">
        Ocorreu um erro ao carregar os produtos do servidor.
      </p>
      <p className="text-base text-muted-foreground">
        Por favor, tente novamente mais tarde. Se o problema persistir, utilize
        nossa guia "Fale Conosco".
      </p>
    </div>
  );
}
