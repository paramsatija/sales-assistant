import { Calendar, Mail, Phone } from 'lucide-react'

interface Task {
  id: string
  title: string
  description: string
  type: 'call' | 'email' | 'meeting'
}

interface TaskListProps {
  tasks: Task[]
}

export function TaskList({ tasks }: TaskListProps) {
  const getTaskIcon = (type: Task['type']) => {
    switch (type) {
      case 'call':
        return <Phone className="text-blue-500" size={20} />
      case 'email':
        return <Mail className="text-green-500" size={20} />
      case 'meeting':
        return <Calendar className="text-purple-500" size={20} />
      default:
        return null
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-start gap-4 p-4 border-b last:border-b-0 hover:bg-gray-50"
        >
          <div className="p-2 bg-gray-50 rounded-lg">
            {getTaskIcon(task.type)}
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
