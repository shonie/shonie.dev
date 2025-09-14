import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import type { AppProps } from 'next/app';
import { Roboto, Kanit, Inter, Inter_Tight, Ultra } from 'next/font/google';
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

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
});

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
});

const ultra = Ultra({
  variable: '--font-ultra',
  subsets: ['latin'],
  weight: ['400'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${inter.variable} ${roboto.variable} ${kanit.variable} ${interTight.variable} ${ultra.variable} antialiased bg-linear-to-br/longer from-black via-zinc-900 to-[#0cd09c]`}
    >
      <ThemeProvider attribute="class" defaultTheme="dark">
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
