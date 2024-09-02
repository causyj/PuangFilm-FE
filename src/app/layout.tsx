import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const cafe24 = localFont({
  src: '../styles/fonts/cafe24.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-cafe24',
});

const sfpro = localFont({
  src: '../styles/fonts/sfpro.ttf',
  display: 'swap',
  weight: '45 920',
  variable: '--font-sfpro',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${cafe24.variable} ${sfpro.variable}`}>
      <body className="mx-auto flex min-h-screen min-w-[390px] max-w-[420px] flex-1 items-center justify-center overflow-y-auto bg-background px-6 pb-10 pt-8 font-cafe24 text-primary-darkblue">
        {children}
      </body>
    </html>
  );
}
