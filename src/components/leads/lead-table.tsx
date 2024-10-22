import { useState } from 'react'
import { MoreHorizontal, Mail, Phone, Calendar } from 'lucide-react'

interface Lead {
  id: string
  name: string
  company: string
  title: string
  location: string
  owner: string
  lastContacted: string
  status?: 'new' | 'open' | 'qualified' | 'unqualified'
}

interface LeadTableProps {
  leads: Lead[]
  onLeadSelect: (lead: Lead) => void
}

export function LeadTable({ leads, onLeadSelect }: LeadTableProps) {
  const getStatusColor = (status?: Lead['status']) => {
    const colors = {
      new: 'bg-green-400',
      open: 'bg-blue-400',
      qualified: 'bg-purple-400',
      unqualified: 'bg-gray-400'
    }
    return colors[status || 'new']
  }

  return (
    <div className="bg-white rounded-lg border overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Company
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Location
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Owner
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Contacted
            </th>
            <th className="w-20"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {leads.map((lead) => (
            <tr 
              key={lead.id}
              onClick={() => onLeadSelect(lead)}
              className="hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className={`h-2 w-2 rounded-full ${getStatusColor(lead.status)} mr-3`}></div>
                  <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-600">{lead.company}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-600">{lead.title}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-600">{lead.location}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-600">{lead.owner}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-600">{lead.lastContacted}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right">
                <div className="flex items-center justify-end gap-2">
                  <button className="p-1 hover:bg-gray-100 rounded-full">
                    <Mail size={16} className="text-gray-500" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded-full">
                    <Phone size={16} className="text-gray-500" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded-full">
                    <Calendar size={16} className="text-gray-500" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded-full">
                    <MoreHorizontal size={16} className="text-gray-500" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}