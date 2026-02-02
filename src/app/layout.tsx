import type { Metadata } from 'next';
import { Nunito_Sans, Shadows_Into_Light } from 'next/font/google';
import TopNav from '@/components/layout/TopNav';
import BottomFooter from '@/components/layout/BottomFooter';
import './globals.css';

const nunitoSans = Nunito_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-nunito-sans',
});

const shadowsIntoLight = Shadows_Into_Light({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-shadows',
});

export const metadata: Metadata = {
  title: 'MealPlan',
  description:
    'Plan your meals, organize your recipes, and simplify your cooking journey.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${nunitoSans.variable} ${shadowsIntoLight.variable}`}
    >
      <body className={nunitoSans.className}>
        <TopNav />
        <main>{children}</main>
        <BottomFooter />
      </body>
    </html>
  );
}
