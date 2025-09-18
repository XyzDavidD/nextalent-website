import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'nextalent',
  description: 'AI-driven platform that redefines how football clubs build team rosters. Discover the future of football team management.',
  keywords: 'football, team building, AI, artificial intelligence, roster management, sports analytics',
  authors: [{ name: 'nextalent' }],
  robots: 'index, follow',
  openGraph: {
    title: 'nextalent - Change the way of team building',
    description: 'AI-driven platform that redefines how football clubs build team rosters.',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
