'use client'

import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { auth } from '@/lib/firebase'
import { MetricCard } from '@/components/dashboard/metric-card'
import { RecentLeads } from '@/components/dashboard/recent-leads'
import { PerformanceChart } from '@/components/dashboard/performance-chart'
import { WelcomeHeader } from '@/components/dashboard/welcome-header'
import { TaskList } from '@/components/dashboard/task-list'

const mockTasks = [
  {
    id: '1',
    title: 'Call Michael at 2pm',
    description: 'Follow up with new lead',
    type: 'call' as const,
  },
  {
    id: '2',
    title: 'Follow up with Alex',
    description: 'Follow up with new lead',
    type: 'email' as const,
  },
]

export default function DashboardPage() {
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/auth/signin')
      } else {
        setLoading(false)
      }
    })

    return () => unsubscribe()
  }, [router])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <WelcomeHeader name="Emma" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard title="Total Leads" value="1,234" change="+12.3%" trend="up" />
        <MetricCard title="Conversion Rate" value="23.5%" change="+2.1%" trend="up" />
        <MetricCard title="Revenue" value="$45.2K" change="-3.2%" trend="down" />
        <MetricCard title="Active Deals" value="28" change="+4" trend="up" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PerformanceChart />
        <RecentLeads />
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Upcoming tasks</h2>
        <TaskList tasks={mockTasks} />
      </div>
    </div>
  )
}