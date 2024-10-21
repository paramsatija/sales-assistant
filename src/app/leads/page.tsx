// src/app/leads/page.tsx
import { LeadTable } from '@/components/leads/lead-table'
import { LeadFilters } from '@/components/leads/lead-filters'

type Lead = {
  id: string;
  name: string;
  company: string;
  title: string;
  location: string;
  owner: string;
  lastContacted: string;
};

const mockLeads: Lead[] = [
  {
    id: '1',
    name: 'Megan Hill',
    company: 'Dunder Mifflin',
    title: 'Sales Manager',
    location: 'Scranton, PA',
    owner: 'Michael Scott',
    lastContacted: '2 days ago',
  },
  // Add more mock leads as needed
]

export default function LeadsPage() {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-4">Leads</h1>
        <div className="flex justify-between items-center">
          <LeadFilters />
          <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
            New lead
          </button>
        </div>
      </div>
      <LeadTable leads={mockLeads} />
    </div>
  )
}
