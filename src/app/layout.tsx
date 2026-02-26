import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import type { Metadata } from 'next';
import { Nunito_Sans, Shadows_Into_Light } from 'next/font/google';
import TopNav from '@/components/layout/TopNav';
import BottomFooter from '@/components/layout/BottomFooter';
import AddToPlan from '@/components/layout/AddToPlan';
import { AddToPlanProvider } from '@/lib/add-to-plan-context';
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
    'Tervezd meg az étkezéseidet, rendszerezd a receptjeidet, és egyszerűsítsd a főzési utadat.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <html
      lang='en'
      className={`${nunitoSans.variable} ${shadowsIntoLight.variable}`}
    >
      <body className={nunitoSans.className}>
        <AddToPlanProvider>
          <TopNav loggedIn={!!session} />
          <main>{children}</main>
          <BottomFooter />
          <AddToPlan />
        </AddToPlanProvider>
      </body>
    </html>
  );
}
