import type { Metadata } from 'next'
import './globals.css'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Nathaniel Varga-Chauvin | Business Operations & Analytics Portfolio',
  description:
    'Portfolio for Nathaniel Varga-Chauvin, an economics graduate focused on sales operations, business analytics, dashboard development, and workflow improvement.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
