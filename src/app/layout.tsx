import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster as Sonner } from "@/components/ui/sonner";

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Quote Form',
  description: 'Instant quotes for your potential clients',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Sonner />
        {children}
      </body>
    </html>
  );
}
