import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Bell, HelpCircle } from 'lucide-react'

const navigationItems = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/leads', label: 'Leads' },
  { href: '/accounts', label: 'Accounts' },
  { href: '/opportunities', label: 'Opportunities' },
  { href: '/contacts', label: 'Contacts' },
]

export function TopNavbar() {
  const pathname = usePathname()

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">SalesScope AI</span>
              <span className="text-xs text-gray-500">Brought to you by Cognifuse</span>
            </div>
            
            {/* Navigation */}
            <nav className="flex gap-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 bg-gray-100 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
              <HelpCircle size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
              <Bell size={20} />
            </button>
            <div className="h-8 w-8 rounded-full bg-gray-200"></div>
          </div>
        </div>
      </div>
    </header>
  )
}