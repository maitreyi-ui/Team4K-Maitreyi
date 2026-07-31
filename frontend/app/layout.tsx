import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ClueLens | AI Investigation Platform',
  description: 'AI-powered investigation platform for evidence analysis and reporting.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-background text-slate-900">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
