'use client';

import { CartIconButton } from '@/components/cart';
import { ThemeToggle } from '@/components/elements';

export function NavbarActions() {
  return (
    <div className="flex items-center space-x-4">
      <ThemeToggle />
      <CartIconButton />
    </div>
  );
}
