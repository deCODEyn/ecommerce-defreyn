import type React from 'react';

export type NavbarActionProps = {
  onMobileMenuToggle: () => void;
  isMobileMenuOpen: boolean;
  MobileMenuIcon: React.ElementType;
};
