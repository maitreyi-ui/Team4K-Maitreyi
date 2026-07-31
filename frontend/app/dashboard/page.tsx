"use client";

import { useEffect, useState } from 'react';
import { BarChart3, FileText, Files, Search, Sparkles, UploadCloud } from 'lucide-react';
import { DashboardCard } from '@/components/DashboardCard';
import { Sidebar } from '@/components/Sidebar';
import { getDashboardData } from '@/lib/api';

export default function DashboardPage() {
  const [stats, setStats] = useState<any[]>([]);
  const [investigations, setInvestigations] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getDashboardData();
      setStats(data.stats);
      setInvestigations(data.investigations);
    }
    load();
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <div className="flex gap-8">
        <Sidebar />
        <div className="flex-1">
          <div className="mb-8 rounded-[28px] border border-slate-200 bg-gradient-to-r from-primary via-blue-600 to-blue-500 p-8 text-white shadow-soft">
            <p className="text-sm uppercase tracking-[0.25em] text-blue-100">Investigation console</p>
            <h1 className="mt-3 text-3xl font-semibold">ClueLens Dashboard</h1>
            <p className="mt-3 max-w-2xl text-sm text-blue-50">Monitor evidence intake, extract key context, and drive faster case decisions from a central view.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, index) => (
              <DashboardCard
                key={item.title}
                title={item.title}
                value={item.value}
                subtitle={item.subtitle}
                icon={<span className="text-lg">{item.icon}</span>}
              />
            ))}
          </div>

          <div className="mt-8 grid gap-8 xl:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-900">Recent Investigations</h2>
                <button className="rounded-2xl bg-blue-50 px-3 py-2 text-sm font-medium text-primary">View All</button>
              </div>
              <div className="mt-6 overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="text-slate-500">
                    <tr>
                      <th className="pb-3 font-medium">Case</th>
                      <th className="pb-3 font-medium">Status</th>
                      <th className="pb-3 font-medium">Date</th>
                      <th className="pb-3 font-medium">Investigator</th>
                    </tr>
                  </thead>
                  <tbody>
                    {investigations.map((item) => (
                      <tr key={item.caseName} className="border-t border-slate-100 text-slate-700">
                        <td className="py-3 font-medium">{item.caseName}</td>
                        <td className="py-3">{item.status}</td>
                        <td className="py-3">{item.date}</td>
                        <td className="py-3">{item.investigator}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-xl font-semibold text-slate-900">Quick Actions</h2>
              <div className="mt-5 space-y-3">
                {[
                  { title: 'Upload Evidence', icon: UploadCloud },
                  { title: 'Generate Timeline', icon: BarChart3 },
                  { title: 'Generate Report', icon: FileText },
                  { title: 'Search Evidence', icon: Search },
                ].map((action) => {
                  const Icon = action.icon;
                  return (
                    <button key={action.title} className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 hover:border-primary hover:text-primary">
                      <Icon size={18} />
                      {action.title}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
