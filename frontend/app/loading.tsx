import { LoadingSpinner } from '@/components/LoadingSpinner';

export default function Loading() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-6 py-16 lg:px-8">
      <LoadingSpinner />
    </main>
  );
}
