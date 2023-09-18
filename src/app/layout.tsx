import Head from '@/components/Head';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Capputeeno Store',
  description: 'The store to practice NextJS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans bg-gray-100 min-h-screen">
        <Head />
        <div className="container mx-auto mt-10">{children}</div>
      </body>
    </html>
  );
}
