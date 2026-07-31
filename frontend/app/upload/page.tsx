"use client";

import { Sidebar } from '@/components/Sidebar';
import { UploadBox } from '@/components/UploadBox';
import { FileText, Image, FileType2 } from 'lucide-react';

const files = [
  { name: 'incident-report.pdf', type: 'PDF', size: '2.4 MB' },
  { name: 'screenshot-01.png', type: 'PNG', size: '1.8 MB' },
  { name: 'notes.txt', type: 'TXT', size: '24 KB' },
];

export default function UploadPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <div className="flex gap-8">
        <Sidebar />
        <div className="flex-1 space-y-8">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
            <h1 className="text-3xl font-semibold text-slate-900">Evidence Upload</h1>
            <p className="mt-3 text-slate-600">Bring in your evidence package and prepare it for AI-assisted analysis.</p>
          </div>

          <UploadBox />

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-slate-900">Uploaded Files</h2>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-primary">3 files</span>
            </div>
            <div className="mt-5 space-y-3">
              {files.map((file) => (
                <div key={file.name} className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-blue-50 p-2 text-primary">
                      {file.type === 'PDF' ? <FileText size={16} /> : file.type === 'PNG' || file.type === 'JPG' ? <Image size={16} /> : <FileType2 size={16} />}
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{file.name}</p>
                      <p className="text-sm text-slate-500">{file.type} · {file.size}</p>
                    </div>
                  </div>
                  <span className="text-sm text-slate-500">Ready</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
