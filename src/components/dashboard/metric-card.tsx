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