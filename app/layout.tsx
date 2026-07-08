import type { Metadata } from 'next'
import './globals.css'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

export const metadata: Metadata = {
  metadataBase: new URL('https://nathanielvc.com'),
  title: 'Nathaniel Varga-Chauvin | Business Operations & Analytics Portfolio',
  description:
    'My portfolio focused on business operations, sales operations, dashboard development, economic analysis, and workflow improvement.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: 'https://nathanielvc.com/',
    siteName: 'Nathaniel Varga-Chauvin Portfolio',
    title: 'Nathaniel Varga-Chauvin | Business Operations & Analytics Portfolio',
    description:
      'My portfolio focused on business operations, analytics, dashboard development, and workflow improvement.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nathaniel Varga-Chauvin | Business Operations & Analytics Portfolio',
    description:
      'Business operations, analytics, dashboard development, and workflow improvement portfolio.',
  },
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
