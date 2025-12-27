import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
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

// ScrollToTop component
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return null;
}

// Safe component imports with fallbacks
const SafeHeader = () => {
  try {
    const Header = require('./components/Header').default
    return <Header />
  } catch (error) {
    console.log('Header component not available, loading CRY-inspired header:', error.message)
    return <CRYInspiredHeader />
  }
}

// CRY.org inspired header
const CRYInspiredHeader = () => {
  const navigate = useNavigate();

  return (
    <header style={{
      background: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{
        maxWidth: '1300px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0rem 0px',
        minHeight: '0px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: '-130px',
          marginTop: '-30px',     // reduce top margin
          marginBottom: '-40px' 
        }}>
          <Link to="/" style={{ 
            textDecoration: 'none', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1.2rem',
            transition: 'transform 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.06)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
            <img 
              src={zikshanaLogo} 
              alt="Zikshana Global Foundation" 
              style={{ 
                height: '150px', 
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                zIndex: 10
              }} 
            />
            <div style={{ display: 'none' }}>
              <p style={{
                fontSize: '0.85rem',
                color: 'var(--color-text-secondary)',
                margin: 0,
                fontWeight: 500,
                letterSpacing: '0.5px'
              }}>Empowering Communities, Transforming Lives</p>
            </div>
          </Link>
        </div>
        
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          marginRight: '-150px'
        }}>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[
              { name: 'About Us', path: '/' },
              { name: 'Programs', path: '/programs' },
              { name: 'Fellowship', path: '/fellowship' },
              { name: 'Stories', path: '/stories' },
              { name: 'Contact', path: '/contact' }
            ].map((item, index) => (
              <Link key={index} to={item.path} style={{
                color: 'var(--color-text-primary)',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '0.95rem',
                transition: 'color 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.target.style.color = 'var(--color-primary)'}
              onMouseOut={(e) => e.target.style.color = 'var(--color-text-primary)'}>
                {item.name}
              </Link>
            ))}
          </div>
          
          <button
            onClick={() => navigate('/donate')}
            style={{
              background: 'var(--color-primary)',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '25px',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'var(--color-primary-dark)'
              e.target.style.transform = 'translateY(-1px)'
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'var(--color-primary)'
              e.target.style.transform = 'translateY(0)'
            }}>
            DONATE NOW
          </button>
          
          {/* Social Media Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginLeft: '1rem' }}>
            <a href="https://www.facebook.com/people/Zikshana/100064189320421/" target="_blank" rel="noopener noreferrer" 
               style={{ transition: 'transform 0.3s ease', textDecoration: 'none' }}
               onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
               onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
              <img src={facebookIcon} alt="Facebook" style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://x.com/TeamZikshana?t=U9pf1dvPLGyoAKHExERNnw&s=08" target="_blank" rel="noopener noreferrer"
               style={{ transition: 'transform 0.3s ease', textDecoration: 'none' }}
               onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
               onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
              <img src={twitterIcon} alt="Twitter" style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://www.instagram.com/zikshana/" target="_blank" rel="noopener noreferrer"
               style={{ transition: 'transform 0.3s ease', textDecoration: 'none' }}
               onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
               onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
              <img src={instagramIcon} alt="Instagram" style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://www.linkedin.com/company/zikshana/posts/?feedView=all" target="_blank" rel="noopener noreferrer"
               style={{ transition: 'transform 0.3s ease', textDecoration: 'none' }}
               onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
               onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
              <img src={linkedinIcon} alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
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

// CRY.org inspired homepage design
const TeachForIndiaInspiredHomepage = () => (
  <div>
    {/* Hero Section - Clean TFI Style */}
    <section style={{
      background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #fbbf24 100%)',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      position: 'relative'
    }}>
      {/* Hero Banner Image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${heroBannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
          filter: 'brightness(1.1) contrast(1.05) saturate(1.1)'
        }}
      />
      
      {/* Purple & Yellow Gradient Overlay with Spotlight */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.01) 55%, rgba(251,191,36,0.04) 70%, rgba(234,179,8,0.06) 85%, rgba(124,58,237,0.10) 100%),
          radial-gradient(circle at top left, rgba(124,58,237,0.08) 0%, rgba(124,58,237,0.02) 40%, transparent 70%),
          radial-gradient(circle at top right, rgba(251,191,36,0.15) 0%, rgba(251,191,36,0.05) 40%, transparent 70%),
          radial-gradient(circle at center right, rgba(234,179,8,0.10) 0%, rgba(234,179,8,0.03) 50%, transparent 75%),
          radial-gradient(circle at bottom left, rgba(168,85,247,0.08) 0%, rgba(168,85,247,0.02) 45%, transparent 65%),
          radial-gradient(circle at bottom center, rgba(124,58,237,0.05) 0%, transparent 60%),
          linear-gradient(135deg, rgba(234,179,8,0.08) 0%, rgba(124,58,237,0.03) 30%, rgba(251,191,36,0.06) 70%, rgba(168,85,247,0.04) 100%)
        `,
        zIndex: 2,
        pointerEvents: 'none'
      }} />
      
      {/* Hero Content - Powerful Headlines */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 3,
        textAlign: 'center',
        color: 'white',
        maxWidth: '1000px',
        padding: '0 20px'
      }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontFamily: 'Merriweather, serif',
          fontWeight: 700,
          marginBottom: '1.5rem',
          lineHeight: 1.2,
          textShadow: '2px 2px 8px hsla(52, 80%, 46%, 1.00)',
          animation: 'fadeInUp 1s ease-out'
        }}>
          Because Every Child Deserves More Than Just a Classroom.
        </h1>
        
        <p style={{
          fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
          marginBottom: '3rem',
          opacity: 0.95,
          fontWeight: 500,
          textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
          animation: 'fadeInUp 1s ease-out 0.3s both'
        }}>
          5,000+ students today are discovering the courage to dream, create, and lead.
        </p>
        
        <div style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          animation: 'fadeInUp 1s ease-out 0.6s both'
        }}>
          
          
         
        </div>
      </div>
      
    </section>

    {/* The Problem Section */}
    <section style={{
      background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
      padding: '100px 0',
      color: 'white',
      textAlign: 'center'
    }}>
      <div className="container-custom" style={{ maxWidth: '800px' }}>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
          fontFamily: 'Merriweather, serif',
          marginBottom: '3rem',
          color: '#fbbf24',
          animation: 'fadeInUp 1s ease-out'
        }}>
          The Truth We Cannot Ignore
        </h2>
        
        <div style={{
          fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
          lineHeight: 1.6,
          animation: 'fadeInUp 1s ease-out 0.3s both'
        }}>
          <p style={{ marginBottom: '2rem', fontWeight: 600 }}>
            Classrooms are full. Futures are empty.
          </p>
          <p style={{ marginBottom: '2rem' }}>
            Children memorize answers but leave school without the skills to survive—or the vision to thrive.
          </p>
          <p style={{ 
            fontSize: 'clamp(1.4rem, 2.8vw, 2rem)',
            fontWeight: 700,
            color: '#fcd34d',
            fontStyle: 'italic'
          }}>
            Every lost opportunity is not a number. It's a child's dream slipping away.
          </p>
        </div>
      </div>
    </section>

    {/* The Solution Section */}
    <section style={{
      background: 'linear-gradient(135deg, #fefefe 0%, #f8fafc 100%)',
      padding: '100px 0',
      color: '#1f2937'
    }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
            fontFamily: 'Merriweather, serif',
            marginBottom: '2rem',
            color: '#7c3aed'
          }}>
            Reimagining Education. Redefining Futures.
          </h2>
          
          <p style={{
            fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Zikshana transforms schools into launchpads of possibility by integrating skill-based education alongside academics.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          {[
            { icon: '⚙️', title: 'STEM & Innovation' },
            { icon: '🤖', title: 'Coding & Robotics' },
            { icon: '🌍', title: 'Global Languages' },
            { icon: '🎤', title: 'Public Speaking & Leadership' },
            { icon: '🧘', title: 'Yoga & Well-being' },
            { icon: '🚀', title: 'Entrepreneurship Platforms' }
          ].map((item, index) => (
            <div key={index} className="card" style={{
              padding: '2rem',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              border: '2px solid #e5e7eb',
              animation: `fadeInUp 1s ease-out ${0.1 * index}s both`
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.icon}</div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                color: '#7c3aed'
              }}>
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Zikshana is Different */}
    <section style={{
      backgroundImage: `url(${heroBannerImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '120px 0',
      position: 'relative',
      color: 'white'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(124,58,237,0.8) 0%, rgba(251,191,36,0.7) 100%)',
        zIndex: 1
      }} />
      
      <div className="container-custom" style={{ 
        position: 'relative', 
        zIndex: 2, 
        textAlign: 'center',
        maxWidth: '900px'
      }}>
        <h2 style={{
          fontSize: 'clamp(2.8rem, 5vw, 4rem)',
          fontFamily: 'Merriweather, serif',
          marginBottom: '3rem',
          fontWeight: 700,
          textShadow: '2px 2px 8px rgba(0,0,0,0.3)'
        }}>
          We don't prepare students to survive the future. We empower them to design it.
        </h2>
        
        <div style={{
          display: 'grid',
          gap: '2rem',
          fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
          fontWeight: 500,
          textShadow: '1px 1px 4px rgba(0,0,0,0.3)'
        }}>
          <p>We see potential, not limitations.</p>
          <p>We create builders, not just learners.</p>
          <p>We measure curiosity and courage, not marks.</p>
        </div>
      </div>
    </section>

    {/* Impact Stories */}
    <section style={{
      background: 'var(--color-warm-gray)',
      padding: '100px 0'
    }}>
      <div className="container-custom">
        <h2 style={{
          fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
          fontFamily: 'Merriweather, serif',
          textAlign: 'center',
          marginBottom: '4rem',
          color: '#7c3aed'
        }}>
          5,000+ Students. One Shared Dream.
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {[
            {
              quote: "I was shy to speak… today I lead debates.",
              name: "Priya, Grade 8",
              image: "🎤"
            },
            {
              quote: "I never thought I could build a robot… now I'm teaching others.",
              name: "Arjun, Grade 10",
              image: "🤖"
            },
            {
              quote: "School was boring. Now, every day feels like an adventure.",
              name: "Sneha, Grade 7",
              image: "🚀"
            }
          ].map((story, index) => (
            <div key={index} className="card" style={{
              padding: '2.5rem',
              textAlign: 'center',
              background: 'white',
              animation: `fadeInUp 1s ease-out ${0.2 * index}s both`
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>{story.image}</div>
              <blockquote style={{
                fontSize: '1.3rem',
                fontStyle: 'italic',
                marginBottom: '1.5rem',
                color: '#374151',
                lineHeight: 1.5
              }}>
                "{story.quote}"
              </blockquote>
              <cite style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#7c3aed'
              }}>
                — {story.name}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Programs Section - The Pillars of Transformation */}
    <section style={{
      background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
      padding: '100px 0',
      color: 'white'
    }}>
      <div className="container-custom">
        <h2 style={{
          fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
          fontFamily: 'Merriweather, serif',
          textAlign: 'center',
          marginBottom: '4rem',
          textShadow: '2px 2px 8px rgba(0,0,0,0.3)'
        }}>
          The Pillars of Transformation
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {[
            { 
              icon: '⚙️', 
              title: 'STEM & Innovation',
              description: 'Building tomorrow\'s problem solvers through hands-on science and technology'
            },
            { 
              icon: '🤖', 
              title: 'Coding & Robotics',
              description: 'Empowering young minds to create, program, and innovate'
            },
            { 
              icon: '🌍', 
              title: 'Global Languages',
              description: 'Opening doors to worldwide opportunities through multilingual fluency'
            },
            { 
              icon: '🎤', 
              title: 'Public Speaking & Leadership',
              description: 'Developing confident voices that will lead the next generation'
            },
            { 
              icon: '🧘', 
              title: 'Yoga & Well-being',
              description: 'Nurturing mental health and physical wellness for holistic growth'
            },
            { 
              icon: '🚀', 
              title: 'Entrepreneurship',
              description: 'Inspiring young entrepreneurs to turn dreams into reality'
            }
          ].map((program, index) => (
            <div key={index} style={{
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              padding: '2.5rem',
              borderRadius: '15px',
              border: '1px solid rgba(255,255,255,0.2)',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              animation: `fadeInUp 1s ease-out ${0.1 * index}s both`
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>{program.icon}</div>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                marginBottom: '1rem',
                color: '#fbbf24'
              }}>
                {program.title}
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                opacity: 0.9
              }}>
                {program.description}
              </p>
              <button style={{
                marginTop: '1.5rem',
                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                color: '#1f2937',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '25px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 8px 25px rgba(251,191,36,0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Donation Call to Action */}
    <section style={{
      backgroundImage: `url(${heroBannerImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '120px 0',
      position: 'relative',
      color: 'white'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(31,41,55,0.9) 0%, rgba(124,58,237,0.8) 100%)',
        zIndex: 1
      }} />
      
      <div className="container-custom" style={{ 
        position: 'relative', 
        zIndex: 2, 
        textAlign: 'center',
        maxWidth: '900px'
      }}>
        <h2 style={{
          fontSize: 'clamp(2.8rem, 5vw, 4rem)',
          fontFamily: 'Merriweather, serif',
          marginBottom: '3rem',
          fontWeight: 700,
          textShadow: '2px 2px 8px rgba(0,0,0,0.3)'
        }}>
          Be the Reason a Child's Story Changes.
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {[
            { amount: '₹500', impact: 'Provide resources for one child' },
            { amount: '₹1,000', impact: 'Fund a workshop' },
            { amount: '₹5,000', impact: 'Support a classroom program for a month' },
            { amount: '₹50,000', impact: 'Establish a skill & entrepreneurship hub' }
          ].map((donation, index) => (
            <div key={index} style={{
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              padding: '2rem',
              borderRadius: '15px',
              border: '2px solid rgba(251,191,36,0.3)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              animation: `fadeInUp 1s ease-out ${0.1 * index}s both`
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = '#fbbf24';
              e.currentTarget.style.background = 'rgba(251,191,36,0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(251,191,36,0.3)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: '#fbbf24',
                marginBottom: '1rem'
              }}>
                {donation.amount}
              </div>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.4
              }}>
                {donation.impact}
              </p>
            </div>
          ))}
        </div>
        
        <div style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link to="/donate" style={{ textDecoration: 'none' }}>
            <button className="btn-donate" style={{
              fontSize: '1.3rem',
              padding: '18px 40px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              🔴 Donate Now
            </button>
          </Link>
          
          <button className="btn-primary" style={{
            fontSize: '1.3rem',
            padding: '18px 40px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            🟢 Partner With Us
          </button>
        </div>
      </div>
    </section>

    {/* Get Involved Section */}
    <section style={{
      background: 'var(--color-warm-gray)',
      padding: '100px 0'
    }}>
      <div className="container-custom">
        <h2 style={{
          fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
          fontFamily: 'Merriweather, serif',
          textAlign: 'center',
          marginBottom: '4rem',
          color: '#7c3aed'
        }}>
          Join Our Mission
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {[
            {
              icon: '🤝',
              title: 'Volunteer',
              description: 'Mentor or share your expertise',
              cta: 'Get Started'
            },
            {
              icon: '🤲',
              title: 'Partner',
              description: 'Collaborate to scale impact',
              cta: 'Learn More'
            },
            {
              icon: '🏢',
              title: 'Corporate CSR',
              description: 'Invest in future-ready education',
              cta: 'Connect Now'
            }
          ].map((item, index) => (
            <div key={index} className="card" style={{
              padding: '3rem',
              textAlign: 'center',
              background: 'white',
              border: '2px solid #e5e7eb',
              animation: `fadeInUp 1s ease-out ${0.2 * index}s both`
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>{item.icon}</div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                marginBottom: '1rem',
                color: '#7c3aed'
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '2rem',
                color: '#374151',
                lineHeight: 1.5
              }}>
                {item.description}
              </p>
              <button className="btn-secondary" style={{
                fontSize: '1rem',
                padding: '12px 24px'
              }}>
                {item.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Closing Manifesto */}
    <section style={{
      background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
      padding: '100px 0',
      textAlign: 'center',
      color: '#1f2937'
    }}>
      <div className="container-custom" style={{ maxWidth: '800px' }}>
        <blockquote style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontFamily: 'Merriweather, serif',
          fontWeight: 700,
          lineHeight: 1.3,
          fontStyle: 'italic',
          textShadow: '1px 1px 3px rgba(0,0,0,0.1)'
        }}>
          "When you give, you don't just fund education—you rewrite destinies."
        </blockquote>
      </div>
    </section>

    {/* Impact Numbers */}
    <section style={{ background: 'var(--color-warm-gray)', padding: '60px 0' }}>
      <div className="container-custom">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem',
          textAlign: 'center'
        }}>
          {[
            { number: '25,000+', label: 'Lives Transformed', icon: '❤️' },
            { number: '150+', label: 'Communities Reached', icon: '🏘️' },
            { number: '50+', label: 'Healthcare Camps', icon: '🏥' },
            { number: '100+', label: 'Education Centers', icon: '📚' }
          ].map((stat, index) => (
            <div key={index} style={{ 
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold', 
                color: 'var(--color-primary)',
                fontFamily: 'Merriweather, serif'
              }}>{stat.number}</div>
              <div style={{ 
                fontSize: '1.1rem', 
                color: 'var(--color-text-secondary)',
                fontWeight: 500
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Our Programs */}
    <section style={{ padding: '80px 0', background: 'white' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ 
            color: 'var(--color-primary)',
            marginBottom: '1rem',
            fontFamily: 'Merriweather, serif'
          }}>
            How We Make a Difference
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Our comprehensive approach tackles the root causes of poverty and inequality
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem'
        }}>
          {[
            {
              title: 'Education for All',
              description: 'Quality learning opportunities and skill development for children and adults',
              icon: '📚',
              color: '#e65100'
            },
            {
              title: 'Healthcare Access',
              description: 'Essential medical services, health camps, and wellness programs',
              icon: '🏥',
              color: '#2e7d32'
            },
            {
              title: 'Community Development',
              description: 'Infrastructure development and sustainable livelihood programs',
              icon: '🏘️',
              color: '#f57f17'
            },
            {
              title: 'Women Empowerment',
              description: 'Leadership training, skill development, and economic opportunities',
              icon: '👩‍💼',
              color: '#d32f2f'
            }
          ].map((program, index) => (
            <div key={index} className="card" style={{ padding: '2rem' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                background: program.color + '20',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                marginBottom: '1rem'
              }}>
                {program.icon}
              </div>
              <h3 style={{ 
                color: program.color,
                marginBottom: '1rem',
                fontFamily: 'Merriweather, serif'
              }}>{program.title}</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section style={{ 
      background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
      padding: '80px 0',
      color: 'white',
      textAlign: 'center'
    }}>
      <div className="container-custom">
        <h2 style={{ 
          fontSize: '2.5rem',
          marginBottom: '1rem',
          fontFamily: 'Merriweather, serif'
        }}>
          Be the Change You Want to See
        </h2>
        <p style={{ fontSize: '1.3rem', marginBottom: '2rem', opacity: 0.9 }}>
          Every contribution, no matter how small, creates ripples of positive change
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/donate" style={{ textDecoration: 'none' }}>
            <button className="btn-donate">Donate Now</button>
          </Link>
          <button style={{
            background: 'transparent',
            border: '2px solid white',
            color: 'white',
            padding: '14px 28px',
            borderRadius: '6px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.background = 'white'
            e.target.style.color = 'var(--color-primary)'
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'transparent'
            e.target.style.color = 'white'
          }}>
            Become a Volunteer
          </button>
        </div>
      </div>
    </section>
  </div>
)


// Stories of Change Page
const StoriesPage = () => {
  return (
    <div style={{ background: 'var(--color-warm-gray)' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(230, 81, 0, 0.95) 0%, rgba(46, 125, 50, 0.85) 100%), url("https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container-custom">
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            marginBottom: '1.5rem',
            fontFamily: 'Merriweather, serif',
            fontWeight: 700,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            animation: 'fadeInUp 1.2s ease-out'
          }}>
            Stories of <em style={{ color: 'var(--color-accent)' }}>Change</em>
          </h1>
          <p style={{
            fontSize: '1.4rem',
            maxWidth: '800px',
            margin: '0 auto',
            opacity: 0.95,
            animation: 'fadeInUp 1.2s ease-out 0.3s both',
            lineHeight: 1.6
          }}>
            Real stories of transformation, hope, and the power of believing in human potential
          </p>
        </div>
      </section>

      {/* Main Stories Section */}
      <section style={{ padding: '100px 0' }}>
        <div className="container-custom">
          {/* Introduction */}
          <div style={{
            textAlign: 'center',
            marginBottom: '5rem',
            animation: 'slideInFromBottom 1s ease-out 0.5s both'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontFamily: 'Merriweather, serif',
              color: 'var(--color-primary)',
              marginBottom: '1rem'
            }}>
              Transforming Lives, One Story at a Time
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--color-text-secondary)',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7
            }}>
              Every child we reach becomes a story of possibility. Here are the journeys that inspire us to keep going.
            </p>
          </div>

          {/* Story 1 - Student Story */}
          <div style={{
            background: 'white',
            borderRadius: '25px',
            padding: '0',
            marginBottom: '4rem',
            boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            animation: 'slideInFromLeft 1s ease-out 0.7s both'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              minHeight: '500px',
              alignItems: 'center'
            }}>
              {/* Image Section */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(230, 81, 0, 0.8) 0%, rgba(46, 125, 50, 0.6) 100%), url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Floating code elements */}
                <div style={{
                  position: 'absolute',
                  top: '15%',
                  left: '10%',
                  fontSize: '1.2rem',
                  opacity: 0.4,
                  fontFamily: 'monospace',
                  animation: 'codeFloat1 8s ease-in-out infinite',
                  color: '#00ff88'
                }}>{'<html>'}</div>
                <div style={{
                  position: 'absolute',
                  top: '25%',
                  right: '15%',
                  fontSize: '1rem',
                  opacity: 0.4,
                  fontFamily: 'monospace',
                  animation: 'codeFloat2 6s ease-in-out infinite 1s',
                  color: '#4fc3f7'
                }}>function()</div>
                <div style={{
                  position: 'absolute',
                  bottom: '30%',
                  left: '15%',
                  fontSize: '1.1rem',
                  opacity: 0.4,
                  fontFamily: 'monospace',
                  animation: 'codeFloat3 7s ease-in-out infinite 2s',
                  color: '#ffeb3b'
                }}>{'{ code }'}</div>
                <div style={{
                  position: 'absolute',
                  bottom: '20%',
                  right: '20%',
                  fontSize: '1rem',
                  opacity: 0.4,
                  fontFamily: 'monospace',
                  animation: 'codeFloat1 5s ease-in-out infinite 3s',
                  color: '#ff5722'
                }}>console.log()</div>

                <div style={{
                  textAlign: 'center',
                  zIndex: 2,
                  animation: 'pulseGlow 2s ease-in-out infinite'
                }}>
                  <div style={{ 
                    fontSize: '4rem', 
                    marginBottom: '1rem',
                    animation: 'bounceCode 3s ease-in-out infinite'
                  }}>👨‍💻</div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontFamily: 'Merriweather, serif',
                    fontWeight: 700,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                  }}>
                    From Village to Silicon Valley
                  </h3>
                </div>
              </div>

              {/* Content Section */}
              <div style={{ padding: '3rem' }}>
                <div style={{
                  fontSize: '1rem',
                  color: 'var(--color-accent)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '1rem'
                }}>
                  Student Success Story
                </div>
                <h3 style={{
                  fontSize: '2rem',
                  fontFamily: 'Merriweather, serif',
                  color: 'var(--color-primary)',
                  marginBottom: '1.5rem',
                  lineHeight: 1.3
                }}>
                  From a Small Town to a World of Opportunity
                </h3>
                <p style={{
                  fontSize: '1.2rem',
                  lineHeight: 1.8,
                  color: 'var(--color-text-secondary)',
                  marginBottom: '2rem'
                }}>
                  A student who had never seen a computer is now coding and dreaming of becoming a software engineer.
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem'
                  }}>
                    🎓
                  </div>
                  <div>
                    <div style={{
                      fontWeight: 600,
                      color: 'var(--color-primary)'
                    }}>
                      Future Software Engineer
                    </div>
                    <div style={{
                      fontSize: '0.9rem',
                      color: 'var(--color-text-muted)'
                    }}>
                      Technology transforms dreams into reality
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Story 2 - Fellow Story */}
          <div style={{
            background: 'white',
            borderRadius: '25px',
            padding: '0',
            marginBottom: '4rem',
            boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            animation: 'slideInFromRight 1s ease-out 0.9s both'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              minHeight: '500px',
              alignItems: 'center'
            }}>
              {/* Content Section - Left */}
              <div style={{ padding: '3rem' }}>
                <div style={{
                  fontSize: '1rem',
                  color: 'var(--color-secondary)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '1rem'
                }}>
                  Teacher Impact Story
                </div>
                <h3 style={{
                  fontSize: '2rem',
                  fontFamily: 'Merriweather, serif',
                  color: 'var(--color-secondary)',
                  marginBottom: '1.5rem',
                  lineHeight: 1.3
                }}>
                  The One Who Believed in Them
                </h3>
                <p style={{
                  fontSize: '1.2rem',
                  lineHeight: 1.8,
                  color: 'var(--color-text-secondary)',
                  marginBottom: '2rem'
                }}>
                  A Zikshana Fellow transforms classrooms into spaces of curiosity, confidence, and hope.
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-accent) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem'
                  }}>
                    👩‍🏫
                  </div>
                  <div>
                    <div style={{
                      fontWeight: 600,
                      color: 'var(--color-secondary)'
                    }}>
                      Zikshana Fellow
                    </div>
                    <div style={{
                      fontSize: '0.9rem',
                      color: 'var(--color-text-muted)'
                    }}>
                      Igniting minds, building leaders
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Section - Right */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(46, 125, 50, 0.8) 0%, rgba(245, 127, 23, 0.6) 100%), url("https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                position: 'relative'
              }}>
                <div style={{
                  textAlign: 'center',
                  zIndex: 2
                }}>
                  <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✨</div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontFamily: 'Merriweather, serif',
                    fontWeight: 700
                  }}>
                    Transforming Classrooms
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Statistics */}
          <div style={{
            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
            borderRadius: '25px',
            padding: '4rem 2rem',
            color: 'white',
            textAlign: 'center',
            animation: 'zoomIn 1s ease-out 1.1s both'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontFamily: 'Merriweather, serif',
              marginBottom: '3rem'
            }}>
              Stories in Numbers
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '3rem'
            }}>
              {[
                { number: '5,000+', label: 'Dreams Awakened', icon: '⭐' },
                { number: '200+', label: 'Fellows Making Impact', icon: '👥' },
                { number: '50+', label: 'Communities Transformed', icon: '🏘️' },
                { number: '∞', label: 'Possibilities Created', icon: '🌟' }
              ].map((stat, index) => (
                <div key={index} style={{
                  animation: `fadeInUp 0.8s ease-out ${1.3 + index * 0.1}s both`
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    fontFamily: 'Merriweather, serif'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: '1.1rem',
                    opacity: 0.9
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%)',
        padding: '80px 0',
        textAlign: 'center',
        color: 'white'
      }}>
        <div className="container-custom">
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            fontFamily: 'Merriweather, serif'
          }}>
            Be Part of the Next Story
          </h2>
          <p style={{ fontSize: '1.3rem', marginBottom: '2rem', opacity: 0.9 }}>
            Every story starts with someone who believes. Will you be that someone?
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-donate" style={{
              background: 'white',
              color: 'var(--color-primary)',
              fontWeight: 700,
              fontSize: '1.1rem'
            }}>
              Start a Story Today
            </button>
            <button style={{
              background: 'transparent',
              border: '2px solid white',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '6px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '1.1rem'
            }}>
              Share Your Story
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Code floating animations */
        @keyframes codeFloat1 {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.4;
          }
          25% { 
            transform: translateY(-15px) rotate(2deg);
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-20px) rotate(-1deg);
            opacity: 0.5;
          }
          75% { 
            transform: translateY(-10px) rotate(1deg);
            opacity: 0.7;
          }
        }
        
        @keyframes codeFloat2 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0.4;
          }
          33% { 
            transform: translateY(-10px) translateX(5px);
            opacity: 0.6;
          }
          66% { 
            transform: translateY(-15px) translateX(-3px);
            opacity: 0.5;
          }
        }
        
        @keyframes codeFloat3 {
          0%, 100% { 
            transform: translateY(0px) scale(1);
            opacity: 0.4;
          }
          50% { 
            transform: translateY(-12px) scale(1.1);
            opacity: 0.6;
          }
        }
        
        @keyframes bounceCode {
          0%, 100% { 
            transform: translateY(0px) scale(1);
          }
          25% { 
            transform: translateY(-5px) scale(1.05);
          }
          50% { 
            transform: translateY(-8px) scale(1.1);
          }
          75% { 
            transform: translateY(-3px) scale(1.05);
          }
        }
        
        @keyframes pulseGlow {
          0%, 100% { 
            text-shadow: 0 0 10px rgba(255,255,255,0.5);
          }
          50% { 
            text-shadow: 0 0 20px rgba(255,255,255,0.8), 0 0 30px rgba(230, 81, 0, 0.3);
          }
        }
        
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: '1fr 1fr'"] {
            grid-template-columns: 1fr !important;
          }
          
          .fellowship-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .fellowship-qualities {
            grid-template-columns: 1fr 1fr !important;
          }
          
          /* Hide floating code elements on mobile for better performance */
          @media (max-width: 480px) {
            div[style*="codeFloat"] {
              display: none;
            }
          }
        }
      `}</style>
    </div>
  )
}


function App() {
  console.log('🏥 Zikshana App component rendering...')
  
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <SafeHeader />
          <main style={{ flexGrow: 1 }}>
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
