interface TimelineCardProps {
  time: string;
  event: string;
  source: string;
  priority: 'High' | 'Medium' | 'Low';
}

export function TimelineCard({ time, event, source, priority }: TimelineCardProps) {
  const priorityClasses = {
    High: 'bg-red-50 text-red-700',
    Medium: 'bg-amber-50 text-amber-700',
    Low: 'bg-emerald-50 text-emerald-700',
  };

  return (
    <div className="relative ml-6 rounded-[24px] border border-slate-200 bg-white p-5 shadow-soft before:absolute before:-left-8 before:top-6 before:h-4 before:w-4 before:rounded-full before:bg-primary">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-primary">{time}</p>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">{event}</h3>
        </div>
        <span className={`rounded-full px-3 py-1 text-sm font-medium ${priorityClasses[priority]}`}>{priority}</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600">
        <span>Source: {source}</span>
      </div>
    </div>
  );
}
