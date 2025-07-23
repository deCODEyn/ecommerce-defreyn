export type NavLinkItemType = {
  href: string;
  label: string;
  mobileOnly?: boolean;
  desktopOnly?: boolean;
};

export const mainNavLinks: NavLinkItemType[] = [
  { href: '/', label: 'Home', mobileOnly: true },
  { href: '/products', label: 'Produtos' },
  { href: '/checkout', label: 'Finalizar Compra' },
];
