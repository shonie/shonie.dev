import './globals.css';

export const metadata = {
  title: 'shonie.dev — Oleksandr Starnikov',
  description:
    'Oleksandr Starnikov — cloud / technical architect. A decade building advanced B2B solutions end-to-end. Independent contractor available for remote software architecture and engineering.',
  icons: {
    icon: [
      { url: '/favicon/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
