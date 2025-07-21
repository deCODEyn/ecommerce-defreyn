import type { Metadata } from 'next';
import '@/app/globals.css';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  title: 'E-Commerce Defreyn',
  description: 'E-commerce para portifólio.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="container mx-auto flex-grow px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
