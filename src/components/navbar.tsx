'use client';

import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cart-store';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 shadow">
      <div className="container mx-auto flex items-center justify-between bg-background p-4 text-white">
        <Link className="hover:text-amber-600" href="/">
          My Ecommerce
        </Link>
        <div className="hidden space-x-6 md:flex">
          <Link className="hover:text-amber-600" href="/products">
            Produtos
          </Link>
          <Link className="hover:text-amber-600" href="/checkout">
            Finalizar Compra
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link className="relative" href="/checkout">
            <ShoppingCartIcon className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="-top-2 -right-2 absolute flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-xs">
                {cartCount}
              </span>
            )}
          </Link>
          <Button
            className="md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            variant="ghost"
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      {mobileOpen && (
        <nav className="bg-background text-white shadow-md md:hidden">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link className="block hover:text-amber-600" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="block hover:text-amber-600" href="/products">
                Products
              </Link>
            </li>
            <li>
              <Link className="block hover:text-amber-600" href="/checkout">
                Checkout
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </nav>
  );
}
