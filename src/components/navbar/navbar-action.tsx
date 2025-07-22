'use client';

import {
  MoonIcon,
  ShoppingCartIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/components';
import { useTheme } from '@/hooks/use-theme';
import { useCartStore } from '@/store/cart-store';
import type { NavbarActionInterface } from '@/types';

export function NavbarActions({
  onMobileMenuToggle,
  isMobileMenuOpen,
  MobileMenuIcon,
}: NavbarActionInterface) {
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const { theme, setTheme, mounted } = useTheme();

  if (!mounted) {
    return null;
  }
  return (
    <div className="flex items-center space-x-4">
      <Button
        aria-label={`Alternar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
        className="text-foreground hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        size="icon"
        variant="ghost"
      >
        {theme === 'dark' ? (
          <SunIcon className="h-6 w-6" />
        ) : (
          <MoonIcon className="h-6 w-6" />
        )}
      </Button>

      <Link
        aria-label={`Ver carrinho de compras com ${cartCount} itens`}
        className="relative text-foreground transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        href="/checkout"
      >
        <ShoppingCartIcon className="h-6 w-6" />
        {cartCount > 0 && (
          <span className="-top-2 -right-2 absolute flex h-5 w-5 animate-bounce-once items-center justify-center rounded-full bg-destructive font-bold text-destructive-foreground text-xs">
            {cartCount}
          </span>
        )}
      </Link>

      <Button
        aria-label={
          isMobileMenuOpen ? 'Fechar menu mobile' : 'Abrir menu mobile'
        }
        className="text-foreground hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:hidden"
        onClick={onMobileMenuToggle}
        variant="ghost"
      >
        <MobileMenuIcon className="h-6 w-6" />
      </Button>
    </div>
  );
}
