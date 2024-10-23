import { TopNavbar } from '@/components/layout/top-navbar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <div className="min-h-screen bg-white">
          <TopNavbar />
          <main className="pt-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
