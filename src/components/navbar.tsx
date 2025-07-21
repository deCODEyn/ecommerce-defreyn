import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link className="hover:text-blue-600" href="/">
          My Ecommerce
        </Link>
        <div className="hidden space-x-6 md:flex">
          <Link href="/">Home</Link>
          <Link className="hover:text-blue-600" href="/products">
            Produtos
          </Link>
          <Link className="hover:text-blue-600" href="/checkout">
            Finalizar Compra
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-4" />
    </nav>
  );
}
