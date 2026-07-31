"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/upload', label: 'Upload' },
  { href: '/timeline', label: 'Timeline' },
  { href: '/graph', label: 'Graph' },
  { href: '/report', label: 'Reports' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-2xl bg-primary p-2 text-white">
            <ShieldCheck size={18} />
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-900">ClueLens</p>
            <p className="text-xs text-slate-500">Investigation OS</p>
          </div>
        </Link>

        <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className={active ? 'text-primary' : 'hover:text-primary'}>
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
