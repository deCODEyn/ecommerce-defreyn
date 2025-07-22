'use client';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useCallback, useEffect, useState } from 'react';
import { NavbarLogo } from '@/components/navbar/navbar-logo';
import { MobileMenu } from './mobile-menu';
import { NavbarActions } from './navbar-action';
import { NavbarDesktopLinks } from './navbar-desktop-links';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const toggleMobileMenu = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-border border-b bg-card shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        <NavbarLogo />
        <NavbarDesktopLinks />
        <NavbarActions
          isMobileMenuOpen={mobileOpen}
          MobileMenuIcon={mobileOpen ? XMarkIcon : Bars3Icon}
          onMobileMenuToggle={toggleMobileMenu}
        />
      </div>
      <MobileMenu isOpen={mobileOpen} onClose={toggleMobileMenu} />
    </nav>
  );
}
