'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Bell, HelpCircle } from 'lucide-react'

const navigationItems = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/leads', label: 'Leads' },
  { href: '/accounts', label: 'Accounts' },
  { href: '/opportunities', label: 'Opportunities' },
  { href: '/contacts', label: 'Contacts' },
] as const

export function TopNavbar() {
  const pathname = usePathname()

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">Sales AI</span>
              <span className="text-xs text-gray-600">Your AI Sales Assistant</span>
            </Link>
            
            {/* Navigation Links */}
            <nav className="flex gap-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Side Items */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 bg-gray-100 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <HelpCircle size={20} className="text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Bell size={20} className="text-gray-700" />
            </button>
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-sm font-medium text-blue-600">EA</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
