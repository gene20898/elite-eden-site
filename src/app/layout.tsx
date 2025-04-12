import type {Metadata} from 'next';
import {
  Merriweather,
  Poppins,
  Sarabun,
  Noto_Serif_Thai,
} from 'next/font/google';
import './globals.css';
import Navbar from '../components/layout/navbar';
export const metadata: Metadata = {
  title: 'Elite Eden | Premium Trees and Plants',
  description: 'Premium trees and plants for your garden sanctuary',
};

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-merriweather',
});

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const sarabun = Sarabun({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['thai'],
  variable: '--font-sarabun',
});

const notoSerifThai = Noto_Serif_Thai({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['thai'],
  variable: '--font-notoSerifThai',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="/favicon.ico" rel="icon" />
      </head>
      <body
        className={`${merriweather.variable} ${poppins.variable} ${sarabun.variable} ${notoSerifThai.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
