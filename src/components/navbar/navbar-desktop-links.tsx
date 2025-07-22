import { NavbarLink } from '@/components';

export function NavbarDesktopLinks() {
  return (
    <div className="hidden space-x-6 md:flex">
      <NavbarLink href="/products" label="Produtos" />
      <NavbarLink href="/checkout" label="Finalizar Compra" />
    </div>
  );
}
