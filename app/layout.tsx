// app/layout.tsx
import './globals.css';
import Header from '@/components/layout/Header';
import type { Metadata } from 'next';
import { JSX } from 'react';

export const metadata: Metadata = {
  title: 'BetTracker',
  description: 'Suivez vos paris et vos gains',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}