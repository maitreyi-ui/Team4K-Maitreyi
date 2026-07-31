"use client";

import { useState } from "react";
import { FileUp, UploadCloud } from "lucide-react";

export function UploadBox() {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("No files selected");
  const [result, setResult] = useState<any>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selected = Array.from(e.target.files);

    setFiles(selected);
    setStatus(`${selected.length} file(s) selected`);
    setProgress(0);
    setResult(null);
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      alert("Please select at least one file.");
      return;
    }

    setLoading(true);
    setStatus("Uploading...");
    setProgress(20);

    const formData = new FormData();

    files.forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      });

      setProgress(70);

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const data = await response.json();

      setResult(data);
      setProgress(100);
      setStatus("Analysis Complete");
    } catch (err: any) {
      console.error("UPLOAD ERROR:", err);

      if (err instanceof Error) {
          alert(err.message);
      } else {
        alert(JSON.stringify(err));
      }

      setStatus("Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-[28px] border border-dashed border-blue-200 bg-blue-50/60 p-8 text-center shadow-soft">

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
        <UploadCloud size={28} />
      </div>

      <h3 className="mt-6 text-xl font-semibold text-slate-900">
        Drop evidence files here
      </h3>

      <p className="mt-2 text-sm text-slate-600">
        Support for PDF, PNG, JPG, DOCX and TXT files.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-3">

        <label className="cursor-pointer rounded-2xl bg-primary px-5 py-3 text-sm font-medium text-white">
          Browse Files

          <input
            type="file"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />

        </label>

        <button
          onClick={handleUpload}
          disabled={loading}
          className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50"
        >
          {loading ? "Processing..." : "Process Evidence"}
        </button>

      </div>

      {files.length > 0 && (
        <div className="mt-6 rounded-xl bg-white p-4 text-left">

          <h4 className="font-semibold mb-2">
            Selected Files
          </h4>

          <ul className="space-y-2 text-sm">

            {files.map((file) => (
              <li key={file.name}>
                📄 {file.name} ({(file.size / 1024).toFixed(1)} KB)
              </li>
            ))}

          </ul>

        </div>
      )}

      <div className="mt-8 rounded-2xl bg-white p-4 text-left">

        <div className="flex items-center justify-between text-sm text-slate-600">

          <span className="flex items-center gap-2">
            <FileUp size={16} />
            {status}
          </span>

          <span className="font-medium text-slate-900">
            {progress}%
          </span>

        </div>

        <div className="mt-3 h-2 rounded-full bg-slate-100">

          <div
            className="h-2 rounded-full bg-primary transition-all duration-500"
            style={{ width: `${progress}%` }}
          />

        </div>

      </div>

      {result && (
        <div className="mt-8 rounded-2xl bg-white p-6 text-left">

          <h3 className="mb-4 text-xl font-bold">
            AI Analysis
          </h3>

          <p>
            <strong>Summary:</strong>
          </p>

          <p className="mb-4">
            {result.analysis.summary}
          </p>

          <p>
            <strong>People:</strong>
          </p>

          <ul className="mb-4 list-disc pl-5">
            {result.analysis.people.map((p: string, i: number) => (
              <li key={i}>{p}</li>
            ))}
          </ul>

          <p>
            <strong>Locations:</strong>
          </p>

          <ul className="mb-4 list-disc pl-5">
            {result.analysis.locations.map((l: string, i: number) => (
              <li key={i}>{l}</li>
            ))}
          </ul>

          <p>
            <strong>Dates:</strong>
          </p>

          <ul className="mb-4 list-disc pl-5">
            {result.analysis.dates.map((d: string, i: number) => (
              <li key={i}>{d}</li>
            ))}
          </ul>

          <p>
            <strong>Evidence:</strong>
          </p>

          <ul className="mb-4 list-disc pl-5">
            {result.analysis.evidence.map((e: string, i: number) => (
              <li key={i}>{e}</li>
            ))}
          </ul>

          <p>
            <strong>Timeline:</strong>
          </p>

          <ul className="list-disc pl-5">
            {result.analysis.timeline.map((t: string, i: number) => (
              <li key={i}>{t}</li>
            ))}
          </ul>

        </div>
      )}

    </div>
  );
}