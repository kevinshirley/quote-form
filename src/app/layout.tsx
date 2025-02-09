import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import LoggedInUserValidation from '@/components/logged-in-user-validation';

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
        <LoggedInUserValidation>
          {children}
        </LoggedInUserValidation>
        <Toaster position='top-right' />
      </body>
    </html>
  );
}
