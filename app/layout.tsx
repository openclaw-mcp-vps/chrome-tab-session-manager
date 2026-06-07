import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TabVault – Save & Restore Browser Tab Sessions',
  description: 'Intelligently saves browser sessions, groups related tabs, and provides one-click restoration with search and tagging. Built for developers, researchers, and remote workers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="13e207bf-420c-4f5c-a038-e3bc668ce4e7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
