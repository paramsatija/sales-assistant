// src/components/layout/sidebar.tsx
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Inbox, 
  Send, 
  Users, 
  Calendar, 
  MessageSquare, 
  Activity,
  BarChart 
} from 'lucide-react'

const navigationItems = [
  { name: 'Dashboard', href: '/dashboard', icon: BarChart },
  { name: 'Inbox', href: '/inbox', icon: Inbox },
  { name: 'Outbox', href: '/outbox', icon: Send },
  { name: 'Teams', href: '/teams', icon: Users },
  { name: 'Calendar', href: '/calendar', icon: Calendar },
  { name: 'Messages', href: '/messages', icon: MessageSquare },
  { name: 'Activity', href: '/activity', icon: Activity },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 border-r h-[calc(100vh-73px)] bg-white">
      <div className="p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors ${
                isActive ? 'bg-gray-100' : ''
              }`}
            >
              <Icon size={20} className={isActive ? 'text-blue-600' : ''} />
              <span className={isActive ? 'font-medium text-blue-600' : ''}>
                {item.name}
              </span>
            </Link>
          )
        })}
      </div>
    </aside>
  )
}