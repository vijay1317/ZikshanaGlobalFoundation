import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Users, 
  FileText, 
  BarChart3, 
  Settings, 
  Plus, 
  Edit, 
  Trash2, 
  Search,
  Calendar,
  Mail,
  Heart,
  DollarSign
} from 'lucide-react'

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [searchTerm, setSearchTerm] = useState('')

  const dashboardStats = [
    { title: 'Total Volunteers', value: '245', icon: Users, color: 'from-blue-500 to-indigo-600', change: '+12%' },
    { title: 'Active Programs', value: '8', icon: FileText, color: 'from-green-500 to-emerald-600', change: '+2' },
    { title: 'Monthly Donations', value: '₹2.4L', icon: DollarSign, color: 'from-purple-500 to-violet-600', change: '+18%' },
    { title: 'Beneficiaries', value: '28,500', icon: Heart, color: 'from-red-500 to-pink-600', change: '+1,200' }
  ]

  const recentActivities = [
    { id: 1, type: 'volunteer', message: 'New volunteer application from Priya Singh', time: '2 hours ago' },
    { id: 2, type: 'donation', message: 'Donation of ₹5,000 received from Anonymous', time: '4 hours ago' },
    { id: 3, type: 'program', message: 'Education program updated in Maharashtra', time: '6 hours ago' },
    { id: 4, type: 'blog', message: 'New blog post published: Healthcare Access', time: '1 day ago' }
  ]

  const volunteers = [
    { id: 1, name: 'Priya Sharma', email: 'priya@email.com', skills: 'Teaching, Content Writing', status: 'Active', joinDate: '2024-01-15' },
    { id: 2, name: 'Rajesh Kumar', email: 'rajesh@email.com', skills: 'Healthcare, Community Work', status: 'Active', joinDate: '2024-01-10' },
    { id: 3, name: 'Meera Patel', email: 'meera@email.com', skills: 'Digital Marketing, Design', status: 'Pending', joinDate: '2024-01-20' }
  ]

  const programs = [
    { id: 1, title: 'Education for All', beneficiaries: 8500, locations: 35, status: 'Active', budget: '₹15L' },
    { id: 2, title: 'Healthcare Access', beneficiaries: 12000, locations: 50, status: 'Active', budget: '₹25L' },
    { id: 3, title: 'Women Empowerment', beneficiaries: 4200, locations: 25, status: 'Active', budget: '₹12L' }
  ]

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'volunteers', label: 'Volunteers', icon: Users },
    { id: 'programs', label: 'Programs', icon: FileText },
    { id: 'content', label: 'Content', icon: Edit },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat, index) => (
          <motion.div
            key={stat.title}
            className="bg-white p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-green-600 text-sm font-medium">{stat.change}</span>
            </div>
            <h3 className="text-2xl font-bold text-neutral-800 mb-1">{stat.value}</h3>
            <p className="text-neutral-600">{stat.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-display font-semibold text-neutral-800 mb-6">Recent Activities</h3>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-4 p-4 bg-neutral-50 rounded-lg">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-neutral-800">{activity.message}</p>
                <p className="text-neutral-500 text-sm">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderVolunteers = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-display font-bold text-neutral-800">Volunteer Management</h2>
        <button className="btn-primary flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Volunteer</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-neutral-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search volunteers..."
              className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-neutral-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Skills</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Join Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              {volunteers.map((volunteer) => (
                <tr key={volunteer.id} className="hover:bg-neutral-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-neutral-900">{volunteer.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-neutral-600">{volunteer.email}</td>
                  <td className="px-6 py-4 text-neutral-600">{volunteer.skills}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      volunteer.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {volunteer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-neutral-600">{volunteer.joinDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button className="text-primary-600 hover:text-primary-800">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderPrograms = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-display font-bold text-neutral-800">Program Management</h2>
        <button className="btn-primary flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Program</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program) => (
          <div key={program.id} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-neutral-800">{program.title}</h3>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                {program.status}
              </span>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-neutral-600">Beneficiaries:</span>
                <span className="font-medium">{program.beneficiaries.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Locations:</span>
                <span className="font-medium">{program.locations}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Budget:</span>
                <span className="font-medium">{program.budget}</span>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button className="flex-1 btn-outline text-sm py-2">
                View Details
              </button>
              <button className="text-primary-600 hover:text-primary-800 p-2">
                <Edit className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Zikshana Global Foundation</title>
        <meta name="description" content="Admin dashboard for managing Zikshana Global Foundation's programs, volunteers, and content." />
      </Helmet>

      <div className="min-h-screen bg-neutral-50 pt-20">
        <div className="container-custom">
          <div className="flex">
            {/* Sidebar */}
            <div className="w-64 bg-white rounded-xl shadow-lg p-6 mr-8 h-fit">
              <h2 className="text-xl font-display font-bold text-neutral-800 mb-6">Admin Panel</h2>
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'bg-primary-50 text-primary-600 border-r-2 border-primary-600'
                        : 'text-neutral-600 hover:bg-neutral-50'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {activeTab === 'dashboard' && renderDashboard()}
                {activeTab === 'volunteers' && renderVolunteers()}
                {activeTab === 'programs' && renderPrograms()}
                {activeTab === 'content' && (
                  <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                    <FileText className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-neutral-800 mb-2">Content Management</h3>
                    <p className="text-neutral-600">Manage blog posts, news, and website content</p>
                  </div>
                )}
                {activeTab === 'settings' && (
                  <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                    <Settings className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-neutral-800 mb-2">Settings</h3>
                    <p className="text-neutral-600">Configure system settings and preferences</p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin