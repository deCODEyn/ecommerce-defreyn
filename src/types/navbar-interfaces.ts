export interface MobileMenuButtonInterface {
  onToggle: () => void;
  className?: string;
  isOpen: boolean;
}

export interface MobileMenuInterface {
  onClose: () => void;
  isOpen: boolean;
}

export interface MobileMenuLinksInterface {
  onLinkClick: () => void;
}

export interface NavbarLinkInterface {
  onClick?: () => void;
  href: string;
  label: string;
}
