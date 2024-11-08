import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { QueryProvider } from './providers/providers';

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
        <body
          className={`${dmSans.variable} flex min-h-[calc(100vh-1px)] flex-col antialiased`}
        >
          <QueryProvider>
            <main className="relative flex flex-1 flex-col">{children}</main>
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
