// src/app/layout.tsx
import { Inter } from 'next/font/google'
import './globals.css'
import { TopNavbar } from '@/components/layout/top-navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SalesScope AI',
  description: 'AI-powered sales assistant by Cognifuse',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <TopNavbar />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
