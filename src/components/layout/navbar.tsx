// src/components/layout/navbar.tsx
import Link from 'next/link'
import { Search, Bell, HelpCircle } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="border-b px-6 py-4 bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-semibold text-xl">
            Sales AI
          </Link>
          <div className="flex gap-4">
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/leads">Leads</Link>
            <Link href="/accounts">Accounts</Link>
            <Link href="/opportunities">Opportunities</Link>
            <Link href="/contacts">Contacts</Link>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 bg-gray-100 rounded-lg w-64"
            />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <HelpCircle size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell size={20} />
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-200" />
        </div>
      </div>
    </nav>
  )
}