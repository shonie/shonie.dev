import type { Metadata } from 'next';
import { Work_Sans, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { CV_DATA } from '@/lib/cv-data';
import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION } from '@/lib/site';

const fontDisplay = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
});

const fontBody = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  authors: [{ name: CV_DATA.name, url: SITE_URL }],
  creator: CV_DATA.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    url: '/',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
  },
};

// JSON-LD Person structured data — helps search engines resolve the site to a
// real person (job title, location, and verified profiles via sameAs) and can
// feed a Google Knowledge Panel. Built from the same CV source as the page.
const emailContact = CV_DATA.contacts.find((c) => c.icon === 'envelope');

const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: CV_DATA.name,
  url: SITE_URL,
  image: `${SITE_URL}/portrait.jpg`,
  jobTitle: CV_DATA.title,
  description: CV_DATA.summary,
  ...(emailContact ? { email: emailContact.text } : {}),
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'The Hague',
    addressCountry: 'NL',
  },
  sameAs: CV_DATA.contacts.filter((c) => c.href.startsWith('http')).map((c) => c.href),
  knowsAbout: CV_DATA.skills,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        {children}
      </body>
    </html>
  );
}
