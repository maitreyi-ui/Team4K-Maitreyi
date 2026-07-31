import { ReactNode } from 'react';

interface DashboardCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon?: ReactNode;
  accent?: string;
}

export function DashboardCard({ title, value, subtitle, icon, accent = 'bg-blue-50 text-primary' }: DashboardCardProps) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-soft">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <p className="mt-3 text-3xl font-semibold text-slate-900">{value}</p>
        </div>
        <div className={`rounded-2xl p-3 ${accent}`}>{icon}</div>
      </div>
      {subtitle ? <p className="mt-4 text-sm text-slate-500">{subtitle}</p> : null}
    </div>
  );
}
