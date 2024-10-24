'use client'

import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// Sample data
const data = [
  { month: 'Jan', sales: 4000, leads: 24 },
  { month: 'Feb', sales: 3000, leads: 18 },
  { month: 'Mar', sales: 5000, leads: 29 },
  { month: 'Apr', sales: 2780, leads: 15 },
  { month: 'May', sales: 1890, leads: 11 },
  { month: 'Jun', sales: 2390, leads: 14 },
  { month: 'Jul', sales: 3490, leads: 21 },
]

type TimeRange = '7 Days' | '30 Days' | '90 Days' | 'All Time'

export function PerformanceChart() {
  const [selectedMetric, setSelectedMetric] = useState<'sales' | 'leads'>('sales')
  const [timeRange, setTimeRange] = useState<TimeRange>('30 Days')

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Performance Overview</h2>
        
        <div className="flex items-center gap-4">
          {/* Metric selector */}
          <div className="flex rounded-lg border border-gray-200 p-1">
            <button
              onClick={() => setSelectedMetric('sales')}
              className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                selectedMetric === 'sales'
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Sales
            </button>
            <button
              onClick={() => setSelectedMetric('leads')}
              className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                selectedMetric === 'leads'
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Leads
            </button>
          </div>

          {/* Time range selector */}
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value as TimeRange)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="7 Days">7 Days</option>
            <option value="30 Days">30 Days</option>
            <option value="90 Days">90 Days</option>
            <option value="All Time">All Time</option>
          </select>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis 
              dataKey="month" 
              stroke="#6B7280"
              fontSize={12}
              tickLine={false}
            />
            <YAxis 
              stroke="#6B7280"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => 
                selectedMetric === 'sales' 
                  ? `$${value}`
                  : value.toString()
              }
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
              }}
            />
            <Line
              type="monotone"
              dataKey={selectedMetric}
              stroke="#2563EB"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Summary */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="text-sm font-medium text-blue-600">
            {selectedMetric === 'sales' ? 'Total Sales' : 'Total Leads'}
          </p>
          <p className="text-2xl font-semibold text-blue-900 mt-1">
            {selectedMetric === 'sales' ? '$21,550' : '132'}
          </p>
          <p className="text-sm text-blue-600 mt-1">
            +12.3% from last period
          </p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <p className="text-sm font-medium text-green-600">
            {selectedMetric === 'sales' ? 'Average Deal Size' : 'Conversion Rate'}
          </p>
          <p className="text-2xl font-semibold text-green-900 mt-1">
            {selectedMetric === 'sales' ? '$3,250' : '23.5%'}
          </p>
          <p className="text-sm text-green-600 mt-1">
            +5.2% from last period
          </p>
        </div>
      </div>
    </div>
  )
}