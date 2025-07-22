import type React from 'react';

export interface NavbarActionInterface {
  onMobileMenuToggle: () => void;
  isMobileMenuOpen: boolean;
  MobileMenuIcon: React.ElementType;
}
