import { X, Mail, Phone, Globe, MapPin, Calendar, Clock } from 'lucide-react'

interface LeadDetailsPanelProps {
  lead?: {
    id: string
    name: string
    company: string
    title: string
    location: string
    owner: string
    lastContacted: string
    email?: string
    phone?: string
    website?: string
    status?: 'new' | 'open' | 'qualified' | 'unqualified'
  }
  onClose: () => void
}

export function LeadDetailsPanel({ lead, onClose }: LeadDetailsPanelProps) {
  if (!lead) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30">
      <div className="absolute inset-y-0 right-0 w-[500px] bg-white shadow-xl">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <h2 className="text-lg font-semibold">Lead Details</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Basic Info */}
            <div className="px-6 py-4">
              <h3 className="text-xl font-semibold mb-2">{lead.name}</h3>
              <p className="text-gray-600 mb-4">{lead.title} at {lead.company}</p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail size={18} />
                  <span>{lead.email || 'No email provided'}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone size={18} />
                  <span>{lead.phone || 'No phone provided'}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Globe size={18} />
                  <span>{lead.website || 'No website provided'}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin size={18} />
                  <span>{lead.location}</span>
                </div>
              </div>
            </div>

            {/* Activity */}
            <div className="border-t px-6 py-4">
              <h4 className="text-sm font-medium text-gray-500 uppercase mb-4">Recent Activity</h4>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Calendar size={18} className="text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm">Meeting scheduled</p>
                    <p className="text-xs text-gray-500">Tomorrow at 2:00 PM</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Clock size={18} className="text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm">Last contacted</p>
                    <p className="text-xs text-gray-500">{lead.lastContacted}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="border-t px-6 py-4">
            <div className="flex gap-3">
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Schedule Meeting
              </button>
              <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}