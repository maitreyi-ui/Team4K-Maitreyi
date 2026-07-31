export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-[24px] border border-slate-200 bg-white p-10 shadow-soft">
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-blue-200 border-t-primary" />
      <p className="text-lg font-medium text-slate-800">Analyzing Evidence...</p>
    </div>
  );
}
