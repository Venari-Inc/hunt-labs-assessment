import type { Metadata } from 'next';
import { Bebas_Neue } from 'next/font/google';
import './globals.css';
import { MainHeader } from '@/components/ui/layout/MainHeader';
import { MainFooter } from '@/components/ui/layout/MainFooter';

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
});

export const metadata: Metadata = {
  title: 'Product Search',
  description: 'Hunt Labs Technical Assessment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} flex flex-col min-h-screen`}>
        <MainHeader />
        <main className="mx-auto flex w-full max-w-screen-2xl grow px-5">
          {children}
        </main>
        <MainFooter />
      </body>
    </html>
  );
}
