import Link from 'next/link';
import type { NavbarLinkInterface } from '@/types';

export function NavbarLink({ href, label, onClick }: NavbarLinkInterface) {
  return (
    <Link
      aria-label={`Navegar para a página de ${label}`}
      className="text-foreground transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      href={href}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
