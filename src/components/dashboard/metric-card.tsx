// src/components/dashboard/metric-card.tsx
'use client'

import { useState } from 'react'
import { ArrowUpIcon, ArrowDownIcon, MoreVertical, Download, RefreshCw } from 'lucide-react'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

interface MetricCardProps {
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
  isLoading?: boolean
  error?: string
  onRefresh?: () => void
  timeRange?: string
}

export function MetricCard({ 
  title, 
  value, 
  change, 
  trend, 
  isLoading = false,
  error,
  onRefresh,
  timeRange = '30 days'
}: MetricCardProps) {
  const [showOptions, setShowOptions] = useState(false)

  const handleRefresh = () => {
    setShowOptions(false)
    onRefresh?.()
  }

  const handleExport = () => {
    // Implementation for exporting data
    console.log('Exporting data for:', title)
    setShowOptions(false)
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <button 
            onClick={handleRefresh}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <RefreshCw size={16} className="text-gray-400" />
          </button>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-red-600">{error}</p>
          <button
            onClick={handleRefresh}
            className="mt-2 text-sm text-blue-600 hover:text-blue-700"
          >
            Try again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <div className="relative">
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <MoreVertical size={16} className="text-gray-400" />
          </button>

          {showOptions && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
              <button
                onClick={handleRefresh}
                className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 flex items-center gap-2"
              >
                <RefreshCw size={16} />
                Refresh
              </button>
              <button
                onClick={handleExport}
                className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 flex items-center gap-2"
              >
                <Download size={16} />
                Export Data
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mt-2">
        {isLoading ? (
          <div className="flex items-center justify-center h-12">
            <LoadingSpinner />
          </div>
        ) : (
          <>
            <p className="text-2xl font-semibold text-gray-900">{value}</p>
            <div className="flex items-center mt-2">
              {trend === 'up' ? (
                <ArrowUpIcon className="w-4 h-4 text-green-500" />
              ) : (
                <ArrowDownIcon className="w-4 h-4 text-red-500" />
              )}
              <span className={`text-sm font-medium ml-1 ${
                trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {change}
              </span>
              <span className="text-sm text-gray-500 ml-2">
                vs last {timeRange}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
