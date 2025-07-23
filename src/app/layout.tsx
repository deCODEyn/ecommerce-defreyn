import type { Metadata, Viewport } from 'next';
import '@/app/globals.css';
import { Navbar, Toaster } from '@/components';

export const metadata: Metadata = {
  title: 'E-Commerce Estelar | Sua Loja de Produtos Únicos',
  description:
    'Descubra uma coleção exclusiva de produtos com design e qualidade que transcendem. Explore nosso universo de ofertas.',
  colorScheme: 'light dark',
  themeColor: '#1A2B3D',
};
export const viewport: Viewport = {
  themeColor: '#1A2B3D',
  colorScheme: 'light dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-background text-foreground antialiased">
        <Navbar />
        <main className="container mx-auto flex-grow px-4 py-8 pt-20 md:pt-24">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
