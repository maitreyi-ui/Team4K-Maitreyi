interface ReportCardProps {
  title: string;
  children: React.ReactNode;
}

export function ReportCard({ title, children }: ReportCardProps) {
  return (
    <section className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-soft">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <div className="mt-4 text-sm leading-7 text-slate-600">{children}</div>
    </section>
  );
}
