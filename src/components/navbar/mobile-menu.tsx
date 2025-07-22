'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useCallback, useEffect } from 'react';
import { Button } from '@/components';
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
        <ul className="flex flex-col space-y-2 p-4">
          <li>
            <Link
              aria-label="Navegar para a página inicial"
              className="block rounded px-4 py-2 text-foreground transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              href="/"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              aria-label="Navegar para a página de produtos"
              className="block rounded px-4 py-2 text-foreground transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              href="/products"
              onClick={handleLinkClick}
            >
              Produtos
            </Link>
          </li>
          <li>
            <Link
              aria-label="Navegar para a página de finalização de compra"
              className="block rounded px-4 py-2 text-foreground transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              href="/checkout"
              onClick={handleLinkClick}
            >
              Finalizar Compra
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
