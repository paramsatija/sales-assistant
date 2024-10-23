'use client'

import { WelcomeHeader } from '@/components/dashboard/welcome-header'
import { MetricCard } from '@/components/dashboard/metric-card'
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
    description: 'Send proposal documents',
    type: 'email' as const,
  },
  {
    id: '3',
    title: 'Team Meeting',
    description: 'Weekly sales sync',
    type: 'meeting' as const,
  },
]

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <WelcomeHeader name="Emma" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Pipeline this week"
          value="$1.5k"
          description="Total pipeline value"
        />
        <MetricCard
          title="Meetings this week"
          value="4"
          description="Scheduled meetings"
        />
        <MetricCard
          title="New leads this week"
          value="2"
          description="New potential customers"
        />
        <MetricCard
          title="Follow-ups this week"
          value="10"
          description="Pending follow-ups"
        />
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming tasks</h2>
        <TaskList tasks={mockTasks} />
      </div>
    </div>
  )
}
