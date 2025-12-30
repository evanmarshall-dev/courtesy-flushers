import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.courtesyflushers.ca'
  ),
  title: {
    default: 'Courtesy Flushers - Professional Portable Sanitation Services',
    template: '%s | Courtesy Flushers',
  },
  description:
    'Maritime Canada&apos;s premier portable toilet and sanitation rental service. Clean, reliable solutions for construction sites, special events, and more. Available 24/7.',
  keywords: [
    'portable toilets',
    'sanitation rental',
    'construction toilets',
    'event toilets',
    'Maritime Canada',
    'Nova Scotia',
    'New Brunswick',
  ],
  authors: [{ name: 'Courtesy Flushers' }],
  creator: 'Courtesy Flushers',
  publisher: 'Courtesy Flushers',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://courtesyflushers.ca',
    siteName: 'Courtesy Flushers',
    title: 'Courtesy Flushers - Professional Portable Sanitation Services',
    description:
      'Maritime Canada&apos;s premier portable toilet and sanitation rental service. Clean, reliable solutions for construction sites, special events, and more.',
    images: [
      {
        url: '/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Courtesy Flushers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Courtesy Flushers - Professional Portable Sanitation Services',
    description:
      'Maritime Canada&apos;s premier portable toilet and sanitation rental service. Clean, reliable solutions for construction sites, special events, and more.',
    images: ['https://courtesyflushers.ca/images/hero.jpeg'],
  },
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={inter.variable}>
      <body>
        <div className='app'>
          <Navbar />
          <main role='main'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
