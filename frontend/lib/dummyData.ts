export const stats = [
  { title: 'Total Investigations', value: '24', subtitle: '+6 this month', icon: '🧠' },
  { title: 'Files Uploaded', value: '182', subtitle: 'Across 12 cases', icon: '📎' },
  { title: 'Evidence Extracted', value: '94', subtitle: 'Auto-tagged entities', icon: '🔎' },
  { title: 'Reports Generated', value: '17', subtitle: 'Average confidence 92%', icon: '📝' },
];

export const investigations = [
  { caseName: 'Phishing Campaign Review', status: 'Active', date: '2026-07-28', investigator: 'A. Patel' },
  { caseName: 'Insider Data Transfer', status: 'Pending', date: '2026-07-24', investigator: 'M. Chen' },
  { caseName: 'Ransomware Indicator Hunt', status: 'Resolved', date: '2026-07-20', investigator: 'D. Ortiz' },
];

export const timelineEvents = [
  { time: '09:10', event: 'Initial evidence upload received', source: 'Email attachment', priority: 'High' as const },
  { time: '10:00', event: 'Malware signature matched known campaign', source: 'VirusTotal', priority: 'Medium' as const },
  { time: '11:20', event: 'USB device connection logged', source: 'Endpoint telemetry', priority: 'High' as const },
  { time: '14:00', event: 'Link between laptop and server confirmed', source: 'Network logs', priority: 'Low' as const },
];

export const graphNodes = [
  { id: '1', label: 'Emily', type: 'person' },
  { id: '2', label: 'Laptop', type: 'device' },
  { id: '3', label: 'USB', type: 'device' },
  { id: '4', label: 'Malware', type: 'artifact' },
  { id: '5', label: 'Server', type: 'device' },
];

export const reportSections = {
  executiveSummary: 'The investigation shows a coordinated sequence of suspicious file access, endpoint compromise, and network movement strengthened by artifact correlation.',
  keyFindings: [
    'Two anomalous USB connections were observed within 24 hours.',
    'Malware indicators align with a known phishing payload sequence.',
    'The affected laptop communicated with a suspicious server during off-hours.',
  ],
  recommendations: [
    'Contain affected devices immediately.',
    'Preserve logs for legal review.',
    'Increase monitoring for the identified indicators.',
  ],
};
