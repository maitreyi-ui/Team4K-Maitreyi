import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ClueLens',
  description: 'AI-powered digital forensic investigation assistant',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
