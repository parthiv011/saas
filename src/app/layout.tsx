import { DM_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'Astitva SaaS',
  description: 'Served by Astitva Solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${dmSans.variable} antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
