import type { Metadata } from 'next';
import { Roboto, Kanit } from 'next/font/google';
import { Header } from '@/components/Header';
import { config } from '../app-config';
import './globals.css';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
});

const kanit = Kanit({
  variable: '--font-kanit',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
});

export const metadata: Metadata = {
  title: config.siteName,
  description: 'Oleksandr Starnikov',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${kanit.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
