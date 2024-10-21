import { Navbar } from '@/components/layout/navbar'
import { Sidebar } from '@/components/layout/sidebar'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Welcome to Sales Assistant</h1>
            <p className="text-xl mb-8 text-gray-600">Your AI-powered sales companion</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Recent Leads</h2>
                <p className="text-gray-600">View and manage your latest sales leads here.</p>
                {/* Add a list or table of recent leads here */}
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Performance Overview</h2>
                <p className="text-gray-600">Quick snapshot of your sales performance.</p>
                {/* Add a chart or key metrics here */}
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Upcoming Tasks</h2>
                <p className="text-gray-600">Your priority tasks and follow-ups.</p>
                {/* Add a list of upcoming tasks here */}
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">AI Insights</h2>
                <p className="text-gray-600">AI-generated insights to boost your sales.</p>
                {/* Add AI-generated insights or recommendations here */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}