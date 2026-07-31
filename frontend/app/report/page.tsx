"use client";

import { Sidebar } from '@/components/Sidebar';
import { ReportCard } from '@/components/ReportCard';
import { getReportData } from '@/lib/api';
import { useEffect, useState } from 'react';

export default function ReportPage() {
  const [report, setReport] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const data = await getReportData();
      setReport(data);
    }
    load();
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <div className="flex gap-8">
        <Sidebar />
        <div className="flex-1 space-y-8">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-semibold text-slate-900">AI Investigation Report</h1>
                <p className="mt-3 text-slate-600">A professional report scaffold tailored for rapid incident review.</p>
              </div>
              <div className="flex gap-3">
                <button className="rounded-2xl bg-primary px-4 py-2 text-sm font-medium text-white">Download PDF</button>
                <button className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">Print</button>
                <button className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">Share</button>
              </div>
            </div>
          </div>

          {!report ? null : (
            <div className="space-y-6">
              <ReportCard title="Executive Summary">
                <p>{report.executiveSummary}</p>
              </ReportCard>
              <ReportCard title="Key Findings">
                <ul className="list-disc space-y-2 pl-5">
                  {report.keyFindings.map((finding: string) => (
                    <li key={finding}>{finding}</li>
                  ))}
                </ul>
              </ReportCard>
              <ReportCard title="Evidence Table">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm">
                    <thead className="text-slate-500">
                      <tr>
                        <th className="pb-3 font-medium">Artifact</th>
                        <th className="pb-3 font-medium">Type</th>
                        <th className="pb-3 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-slate-100 text-slate-700">
                        <td className="py-3">USB Device</td>
                        <td className="py-3">Evidence</td>
                        <td className="py-3">Captured</td>
                      </tr>
                      <tr className="border-t border-slate-100 text-slate-700">
                        <td className="py-3">Endpoint Logs</td>
                        <td className="py-3">Telemetry</td>
                        <td className="py-3">Correlated</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </ReportCard>
              <ReportCard title="Timeline">
                <p>09:10 initial upload received • 10:00 malware matched • 11:20 connection observed</p>
              </ReportCard>
              <ReportCard title="Recommendations">
                <ul className="list-disc space-y-2 pl-5">
                  {report.recommendations.map((item: string) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </ReportCard>
              <ReportCard title="AI Confidence Score">
                <div className="rounded-2xl bg-blue-50 px-4 py-3 text-primary">92% confidence across evidence correlation and timeline synthesis.</div>
              </ReportCard>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
