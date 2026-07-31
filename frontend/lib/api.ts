// Placeholder API helpers for future backend integration.
// These functions return dummy data for now and can be replaced with
// calls to a FastAPI or other service later.

import { investigations, reportSections, stats, timelineEvents } from './dummyData';

export async function getDashboardData() {
  return {
    stats,
    investigations,
  };
}

export async function getTimelineData() {
  return timelineEvents;
}

export async function getReportData() {
  return reportSections;
}

export async function uploadEvidence(files: File[]) {
  return {
    message: `Queued ${files.length} file(s) for analysis`,
    status: 'ready',
  };
}
