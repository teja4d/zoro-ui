import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';

import './globals.css';

import Navbar from '../components/nav-bar/nav-bar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ZORO UK',
  description: 'ZORO Uk Take Home Test',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <body className="h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
