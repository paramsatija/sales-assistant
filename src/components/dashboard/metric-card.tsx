// src/components/dashboard/metric-card.tsx
interface MetricCardProps {
  title: string
  value: string
  description: string
}

export function MetricCard({ title, value, description }: MetricCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="mt-2 text-3xl font-semibold">{value}</p>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
    </div>
  )
}
