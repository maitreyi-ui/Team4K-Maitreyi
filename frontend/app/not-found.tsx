import Link from 'next/link';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center px-6 py-16 lg:px-8">
      <div className="w-full rounded-[28px] border border-slate-200 bg-white p-10 text-center shadow-soft">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600">
          <ShieldAlert size={28} />
        </div>
        <h1 className="mt-6 text-3xl font-semibold text-slate-900">Page not found</h1>
        <p className="mt-3 text-slate-600">The evidence route you requested could not be located. Return to the investigation console and continue your review.</p>
        <Link href="/dashboard" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 font-medium text-white transition hover:bg-blue-700">
          <ArrowLeft size={18} /> Back to dashboard
        </Link>
      </div>
    </main>
  );
}
