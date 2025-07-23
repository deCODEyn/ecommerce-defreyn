'use client';

import { CartIconButton, ThemeToggle } from '@/components';

export function NavbarActions() {
  return (
    <div className="flex items-center space-x-4">
      <ThemeToggle />
      <CartIconButton />
    </div>
  );
}
