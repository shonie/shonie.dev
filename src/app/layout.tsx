import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import type { Metadata } from 'next';
import { Roboto, Kanit } from 'next/font/google';
import { Header } from '@/components/Header';
import { appConfig } from '@/app-config';
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
  title: appConfig.siteName,
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
        <Theme
          accentColor="mint"
          grayColor="gray"
          panelBackground="solid"
          scaling="100%"
          radius="full"
        >
          <Header />
          {children}
        </Theme>
      </body>
    </html>
  );
}
