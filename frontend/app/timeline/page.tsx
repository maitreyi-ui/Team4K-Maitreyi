"use client";

import { useEffect, useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { TimelineCard } from '@/components/TimelineCard';
import { getTimelineData } from '@/lib/api';

export default function TimelinePage() {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getTimelineData();
      setEvents(data);
    }
    load();
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <div className="flex gap-8">
        <Sidebar />
        <div className="flex-1 space-y-8">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
            <h1 className="text-3xl font-semibold text-slate-900">Investigation Timeline</h1>
            <p className="mt-3 text-slate-600">Review the event stream and uncover the sequence of relevant actions.</p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
            <div className="grid gap-4 md:grid-cols-4">
              <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm" placeholder="Search timeline" />
              <select className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
                <option>Date</option>
              </select>
              <select className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
                <option>Person</option>
              </select>
              <select className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
                <option>Evidence Type</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {events.map((event) => (
              <TimelineCard key={event.time} time={event.time} event={event.event} source={event.source} priority={event.priority} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
