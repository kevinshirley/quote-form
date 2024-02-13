import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import AppContextProvider from '@/context/app-context';

import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Success | Quote Form',
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
        <AppContextProvider>
          {children}
        </AppContextProvider>
        <Toaster position='top-right' />
      </body>
    </html>
  );
}
