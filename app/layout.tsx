import type { Metadata } from 'next';
import { Inter, Poppins, Bungee } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const bungee = Bungee({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-bungee',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '#TeamJesus - $1 = 1,000 People Hear About Jesus',
  description: 'Join #TeamJesus in raising $8.142M to tell 8.142 billion people about Jesus through PostClips. Every dollar funds Gospel content that reaches 1,000 people.',
  openGraph: {
    title: '#TeamJesus - $1 = 1,000 People Hear About Jesus',
    description: 'Join the movement to reach 8.142 billion people with the Gospel through short-form video content.',
    type: 'website',
    url: 'https://postclips.com/teamjesus',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '#TeamJesus - PostClips',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '#TeamJesus - $1 = 1,000 People Hear About Jesus',
    description: 'Join the movement to reach 8.142 billion people with the Gospel.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${bungee.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}