// src/app/leads/page.tsx
'use client'

import { useState } from 'react'
import { Search, Plus } from 'lucide-react'
import { LeadFilters } from '@/components/leads/lead-filters'
import { LeadTable } from '@/components/leads/lead-table'
import { LeadDetailsPanel } from '@/components/leads/lead-details-panel'

// Sample data - you'll replace this with real data later
const sampleLeads = [
  {
    id: '1',
    name: 'Megan Hill',
    company: 'Dunder Mifflin',
    title: 'Sales Manager',
    location: 'Scranton, PA',
    owner: 'Michael Scott',
    lastContacted: '2 days ago',
    email: 'megan.hill@dundermifflin.com',
    phone: '+1 (555) 123-4567',
    website: 'www.dundermifflin.com',
    status: 'new' as const,
  },
  {
    id: '2',
    name: 'Stanley Hudson',
    company: 'Dunder Mifflin',
    title: 'Sales Manager',
    location: 'Scranton, PA',
    owner: 'Michael Scott',
    lastContacted: '3 days ago',
    email: 'stanley.hudson@dundermifflin.com',
    phone: '+1 (555) 123-4568',
    website: 'www.dundermifflin.com',
    status: 'open' as const,
  },
  // Add more sample leads as needed
]

export default function LeadsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLead, setSelectedLead] = useState<typeof sampleLeads[0] | undefined>()

  // Filter leads based on search query
  const filteredLeads = sampleLeads.filter(lead => 
    lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.company.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Leads</h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Plus size={20} />
            New lead
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search leads"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
        </div>

        {/* Filters */}
        <LeadFilters />

        {/* Table */}
        <LeadTable 
          leads={filteredLeads}
          onLeadSelect={(lead) => setSelectedLead(lead)}
        />
      </div>

      {/* Details Panel */}
      <LeadDetailsPanel 
        lead={selectedLead}
        onClose={() => setSelectedLead(undefined)}
      />
    </>
  )
}
