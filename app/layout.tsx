import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Basysyaar | Web Developer',
  description: 'Created with basyar',
  generator: 'Syar.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
