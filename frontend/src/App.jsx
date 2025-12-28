import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import facebookIcon from '/src/assets/facebook.png'
import twitterIcon from '/src/assets/twitter.png'
import instagramIcon from '/src/assets/instagram.png'
import linkedinIcon from '/src/assets/linkedin.png'
import zikshanaLogo from '/src/assets/logo-1.png'
import heroBannerImage from '/src/assets/pexels-swastikarora-18012459.jpg'
import Home from './pages/Home'
import Stories from './pages/Stories'
import Donate from './pages/Donate'
import Programs from './pages/Programs'
import Contact from './pages/Contact'
import Fellowship from './pages/Fellowship'
import Terms from './pages/Terms'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import NavBar from './components/NavBar'
// ScrollToTop component
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return null;
}






const SafeFooter = () => {
  try {
    const Footer = require('./components/Footer').default
    return <Footer />
  } catch (error) {
    console.log('Footer component not available:', error.message)
    return (
      <footer style={{ 
        padding: '3rem 0 2rem', 
        backgroundColor: 'var(--color-text-primary)', 
        color: 'white'
      }}>
        <div className="container-custom">
          {/* Main Footer Content */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {/* About Section */}
            <div>
              <img 
                src={zikshanaLogo} 
                alt="Zikshana Global Foundation" 
                style={{ 
                  height: '120px', 
                  width: 'auto',
                  objectFit: 'contain',
                  marginBottom: '1rem'
                }} 
              />
              <p style={{ 
                fontSize: '1.1rem',
                fontWeight: 600,
                color: '#fbbf24',
                marginBottom: '0.5rem'
              }}>
                From Classrooms to Changemakers.
              </p>
              <p style={{ lineHeight: 1.6, opacity: 0.9 }}>
                Empowering students with skills, courage, and vision to design the future 
                through transformative education that goes beyond traditional learning.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>Quick Links</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  { name: 'About Us', path: '/' },
                  { name: 'Programs', path: '/programs' },
                  { name: 'Fellowship', path: '/fellowship' },
                  { name: 'Stories', path: '/stories' },
                  { name: 'Contact', path: '/contact' }
                ].map((link, index) => (
                  <Link key={index} to={link.path}
                     style={{ color: 'white', textDecoration: 'none', opacity: 0.9, transition: 'opacity 0.3s' }}
                     onMouseOver={(e) => e.target.style.opacity = '1'}
                     onMouseOut={(e) => e.target.style.opacity = '0.9'}>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>Connect With Us</h4>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <a href="https://www.facebook.com/people/Zikshana/100064189320421/" target="_blank" rel="noopener noreferrer" 
                   style={{ transition: 'transform 0.3s ease' }}
                   onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
                   onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
                  <img src={facebookIcon} alt="Facebook" style={{ width: '32px', height: '32px' }} />
                </a>
                <a href="https://x.com/TeamZikshana?t=U9pf1dvPLGyoAKHExERNnw&s=08" target="_blank" rel="noopener noreferrer"
                   style={{ transition: 'transform 0.3s ease' }}
                   onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
                   onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
                  <img src={twitterIcon} alt="Twitter" style={{ width: '32px', height: '32px' }} />
                </a>
                <a href="https://www.instagram.com/zikshana/" target="_blank" rel="noopener noreferrer"
                   style={{ transition: 'transform 0.3s ease' }}
                   onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
                   onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
                  <img src={instagramIcon} alt="Instagram" style={{ width: '32px', height: '32px' }} />
                </a>
                <a href="https://www.linkedin.com/company/zikshana/posts/?feedView=all" target="_blank" rel="noopener noreferrer"
                   style={{ transition: 'transform 0.3s ease' }}
                   onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
                   onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
                  <img src={linkedinIcon} alt="LinkedIn" style={{ width: '32px', height: '32px' }} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom Copyright */}
          <div style={{ 
            borderTop: '1px solid rgba(255,255,255,0.2)', 
            paddingTop: '1.5rem', 
            textAlign: 'center',
            opacity: 0.8
          }}>
            <p>&copy; 2024 Zikshana Global Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
}

const SafeHome = () => {
  try {
    const Home = require('./pages/Home').default
    return <Home />
  } catch (error) {
    console.log('Home component not available, loading Teach for India inspired homepage:', error.message)
    return <TeachForIndiaInspiredHomepage />
  }
}



function App() {
  console.log('🏥 Zikshana App component rendering...')
  
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <NavBar />
          {/* <SafeHeader /> */}
          <main style={{ flexGrow: 1, paddingTop: '80px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/fellowship" element={<Fellowship />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="*" element={<SafeHome />} />
            </Routes>
          </main>
          <SafeFooter />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
