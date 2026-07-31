"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, FileSearch, Network, ScanSearch, ShieldCheck, Sparkles, Workflow } from 'lucide-react';

const features = [
  { title: 'Upload Evidence', icon: FileSearch, description: 'Securely ingest PDFs, images, and text artifacts into a centralized workspace.' },
  { title: 'AI Extraction', icon: ScanSearch, description: 'Extract entities, timelines, and suspicious indicators using AI-assisted workflows.' },
  { title: 'Timeline Generation', icon: Workflow, description: 'Build coherent timelines from evidence and correlate events across cases.' },
  { title: 'Evidence Graph', icon: Network, description: 'Map relationships between suspects, devices, malware, and storage artifacts.' },
  { title: 'AI Report', icon: Sparkles, description: 'Draft polished investigation reports with summaries and recommendations.' },
  { title: 'Smart Search', icon: Bot, description: 'Search across evidence and metadata using semantic and keyword-driven analysis.' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 lg:flex-row lg:items-center lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-primary">
            <ShieldCheck size={16} />
            AI Powered Investigation Assistant
          </div>
          <h1 className="text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">ClueLens</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Analyze digital evidence, connect clues, generate investigation timelines, and create AI-powered reports in one intelligent workspace.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/dashboard" className="rounded-2xl bg-primary px-6 py-3 font-medium text-white shadow-soft transition hover:bg-blue-700">
              Get Started
            </Link>
            <Link href="/dashboard" className="rounded-2xl border border-slate-200 bg-white px-6 py-3 font-medium text-slate-700 transition hover:border-blue-300 hover:text-primary">
              View Dashboard
            </Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex-1 rounded-[28px] border border-blue-100 bg-white p-8 shadow-soft">
          <div className="rounded-[24px] bg-slate-900 p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Case Observatory</p>
                <h2 className="text-xl font-semibold">Threat Intel Review</h2>
              </div>
              <div className="rounded-full bg-primary/20 px-3 py-1 text-sm text-blue-200">Live</div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {['Evidence mapped', 'Timeline synced', 'Risk score 87', 'Report drafted'].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-800 bg-slate-800/80 p-4">
                  <p className="text-sm text-slate-400">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Core Capabilities</p>
            <h2 className="text-3xl font-semibold text-slate-900">Built for rapid investigations</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article key={feature.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">About ClueLens</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">A modern command center for evidence-led investigations.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              ClueLens combines secure uploads, AI extraction, graph-based relationship mapping, and polished reporting to give investigators a faster path from raw evidence to actionable insight.
            </p>
          </div>
          <Link href="/upload" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 font-medium text-white transition hover:bg-blue-700 lg:mt-0">
            Start Investigation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
