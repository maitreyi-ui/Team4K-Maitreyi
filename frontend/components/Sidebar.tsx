"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, Clock3, FileUp, Network, Settings, FileText } from 'lucide-react';

const items = [
  { href: '/dashboard', label: 'Dashboard', icon: BarChart3 },
  { href: '/upload', label: 'Upload', icon: FileUp },
  { href: '/timeline', label: 'Timeline', icon: Clock3 },
  { href: '/graph', label: 'Evidence Graph', icon: Network },
  { href: '/report', label: 'Reports', icon: FileText },
  { href: '/', label: 'Settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 rounded-[24px] border border-slate-200 bg-white p-5 shadow-soft lg:block">
      <div className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${active ? 'bg-primary text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-primary'}`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
