import Link from 'next/link';

export function NavbarDesktopLinks() {
  return (
    <div className="hidden space-x-6 md:flex">
      <Link
        aria-label="Navegar para a página de produtos"
        className="text-foreground transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        href="/products"
      >
        Produtos
      </Link>
      <Link
        aria-label="Navegar para a página de finalização de compra"
        className="text-foreground transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        href="/checkout"
      >
        Finalizar Compra
      </Link>
    </div>
  );
}
