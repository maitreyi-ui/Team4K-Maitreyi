"use client";

import { Sidebar } from '@/components/Sidebar';
import { GraphView } from '@/components/GraphView';

const evidenceSummary = [
  'Emily transferred a USB device into a restricted workspace.',
  'The device later connected to a suspected malware server.',
  'Artifact and endpoint data match the same campaign signature.',
];

export default function GraphPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <div className="flex gap-8">
        <Sidebar />
        <div className="flex-1 space-y-8">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
            <h1 className="text-3xl font-semibold text-slate-900">Evidence Graph</h1>
            <p className="mt-3 text-slate-600">Visualize relationships between people, devices, artifacts, and infrastructure.</p>
          </div>

          <div className="grid gap-8 xl:grid-cols-[1.3fr_0.7fr]">
            <GraphView />
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-xl font-semibold text-slate-900">Selected Evidence</h2>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Summary</p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-600">
                    {evidenceSummary.map((item) => (
                      <li key={item} className="rounded-2xl bg-slate-50 px-3 py-2">{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Related Evidence</p>
                  <p className="mt-2 text-sm text-slate-600">Connection logs, endpoint alerts, and incident notes.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Connected Files</p>
                  <p className="mt-2 text-sm text-slate-600">suspicious-usb.log, malware-signature.txt, endpoint-capture.pdf</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
