import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import type { AppProps } from 'next/app';
import { Roboto, Kanit } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Header } from '@/components/Header';
import '../styles/globals.css';

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${roboto.variable} ${kanit.variable} antialiased`}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Theme
          accentColor="mint"
          grayColor="gray"
          panelBackground="solid"
          scaling="100%"
          radius="full"
          hasBackground={false}
        >
          <Header />
          <Component {...pageProps} />
        </Theme>
      </ThemeProvider>
    </div>
  );
}
