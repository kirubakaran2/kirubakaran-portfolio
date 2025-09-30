import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kirubakaran`s Portfolio',
  description: 'Showcasing the battle-tested skills and projects of Kirubakaran, a proficient Full Stack Developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
