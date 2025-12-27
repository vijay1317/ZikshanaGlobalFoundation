import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TrendingUp,
  DollarSign,
  Users,
  CheckCircle,
  Clock,
  XCircle,
  Search,
  Download,
  Eye,
  Filter
} from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [donations, setDonations] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  // Check if user is authenticated
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
    } else {
      fetchDashboardData();
    }
  }, [navigate, currentPage]);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem('adminToken');

      // Fetch dashboard stats
      const statsRes = await fetch('http://localhost:8080/api/admin/dashboard/stats', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (statsRes.ok) {
        const statsData = await statsRes.json();
        setStats(statsData);
      }

      // Fetch donations
      const donationsRes = await fetch(
        `http://localhost:8080/api/admin/donations?page=${currentPage}&size=10`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );

      if (donationsRes.ok) {
        const donationsData = await donationsRes.json();
        setDonations(donationsData.donations || []);
        setTotalPages(donationsData.totalPages || 0);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      fetchDashboardData();
      return;
    }

    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch(
        `http://localhost:8080/api/admin/donations/search?${searchQuery.includes('@') ? `email=${searchQuery}` : `transactionId=${searchQuery}`}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );

      if (res.ok) {
        const data = await res.json();
        setDonations(data);
      }
    } catch (error) {
      console.error('Error searching donations:', error);
    }
  };

  const handleExport = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch(
        `http://localhost:8080/api/admin/donations/export${filterStatus !== 'all' ? `?status=${filterStatus}` : ''}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );

      if (res.ok) {
        const data = await res.json();
        const csv = convertToCSV(data);
        downloadCSV(csv, `donations_${new Date().toISOString().split('T')[0]}.csv`);
      }
    } catch (error) {
      console.error('Error exporting donations:', error);
    }
  };

  const convertToCSV = (data) => {
    const headers = ['Transaction ID', 'Name', 'Email', 'Amount', 'Status', 'Date'];
    const rows = data.map(d => [
      d.transactionId,
      d.fullName,
      d.email,
      d.total,
      d.paymentStatus,
      new Date().toLocaleDateString()
    ]);

    return [headers, ...rows].map(row => row.join(',')).join('\n');
  };

  const downloadCSV = (csv, filename) => {
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  const viewDonationDetails = (donation) => {
    setSelectedDonation(donation);
    setShowDetailModal(true);
  };

  const filteredDonations = filterStatus === 'all'
    ? donations
    : donations.filter(d => d.paymentStatus.toLowerCase() === filterStatus.toLowerCase());

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}>
        <div style={{ fontSize: '1.5rem', color: '#7c3aed' }}>Loading...</div>
      </div>
    );
  }

  return (
    <div style={{ background: '#f3f4f6', minHeight: '100vh', padding: '2rem' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem'
      }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
            Admin Dashboard
          </h1>
          <p style={{ color: '#6b7280' }}>Manage and track all donations</p>
        </div>
        <button
          onClick={handleLogout}
          style={{
            background: '#ef4444',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          Logout
        </button>
      </div>

      {/* Stats Cards */}
      {stats && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <StatCard
            icon={<DollarSign size={24} />}
            title="Total Raised"
            value={`₹${stats.totalAmount?.toLocaleString() || 0}`}
            bgColor="#10b981"
          />
          <StatCard
            icon={<Users size={24} />}
            title="Total Donations"
            value={stats.totalDonations || 0}
            bgColor="#3b82f6"
          />
          <StatCard
            icon={<CheckCircle size={24} />}
            title="Successful"
            value={stats.statusCounts?.SUCCESS || 0}
            bgColor="#8b5cf6"
          />
          <StatCard
            icon={<Clock size={24} />}
            title="Pending"
            value={stats.statusCounts?.PENDING || 0}
            bgColor="#f59e0b"
          />
        </div>
      )}

      {/* Search and Filters */}
      <div style={{
        background: 'white',
        padding: '1.5rem',
        borderRadius: '12px',
        marginBottom: '1.5rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: 1, minWidth: '250px', display: 'flex', gap: '0.5rem' }}>
            <input
              type="text"
              placeholder="Search by email or transaction ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              style={{
                flex: 1,
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '0.95rem'
              }}
            />
            <button
              onClick={handleSearch}
              style={{
                background: '#7c3aed',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Search size={18} />
              Search
            </button>
          </div>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            style={{
              padding: '0.75rem',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '0.95rem',
              cursor: 'pointer'
            }}
          >
            <option value="all">All Status</option>
            <option value="SUCCESS">Success</option>
            <option value="PENDING">Pending</option>
            <option value="FAILED">Failed</option>
            <option value="PROCESSING">Processing</option>
          </select>

          <button
            onClick={handleExport}
            style={{
              background: '#059669',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Download size={18} />
            Export
          </button>
        </div>
      </div>

      {/* Donations Table */}
      <div style={{
        background: 'white',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f9fafb', borderBottom: '2px solid #e5e7eb' }}>
                <th style={tableHeaderStyle}>Transaction ID</th>
                <th style={tableHeaderStyle}>Donor Name</th>
                <th style={tableHeaderStyle}>Email</th>
                <th style={tableHeaderStyle}>Amount</th>
                <th style={tableHeaderStyle}>Status</th>
                <th style={tableHeaderStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDonations.length > 0 ? (
                filteredDonations.map((donation, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={tableCellStyle}>{donation.transactionId}</td>
                    <td style={tableCellStyle}>{donation.fullName}</td>
                    <td style={tableCellStyle}>{donation.email}</td>
                    <td style={tableCellStyle}>₹{donation.total?.toLocaleString()}</td>
                    <td style={tableCellStyle}>
                      <StatusBadge status={donation.paymentStatus} />
                    </td>
                    <td style={tableCellStyle}>
                      <button
                        onClick={() => viewDonationDetails(donation)}
                        style={{
                          background: '#7c3aed',
                          color: 'white',
                          padding: '0.5rem 1rem',
                          borderRadius: '6px',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.875rem'
                        }}
                      >
                        <Eye size={14} />
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ ...tableCellStyle, textAlign: 'center', padding: '3rem', color: '#9ca3af' }}>
                    No donations found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            padding: '1.5rem',
            borderTop: '1px solid #e5e7eb'
          }}>
            <button
              onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
              disabled={currentPage === 0}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                border: '1px solid #d1d5db',
                background: currentPage === 0 ? '#f3f4f6' : 'white',
                cursor: currentPage === 0 ? 'not-allowed' : 'pointer'
              }}
            >
              Previous
            </button>
            <span style={{ padding: '0.5rem 1rem', color: '#6b7280' }}>
              Page {currentPage + 1} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
              disabled={currentPage >= totalPages - 1}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                border: '1px solid #d1d5db',
                background: currentPage >= totalPages - 1 ? '#f3f4f6' : 'white',
                cursor: currentPage >= totalPages - 1 ? 'not-allowed' : 'pointer'
              }}
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {showDetailModal && selectedDonation && (
        <DonationDetailModal
          donation={selectedDonation}
          onClose={() => setShowDetailModal(false)}
        />
      )}
    </div>
  );
};

const StatCard = ({ icon, title, value, bgColor }) => (
  <div style={{
    background: 'white',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }}>
    <div style={{
      width: '50px',
      height: '50px',
      borderRadius: '10px',
      background: bgColor,
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {icon}
    </div>
    <div>
      <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>{title}</div>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>{value}</div>
    </div>
  </div>
);

const StatusBadge = ({ status }) => {
  const colors = {
    SUCCESS: { bg: '#d1fae5', text: '#065f46' },
    PENDING: { bg: '#fef3c7', text: '#92400e' },
    FAILED: { bg: '#fee2e2', text: '#991b1b' },
    PROCESSING: { bg: '#dbeafe', text: '#1e40af' }
  };

  const color = colors[status] || colors.PENDING;

  return (
    <span style={{
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      background: color.bg,
      color: color.text,
      fontSize: '0.875rem',
      fontWeight: '600'
    }}>
      {status}
    </span>
  );
};

const DonationDetailModal = ({ donation, onClose }) => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  }} onClick={onClose}>
    <div style={{
      background: 'white',
      padding: '2rem',
      borderRadius: '12px',
      maxWidth: '600px',
      width: '90%',
      maxHeight: '90vh',
      overflow: 'auto'
    }} onClick={(e) => e.stopPropagation()}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>Donation Details</h2>
        <button onClick={onClose} style={{ fontSize: '1.5rem', background: 'none', border: 'none', cursor: 'pointer' }}>×</button>
      </div>

      <div style={{ display: 'grid', gap: '1rem' }}>
        <DetailRow label="Transaction ID" value={donation.transactionId} />
        <DetailRow label="Donor Name" value={donation.fullName} />
        <DetailRow label="Email" value={donation.email} />
        <DetailRow label="Mobile" value={donation.mobile} />
        <DetailRow label="Amount" value={`₹${donation.amount?.toLocaleString()}`} />
        <DetailRow label="Tip" value={`₹${donation.tip?.toLocaleString() || 0}`} />
        <DetailRow label="Total" value={`₹${donation.total?.toLocaleString()}`} />
        <DetailRow label="Status" value={<StatusBadge status={donation.paymentStatus} />} />
        <DetailRow label="Anonymous" value={donation.isAnonymous ? 'Yes' : 'No'} />
        <DetailRow label="WhatsApp Updates" value={donation.whatsappUpdates ? 'Yes' : 'No'} />
      </div>
    </div>
  </div>
);

const DetailRow = ({ label, value }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e5e7eb' }}>
    <span style={{ fontWeight: '600', color: '#6b7280' }}>{label}:</span>
    <span style={{ color: '#1f2937' }}>{value}</span>
  </div>
);

const tableHeaderStyle = {
  padding: '1rem',
  textAlign: 'left',
  fontSize: '0.875rem',
  fontWeight: '600',
  color: '#6b7280',
  textTransform: 'uppercase'
};

const tableCellStyle = {
  padding: '1rem',
  fontSize: '0.9rem',
  color: '#1f2937'
};

export default AdminDashboard;
