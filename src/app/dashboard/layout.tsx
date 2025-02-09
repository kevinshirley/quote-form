import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Link from "next/link";
import AppContextProvider from '@/context/app-context';
import DropdownMenu from '@/components/dropdown-menu';

import '../globals.css';

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
        <AppContextProvider>
          <main className="grid h-screen grid-cols-[250px_1fr] grid-rows-[auto_1fr]">
            {/* Sidebar (Fixed / Sticky) */}
            <aside className="bg-gray-900 text-white p-4 h-screen sticky top-0">
              <nav>
                <ul className="space-y-2">
                  <Link href="/dashboard"><li className="p-3 hover:bg-gray-700 rounded relative">Dashboard</li></Link>
                  <li className="p-3 hover:bg-gray-700 rounded">Forms</li>
                  <li className="p-3 hover:bg-gray-700 rounded">Analytics</li>
                  <li className="p-3 hover:bg-gray-700 rounded">Workflows</li>
                </ul>
              </nav>
            </aside>

            {/* Main Content Wrapper */}
            <div className="grid grid-rows-[auto_1fr] h-screen">
              {/* Top Bar (Fixed within Main Content) */}
              <header className="bg-white p-4 shadow-md sticky top-0 z-10 flex justify-between">
                <h1 className="text-lg font-semibold">Dashboard</h1>
                <DropdownMenu />
              </header>

              {/* Scrollable Main Content */}
              <main className="p-6 overflow-y-auto h-full">
                {children}
              </main>
            </div>
          </main>
        </AppContextProvider>
        <Toaster position='top-right' />
      </body>
    </html>
  );
}
