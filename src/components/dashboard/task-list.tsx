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