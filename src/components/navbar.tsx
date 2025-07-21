import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 shadow">
      <div className="container mx-auto flex items-center justify-between bg-background p-4 text-white">
        <Link className="hover:text-amber-600" href="/">
          My Ecommerce
        </Link>
        <div className="hidden space-x-6 md:flex">
          <Link href="/">Home</Link>
          <Link className="hover:text-amber-600" href="/products">
            Produtos
          </Link>
          <Link className="hover:text-amber-600" href="/checkout">
            Finalizar Compra
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-4" />
    </nav>
  );
}
