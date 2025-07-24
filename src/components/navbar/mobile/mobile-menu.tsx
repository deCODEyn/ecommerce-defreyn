'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { useCallback, useEffect } from 'react';
import { MobileMenuLinks } from '@/components/navbar';
import { Button } from '@/components/ui';
import type { MobileMenuInterface } from '@/types';

export function MobileMenu({ isOpen, onClose }: MobileMenuInterface) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <>
      {isOpen && (
        <div
          aria-hidden={!isOpen}
          className="fixed inset-0 z-40 bg-[rgba(0,0,0,0.2)] transition-opacity duration-300 md:hidden"
          onClick={onClose}
        />
      )}
      <nav
        aria-hidden={!isOpen}
        className={`fixed top-0 right-0 z-50 h-full w-64 transform bg-card text-foreground shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <Button
            aria-label="Fechar menu mobile"
            className="text-foreground hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            onClick={onClose}
            variant="ghost"
          >
            <XMarkIcon className="h-6 w-6" />
          </Button>
        </div>
        <MobileMenuLinks onLinkClick={handleLinkClick} />
      </nav>
    </>
  );
}
