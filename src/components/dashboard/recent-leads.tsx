'use client'

import Link from 'next/link'
import { MoreHorizontal } from 'lucide-react'
import { useState } from 'react'

interface Lead {
  id: string
  name: string
  company: string
  status: 'New' | 'In Progress' | 'Qualified' | 'Unqualified'
  value: string
  lastContact?: string
}

const recentLeads: Lead[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    company: 'Tech Solutions Inc',
    status: 'New',
    value: '$12,000',
    lastContact: '2 days ago'
  },
  {
    id: '2',
    name: 'Michael Chen',
    company: 'Digital Dynamics',
    status: 'In Progress',
    value: '$8,500',
    lastContact: '1 day ago'
  },
  {
    id: '3',
    name: 'Emma Wilson',
    company: 'Cloud Systems',
    status: 'New',
    value: '$15,000',
    lastContact: '3 hours ago'
  },
]

export function RecentLeads() {
  const [selectedLead, setSelectedLead] = useState<string | null>(null)

  const handleMoreClick = (leadId: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedLead(selectedLead === leadId ? null : leadId)
  }

  const getStatusColor = (status: Lead['status']) => {
    const colors = {
      'New': 'bg-green-100 text-green-800',
      'In Progress': 'bg-blue-100 text-blue-800',
      'Qualified': 'bg-purple-100 text-purple-800',
      'Unqualified': 'bg-gray-100 text-gray-800'
    }
    return colors[status]
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Recent Leads</h2>
          <Link 
            href="/leads" 
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            View all
          </Link>
        </div>
        <div className="space-y-4">
          {recentLeads.map((lead) => (
            <div 
              key={lead.id}
              className="relative flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div>
                <p className="font-medium text-gray-900">{lead.name}</p>
                <p className="text-sm text-gray-600">{lead.company}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Last contact: {lead.lastContact}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                  {lead.status}
                </span>
                <span className="text-sm font-medium text-gray-900">{lead.value}</span>
                <div className="relative">
                  <button 
                    onClick={(e) => handleMoreClick(lead.id, e)}
                    className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
                  >
                    <MoreHorizontal size={20} />
                  </button>
                  
                  {selectedLead === lead.id && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
                      <button 
                        className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50"
                        onClick={() => console.log('View details', lead.id)}
                      >
                        View Details
                      </button>
                      <button 
                        className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50"
                        onClick={() => console.log('Edit lead', lead.id)}
                      >
                        Edit Lead
                      </button>
                      <button 
                        className="w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-gray-50"
                        onClick={() => console.log('Delete lead', lead.id)}
                      >
                        Delete Lead
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
