import Link from 'next/link';

export function NavbarLogo() {
  return (
    <Link
      aria-label="Voltar para a página inicial do E-Commerce Estelar"
      className="font-semibold text-primary text-xl transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-2xl"
      href="/"
    >
      E-Commerce Estelar
    </Link>
  );
}
