// src/components/dashboard/metric-card.tsx
interface MetricCardProps {
    title: string
    value: string | number
    description: string
  }
  
  export function MetricCard({ title, value, description }: MetricCardProps) {
    return (
      <div className="bg-white rounded-lg p-6 border">
        <h3 className="text-xl font-semibold">{value}</h3>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-xs text-gray-500 mt-1">{description}</p>
      </div>
    )
  }
  
  // src/components/dashboard/task-list.tsx
  interface Task {
    id: string
    title: string
    description: string
    type: 'call' | 'email'
  }
  
  export function TaskList({ tasks }: { tasks: Task[] }) {
    return (
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-start gap-4 p-4 bg-white rounded-lg border">
            <div className="p-2 bg-gray-100 rounded-lg">
              {task.type === 'call' ? '📞' : '📧'}
            </div>
            <div>
              <h4 className="font-medium">{task.title}</h4>
              <p className="text-sm text-gray-600">{task.description}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  // src/components/dashboard/welcome-header.tsx
  export function WelcomeHeader({ name }: { name: string }) {
    return (
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">Good morning, {name}</h1>
        <p className="text-gray-600">Here's what's happening with your sales today.</p>
      </div>
    )
  }