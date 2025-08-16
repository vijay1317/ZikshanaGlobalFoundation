import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import aboutTeamBanner from '/src/assets/about-team-banner.webp'
import banner2 from '/src/assets/pexels-swastikarora-18012459.jpg'
import banner3 from '/src/assets/pexels-swastikarora-18012463.jpg'
import facebookIcon from '/src/assets/facebook.png'
import twitterIcon from '/src/assets/twitter.png'
import instagramIcon from '/src/assets/instagram.png'
import linkedinIcon from '/src/assets/linkedin.png'
import zikshanaLogo from '/src/assets/logo-1.png'
import heroBannerImage from '/src/assets/pexels-swastikarora-18012459.jpg'

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
const CRYInspiredHeader = () => (
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
          <a href="/" style={{ 
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
          </a>
        </div>
        
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          marginRight: '-150px'
        }}>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[
              { name: 'About Us', path: '/about' },
              { name: 'Programs', path: '/programs' },
              { name: 'Fellowship', path: '/fellowship' },
              { name: 'Stories', path: '/stories' },
              { name: 'Contact', path: '/contact' }
            ].map((item, index) => (
              <a key={index} href={item.path} style={{
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
              </a>
            ))}
          </div>
          
          <button style={{
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
)

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
              <p style={{ lineHeight: 1.6, opacity: 0.9 }}>
                Empowering communities through education, transforming lives one child at a time, 
                and building a brighter future for India's next generation.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>Quick Links</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['About Us', 'Programs', 'Fellowship', 'Stories', 'Contact'].map((link, index) => (
                  <a key={index} href={`/${link.toLowerCase().replace(' ', '')}`} 
                     style={{ color: 'white', textDecoration: 'none', opacity: 0.9, transition: 'opacity 0.3s' }}
                     onMouseOver={(e) => e.target.style.opacity = '1'}
                     onMouseOut={(e) => e.target.style.opacity = '0.9'}>
                    {link}
                  </a>
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
    console.log('Home component not available, loading CRY-inspired homepage:', error.message)
    return <CRYInspiredHomepage />
  }
}

// CRY.org inspired homepage design
const CRYInspiredHomepage = () => (
  <div>
    {/* Hero Section - With Zikshana Logo Animation Video */}
    <section 
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
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
          <button className="btn-donate">Donate Now</button>
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

// Animated About Us Page with Banner Slideshow
const AboutUsPage = () => {
  const slidingImages = [
    { src: banner2, alt: "Students engaged in learning and educational activities" },
    { src: banner3, alt: "Community and education transformation" }
  ];

  return (
    <div style={{ background: 'var(--color-warm-gray)' }}>
      {/* Full Screen Banner Section */}
      <section style={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Static Main Banner */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url("${aboutTeamBanner}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'saturate(1.4) contrast(1.2) brightness(1.1) hue-rotate(5deg)',
          zIndex: 1
        }} />

          
        {/* Light overlay for black text readability - reduced for better banner visibility */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at center, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.08) 60%, rgba(255,255,255,0.12) 100%),
            linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.1) 100%)
          `,
          zIndex: 2
        }} />

        {/* Content Overlay - Black text on white background */}
        <div className="container-custom" style={{ 
          position: 'relative', 
          zIndex: 3,
          textAlign: 'center',
          color: '#2c2c2c',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: '15vh',
          transform: 'translateY(-2rem)'
        }}>
          {/* Main description */}
          <div style={{
            maxWidth: '900px',
            margin: '0 auto 4rem',
            animation: 'textSlideInUp 2s ease-out'
          }}>
            <h1 style={{
              fontSize: 'clamp(1.6rem, 4.2vw, 2.4rem)',
              lineHeight: 1.5,
              textShadow: `
                2px 2px 4px rgba(255,255,255,0.9),
                0 0 12px rgba(255,255,255,0.8),
                1px 1px 2px rgba(0,0,0,0.3)
              `,
              fontWeight: 700,
              margin: 0,
              letterSpacing: '0.3px',
              fontFamily: 'Playfair Display, Georgia, serif',
              color: '#1a1a1a'
            }}>
              "Empowering communities through education, transforming lives one child at a time, 
              and building a brighter future for India's next generation."
            </h1>
          </div>
          
        </div>

        {/* Scroll Down Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 4,
          color: 'white',
          textAlign: 'center',
          animation: 'bounceUpDown 2s ease-in-out infinite'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⬇️</div>
          <p style={{ 
            fontSize: '0.9rem', 
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            margin: 0
          }}>
            Scroll to learn more
          </p>
        </div>
      </section>

      {/* Main About Content */}
      <section style={{ padding: '80px 0' }}>
        <div className="container-custom">
          {/* Introduction */}
          <div style={{
            background: 'white',
            padding: '3rem',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            marginBottom: '4rem',
            animation: 'slideInFromLeft 1s ease-out'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <img 
                src={zikshanaLogo} 
                alt="Zikshana Global Foundation" 
                style={{ 
                  height: '100px', 
                  width: 'auto',
                  objectFit: 'contain',
                  marginBottom: '1.5rem'
                }} 
              />
            </div>
            <p style={{
              fontSize: '1.3rem',
              lineHeight: 1.8,
              color: 'var(--color-text-primary)',
              textAlign: 'center',
              fontWeight: 500
            }}>
              We believe education is more than a right—it's the most powerful tool for change. 
              We work to bridge the gap between potential and opportunity for children from under-resourced communities across India.
            </p>
          </div>

          {/* Mission Section */}
          <div style={{ marginBottom: '5rem' }}>
            <div style={{
              background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
              color: 'white',
              padding: '3rem',
              borderRadius: '20px',
              marginBottom: '2rem',
              animation: 'slideInFromRight 1s ease-out 0.2s both'
            }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontFamily: 'Merriweather, serif',
                textAlign: 'center',
                marginBottom: '1rem'
              }}>
                🎯 Our Mission – Igniting Minds, Building Leaders
              </h2>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {[
                {
                  icon: '📚',
                  title: 'High-Quality Education',
                  description: 'Provide high-quality education in underserved communities.',
                  color: '#e65100'
                },
                {
                  icon: '🌱',
                  title: 'Holistic Growth',
                  description: 'Foster holistic growth through wellness and emotional intelligence.',
                  color: '#2e7d32'
                },
                {
                  icon: '👑',
                  title: 'Leadership Development',
                  description: 'Develop leadership skills to empower students to shape their own futures.',
                  color: '#f57f17'
                },
                {
                  icon: '❤️',
                  title: 'Integrity & Service',
                  description: 'Serve with integrity, equity, and empathy—without profit motive.',
                  color: '#d32f2f'
                }
              ].map((item, index) => (
                <div key={index} style={{
                  background: 'white',
                  padding: '2.5rem',
                  borderRadius: '15px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  animation: `fadeInUp 1s ease-out ${0.3 + index * 0.1}s both`
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)'
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)'
                }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '1rem'
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{
                    color: item.color,
                    marginBottom: '1rem',
                    fontFamily: 'Merriweather, serif',
                    fontSize: '1.3rem'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    fontSize: '1.1rem'
                  }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Full Screen Sliding Images Section */}
          <div style={{ 
            margin: '5rem 0',
            position: 'relative',
            overflow: 'hidden',
            height: '100vh',
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)'
          }}>
            {/* Sliding Images */}
            {slidingImages.map((image, index) => (
              <div
                key={index}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url("${image.src}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  filter: 'saturate(1.5) contrast(1.3) brightness(1.15) hue-rotate(8deg) vibrance(1.2)',
                  opacity: 0,
                  animation: `slideLeftToRight 20s infinite ${index * 10}s`
                }}
              />
            ))}
            
            {/* Light overlay for text readability */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%)',
              zIndex: 2
            }} />

            {/* Content overlay with inspiring quote - no blur modal */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 3,
              textAlign: 'center',
              color: 'white',
              padding: '2rem',
              width: '90%',
              maxWidth: '900px',
              animation: 'fadeInUp 1s ease-out'
            }}>
              {/* Quote marks */}
              <div style={{
                fontSize: '5rem',
                color: 'rgba(255,255,255,0.8)',
                fontFamily: 'Times, serif',
                lineHeight: 1,
                marginBottom: '1rem',
                textShadow: '3px 3px 6px rgba(0,0,0,0.8)'
              }}>"</div>
              
              <blockquote style={{
                fontSize: 'clamp(1.4rem, 3.8vw, 2.2rem)',
                fontStyle: 'italic',
                margin: '0 0 2rem 0',
                textShadow: `
                  3px 3px 6px rgba(0,0,0,0.9),
                  0 0 20px rgba(0,0,0,0.7),
                  1px 1px 3px rgba(255,255,255,0.3)
                `,
                fontWeight: 700,
                lineHeight: 1.6,
                fontFamily: 'Playfair Display, Georgia, serif',
                color: 'white',
                animation: 'textGlowPulse 4s ease-in-out infinite'
              }}>
                Every child deserves the opportunity to reach their full potential and shine bright like the stars they are meant to be.
              </blockquote>
              
              {/* Animated star */}
              <div style={{
                textAlign: 'center',
                animation: 'starBounce 3s ease-in-out infinite',
                marginTop: '1rem'
              }}>
                <div style={{
                  fontSize: '4rem',
                  display: 'inline-block',
                  filter: 'drop-shadow(0 0 20px rgba(255,215,0,1)) drop-shadow(0 0 30px rgba(255,255,255,0.9)) drop-shadow(3px 3px 6px rgba(0,0,0,0.8))'
                }}>🌟</div>
              </div>

              <p style={{
                fontSize: 'clamp(1.1rem, 2.8vw, 1.6rem)',
                margin: '2rem 0 0 0',
                textShadow: `
                  2px 2px 4px rgba(0,0,0,0.8),
                  0 0 15px rgba(0,0,0,0.6),
                  1px 1px 2px rgba(255,255,255,0.2)
                `,
                fontWeight: 600,
                lineHeight: 1.7,
                opacity: 1,
                fontFamily: 'Open Sans, sans-serif'
              }}>
                Creating lasting impact through community partnerships and innovative educational approaches
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div style={{
            background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-dark) 100%)',
            color: 'white',
            padding: '4rem',
            borderRadius: '20px',
            textAlign: 'center',
            animation: 'zoomIn 1s ease-out 0.5s both'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🌟</div>
            <h2 style={{
              fontSize: '2.5rem',
              fontFamily: 'Merriweather, serif',
              marginBottom: '2rem'
            }}>
              Our Vision – An India Where Every Child Thrives
            </h2>
            <p style={{
              fontSize: '1.4rem',
              lineHeight: 1.8,
              maxWidth: '900px',
              margin: '0 auto',
              fontWeight: 400
            }}>
              We envision a nation where every child, regardless of background, has the skills, confidence, 
              and compassion to live meaningfully and lead change.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%)',
        padding: '60px 0',
        textAlign: 'center',
        color: 'white'
      }}>
        <div className="container-custom">
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            fontFamily: 'Merriweather, serif'
          }}>
            Join Our Mission
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
            Help us ignite minds and build leaders across India
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-donate" style={{
              background: 'white',
              color: 'var(--color-primary)',
              fontWeight: 700
            }}>
              Support Our Cause
            </button>
            <button style={{
              background: 'transparent',
              border: '2px solid white',
              color: 'white',
              padding: '14px 28px',
              borderRadius: '6px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        /* New animations for About Us page */
        @keyframes floatUp {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.7;
          }
          25% { 
            transform: translateY(-15px) rotate(5deg);
            opacity: 0.9;
          }
          50% { 
            transform: translateY(-25px) rotate(-3deg);
            opacity: 0.6;
          }
          75% { 
            transform: translateY(-10px) rotate(2deg);
            opacity: 0.8;
          }
        }
        
        @keyframes heartBeat {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.8;
          }
          25% { 
            transform: scale(1.1);
            opacity: 1;
          }
          50% { 
            transform: scale(1.2);
            opacity: 0.9;
          }
          75% { 
            transform: scale(1.05);
            opacity: 0.7;
          }
        }
        
        @keyframes pulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 1;
          }
          50% { 
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
        
        /* Left to right sliding animation for full screen images */
        @keyframes slideLeftToRight {
          0%, 10% { 
            opacity: 0;
            transform: translateX(-100%);
          }
          15%, 40% { 
            opacity: 1;
            transform: translateX(0);
          }
          45%, 85% { 
            opacity: 1;
            transform: translateX(0);
          }
          90%, 100% { 
            opacity: 0;
            transform: translateX(100%);
          }
        }
        
        @keyframes bounceUpDown {
          0%, 100% { 
            transform: translateX(-50%) translateY(0px);
          }
          50% { 
            transform: translateX(-50%) translateY(-10px);
          }
        }
        
        /* Enhanced text animations for better visibility */
        @keyframes textSlideInUp {
          0% { 
            opacity: 0;
            transform: translateY(50px);
            filter: blur(5px);
          }
          100% { 
            opacity: 1;
            transform: translateY(0);
            filter: blur(0px);
          }
        }
        
        @keyframes textFloat {
          0% { 
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          100% { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes starGlow {
          0%, 100% { 
            transform: scale(1);
            filter: drop-shadow(0 0 10px rgba(255,255,255,0.8));
          }
          50% { 
            transform: scale(1.1);
            filter: drop-shadow(0 0 20px rgba(255,255,255,1)) drop-shadow(0 0 30px rgba(255,215,0,0.8));
          }
        }
        
        /* New animations for black text */
        @keyframes typewriterMultiline {
          0% { 
            max-height: 0;
            opacity: 0;
          }
          1% {
            opacity: 1;
          }
          100% { 
            max-height: 10em;
            opacity: 1;
          }
        }
        
        @keyframes blinkCursor {
          0%, 50% { 
            border-right: 3px solid var(--color-primary);
          }
          51%, 100% { 
            border-right: 3px solid transparent;
          }
        }
        
        @keyframes textBounceIn {
          0% { 
            opacity: 0;
            transform: scale(0.3) translateY(50px);
          }
          50% { 
            opacity: 1;
            transform: scale(1.05) translateY(-10px);
          }
          70% { 
            transform: scale(0.9) translateY(5px);
          }
          100% { 
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes textGlowPulse {
          0%, 100% { 
            text-shadow: 0.5px 0.5px 1px rgba(0,0,0,0.1), 0 0 5px rgba(255,255,255,0.8);
            transform: scale(1);
          }
          50% { 
            text-shadow: 1px 1px 2px rgba(0,0,0,0.15), 0 0 10px rgba(255,255,255,1), 0 0 15px rgba(255,215,0,0.3);
            transform: scale(1.02);
          }
        }
        
        @keyframes starBounce {
          0%, 100% { 
            transform: translateY(0) scale(1);
            filter: drop-shadow(0 0 10px rgba(255,215,0,0.8));
          }
          25% { 
            transform: translateY(-8px) scale(1.1);
            filter: drop-shadow(0 0 15px rgba(255,215,0,1));
          }
          50% { 
            transform: translateY(-12px) scale(1.15);
            filter: drop-shadow(0 0 20px rgba(255,215,0,1)) drop-shadow(0 0 30px rgba(255,255,255,0.8));
          }
          75% { 
            transform: translateY(-5px) scale(1.05);
            filter: drop-shadow(0 0 12px rgba(255,215,0,0.9));
          }
        }
      `}</style>
    </div>
  )
}

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

// Fellowship Page - Dedicated and comprehensive
const FellowshipPage = () => {
  return (
    <div style={{ background: 'var(--color-warm-gray)' }}>
      {/* Hero Section - Fellowship Focused */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(230, 81, 0, 0.95) 0%, rgba(46, 125, 50, 0.9) 100%), url("https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        position: 'relative'
      }}>
        {/* Floating Elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          fontSize: '3rem',
          opacity: 0.3,
          animation: 'float 6s ease-in-out infinite'
        }}>📚</div>
        <div style={{
          position: 'absolute',
          top: '30%',
          right: '15%',
          fontSize: '2.5rem',
          opacity: 0.3,
          animation: 'float 4s ease-in-out infinite 2s'
        }}>🎓</div>
        <div style={{
          position: 'absolute',
          bottom: '25%',
          left: '20%',
          fontSize: '2rem',
          opacity: 0.3,
          animation: 'float 5s ease-in-out infinite 1s'
        }}>✨</div>

        <div className="container-custom" style={{ zIndex: 2 }}>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(15px)',
            padding: '3rem',
            borderRadius: '30px',
            border: '2px solid rgba(255,255,255,0.2)',
            animation: 'fadeInUp 1.5s ease-out'
          }}>
            <div style={{
              fontSize: '4rem',
              marginBottom: '1rem',
              animation: 'zoomIn 1.5s ease-out 0.5s both'
            }}>🚀</div>
            
            <h1 style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              marginBottom: '1rem',
              fontFamily: 'Merriweather, serif',
              fontWeight: 700,
              textShadow: '3px 3px 6px rgba(0,0,0,0.3)',
              animation: 'slideInFromLeft 1.5s ease-out 0.3s both'
            }}>
              The <em style={{ color: 'var(--color-accent)' }}>Zikshana Fellowship</em>
            </h1>
            
            <div style={{
              fontSize: '2rem',
              fontFamily: 'Merriweather, serif',
              marginBottom: '2rem',
              fontWeight: 600,
              animation: 'slideInFromRight 1.5s ease-out 0.6s both'
            }}>
              Lead the Change
            </div>
            
            <p style={{
              fontSize: '1.5rem',
              maxWidth: '800px',
              margin: '0 auto 3rem',
              opacity: 0.95,
              lineHeight: 1.7,
              animation: 'fadeInUp 1.5s ease-out 0.9s both'
            }}>
              A transformative two-year leadership journey placing passionate young professionals 
              in government schools to teach and inspire the next generation of leaders.
            </p>
            
            <button style={{
              background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%)',
              color: 'white',
              border: 'none',
              padding: '20px 50px',
              borderRadius: '50px',
              fontSize: '1.3rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              boxShadow: '0 10px 30px rgba(230, 81, 0, 0.4)',
              animation: 'zoomIn 1.5s ease-out 1.2s both'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-5px) scale(1.1)'
              e.target.style.boxShadow = '0 15px 40px rgba(230, 81, 0, 0.6)'
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)'
              e.target.style.boxShadow = '0 10px 30px rgba(230, 81, 0, 0.4)'
            }}>
              🌟 Start Your Fellowship Journey
            </button>
          </div>
        </div>
      </section>

      {/* Fellowship Overview */}
      <section style={{ padding: '100px 0', background: 'white' }}>
        <div className="container-custom">
          <div style={{
            textAlign: 'center',
            marginBottom: '5rem',
            animation: 'fadeInUp 1s ease-out 0.2s both'
          }}>
            <h2 style={{
              fontSize: '3rem',
              fontFamily: 'Merriweather, serif',
              color: 'var(--color-primary)',
              marginBottom: '1.5rem'
            }}>
              Redefining Educational Leadership
            </h2>
            <p style={{
              fontSize: '1.4rem',
              color: 'var(--color-text-secondary)',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.8
            }}>
              The Zikshana Fellowship is more than a teaching program—it's a catalyst for systemic change, 
              designed to empower both Fellows and students to become agents of transformation.
            </p>
          </div>

          {/* Two-Year Journey Timeline */}
          <div style={{
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            padding: '4rem',
            borderRadius: '25px',
            marginBottom: '5rem',
            animation: 'slideInFromBottom 1s ease-out 0.4s both'
          }}>
            <h3 style={{
              fontSize: '2.5rem',
              fontFamily: 'Merriweather, serif',
              color: 'var(--color-primary)',
              textAlign: 'center',
              marginBottom: '3rem'
            }}>
              ⏳ Your Two-Year Transformation Journey
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'center'
            }}>
              {/* Year 1 */}
              <div style={{
                background: 'white',
                padding: '2.5rem',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                border: '3px solid var(--color-primary)',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem'
                }}>🌱</div>
                <h4 style={{
                  fontSize: '1.8rem',
                  fontFamily: 'Merriweather, serif',
                  color: 'var(--color-primary)',
                  marginBottom: '1rem'
                }}>
                  Year 1: Foundation & Growth
                </h4>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                  color: 'var(--color-text-secondary)'
                }}>
                  Immerse in classroom teaching, develop pedagogical skills, and build deep connections 
                  with students and communities while learning innovative teaching methods.
                </p>
              </div>

              {/* Year 2 */}
              <div style={{
                background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
                padding: '2.5rem',
                borderRadius: '20px',
                color: 'white',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem'
                }}>🌟</div>
                <h4 style={{
                  fontSize: '1.8rem',
                  fontFamily: 'Merriweather, serif',
                  marginBottom: '1rem'
                }}>
                  Year 2: Leadership & Impact
                </h4>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                  opacity: 0.95
                }}>
                  Lead systemic initiatives, mentor newer Fellows, drive community engagement, 
                  and design sustainable solutions that extend beyond your classroom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section - Enhanced */}
      <section style={{ padding: '100px 0', background: 'var(--color-warm-gray)' }}>
        <div className="container-custom">
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem',
            animation: 'fadeInUp 1s ease-out 0.2s both'
          }}>
            <h2 style={{
              fontSize: '3rem',
              fontFamily: 'Merriweather, serif',
              color: 'var(--color-primary)',
              marginBottom: '1rem'
            }}>
              🎯 Why Join the Fellowship?
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: 'var(--color-text-secondary)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Four compelling reasons to embark on this life-changing journey
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2.5rem'
          }}>
            {[
              {
                icon: '💡',
                title: 'Lead with Purpose',
                description: 'Directly address educational inequity and make a measurable impact in underserved communities across India.',
                gradient: 'linear-gradient(135deg, #e65100 0%, #ff8a50 100%)',
                animation: 'slideInFromLeft 1s ease-out 0.4s both'
              },
              {
                icon: '📚',
                title: 'Future-Ready Curriculum',
                description: 'Teach cutting-edge subjects: STEM, German, Advanced Computing, English, and Yoga—preparing students for tomorrow.',
                gradient: 'linear-gradient(135deg, #2e7d32 0%, #60ad5e 100%)',
                animation: 'fadeInUp 1s ease-out 0.6s both'
              },
              {
                icon: '💪',
                title: 'Build Resilient Leadership',
                description: 'Develop problem-solving skills, emotional intelligence, and empathy for lifelong personal and professional leadership.',
                gradient: 'linear-gradient(135deg, #f57f17 0%, #ffb300 100%)',
                animation: 'slideInFromRight 1s ease-out 0.8s both'
              },
              {
                icon: '🌐',
                title: 'Powerful Network',
                description: 'Join a growing community of changemakers driving systemic transformation across India and beyond.',
                gradient: 'linear-gradient(135deg, #d32f2f 0%, #f44336 100%)',
                animation: 'fadeInUp 1s ease-out 1s both'
              }
            ].map((item, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '25px',
                padding: '0',
                boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                transition: 'all 0.4s ease',
                animation: item.animation
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)'
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.2)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.1)'
              }}>
                {/* Header with gradient */}
                <div style={{
                  background: item.gradient,
                  padding: '2rem',
                  textAlign: 'center',
                  color: 'white'
                }}>
                  <div style={{
                    fontSize: '3.5rem',
                    marginBottom: '1rem'
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.6rem',
                    fontFamily: 'Merriweather, serif',
                    marginBottom: '0'
                  }}>
                    {item.title}
                  </h3>
                </div>

                {/* Content */}
                <div style={{ padding: '2rem' }}>
                  <p style={{
                    fontSize: '1.2rem',
                    lineHeight: 1.7,
                    color: 'var(--color-text-secondary)',
                    margin: 0
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Seek - Enhanced */}
      <section style={{ padding: '100px 0', background: 'white' }}>
        <div className="container-custom">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'center'
          }}>
            {/* Left - Content */}
            <div style={{
              animation: 'slideInFromLeft 1s ease-out 0.3s both'
            }}>
              <h2 style={{
                fontSize: '3rem',
                fontFamily: 'Merriweather, serif',
                color: 'var(--color-primary)',
                marginBottom: '1.5rem'
              }}>
                👥 Who We Seek
              </h2>
              <p style={{
                fontSize: '1.4rem',
                lineHeight: 1.8,
                color: 'var(--color-text-secondary)',
                marginBottom: '2.5rem'
              }}>
                We're looking for graduates and young professionals who embody these essential qualities 
                and are ready to commit to a transformative two-year journey of impact and growth.
              </p>

              {/* Ideal Candidate Profile */}
              <div style={{
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                padding: '2rem',
                borderRadius: '20px',
                marginBottom: '2rem'
              }}>
                <h4 style={{
                  fontSize: '1.4rem',
                  fontFamily: 'Merriweather, serif',
                  color: 'var(--color-primary)',
                  marginBottom: '1rem'
                }}>
                  📋 Ideal Candidate Profile
                </h4>
                <ul style={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'var(--color-text-primary)',
                  paddingLeft: '1.5rem'
                }}>
                  <li style={{ marginBottom: '0.5rem' }}>Recent graduates or professionals with 0-3 years experience</li>
                  <li style={{ marginBottom: '0.5rem' }}>Strong communication skills in English and local languages</li>
                  <li style={{ marginBottom: '0.5rem' }}>Passion for education and social impact</li>
                  <li style={{ marginBottom: '0.5rem' }}>Willingness to live and work in rural/semi-urban areas</li>
                  <li style={{ marginBottom: '0.5rem' }}>Commitment to continuous learning and growth</li>
                </ul>
              </div>
            </div>

            {/* Right - Qualities Grid */}
            <div style={{
              animation: 'slideInFromRight 1s ease-out 0.5s both'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem'
              }}>
                {[
                  { 
                    icon: '🔥', 
                    title: 'Passionate',
                    description: 'Driven by purpose and committed to making a difference',
                    color: '#e65100'
                  },
                  { 
                    icon: '🌊', 
                    title: 'Adaptable',
                    description: 'Flexible and resilient in diverse environments',
                    color: '#2e7d32'
                  },
                  { 
                    icon: '✨', 
                    title: 'Inspiring',
                    description: 'Natural ability to motivate and encourage others',
                    color: '#f57f17'
                  },
                  { 
                    icon: '💎', 
                    title: 'Committed',
                    description: 'Dedicated to seeing the mission through completion',
                    color: '#d32f2f'
                  }
                ].map((quality, index) => (
                  <div key={index} style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '20px',
                    textAlign: 'center',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                    border: `3px solid ${quality.color}20`,
                    transition: 'all 0.3s ease',
                    animation: `zoomIn 0.8s ease-out ${0.7 + index * 0.1}s both`
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)'
                    e.currentTarget.style.borderColor = quality.color + '60'
                    e.currentTarget.style.boxShadow = `0 15px 35px ${quality.color}30`
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.borderColor = quality.color + '20'
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{
                      fontSize: '3rem',
                      marginBottom: '1rem'
                    }}>
                      {quality.icon}
                    </div>
                    <h4 style={{
                      fontSize: '1.3rem',
                      fontFamily: 'Merriweather, serif',
                      color: quality.color,
                      marginBottom: '0.5rem'
                    }}>
                      {quality.title}
                    </h4>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: 1.5,
                      color: 'var(--color-text-secondary)',
                      margin: 0
                    }}>
                      {quality.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section style={{ padding: '100px 0', background: 'var(--color-warm-gray)' }}>
        <div className="container-custom">
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem',
            animation: 'fadeInUp 1s ease-out 0.2s both'
          }}>
            <h2 style={{
              fontSize: '3rem',
              fontFamily: 'Merriweather, serif',
              color: 'var(--color-primary)',
              marginBottom: '1rem'
            }}>
              🎓 Future-Ready Curriculum
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: 'var(--color-text-secondary)',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              Empower students with skills for the 21st century through our innovative teaching approach
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                subject: 'STEM',
                icon: '🔬',
                description: 'Science, Technology, Engineering, and Mathematics with hands-on experiments and problem-solving',
                color: '#e65100',
                skills: ['Critical Thinking', 'Innovation', 'Problem Solving']
              },
              {
                subject: 'German',
                icon: '🇩🇪',
                description: 'International language skills opening doors to global opportunities and cultural understanding',
                color: '#2e7d32',
                skills: ['Global Mindset', 'Cultural Awareness', 'Communication']
              },
              {
                subject: 'Advanced Computing',
                icon: '💻',
                description: 'Programming, digital literacy, and computational thinking for the digital age',
                color: '#f57f17',
                skills: ['Digital Literacy', 'Logical Thinking', 'Future Skills']
              },
              {
                subject: 'English',
                icon: '📖',
                description: 'Communication excellence, literature appreciation, and global connectivity',
                color: '#d32f2f',
                skills: ['Communication', 'Expression', 'Global Reach']
              },
              {
                subject: 'Yoga',
                icon: '🧘‍♀️',
                description: 'Physical wellness, mental health, and mindfulness for holistic development',
                color: '#7b1fa2',
                skills: ['Wellness', 'Mindfulness', 'Balance']
              }
            ].map((item, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                animation: `fadeInUp 0.8s ease-out ${0.4 + index * 0.1}s both`
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}80 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  margin: '0 auto 1.5rem',
                  color: 'white'
                }}>
                  {item.icon}
                </div>
                
                <h3 style={{
                  fontSize: '1.5rem',
                  fontFamily: 'Merriweather, serif',
                  color: item.color,
                  marginBottom: '1rem'
                }}>
                  {item.subject}
                </h3>
                
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  color: 'var(--color-text-secondary)',
                  marginBottom: '1.5rem'
                }}>
                  {item.description}
                </p>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  justifyContent: 'center'
                }}>
                  {item.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} style={{
                      background: `${item.color}15`,
                      color: item.color,
                      padding: '0.3rem 0.8rem',
                      borderRadius: '15px',
                      fontSize: '0.8rem',
                      fontWeight: 500
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section - Enhanced */}
      <section style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          backgroundSize: '100px 100px'
        }} />

        <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            textAlign: 'center',
            animation: 'zoomIn 1s ease-out 0.3s both'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🌟</div>
            
            <h2 style={{
              fontSize: '3.5rem',
              fontFamily: 'Merriweather, serif',
              marginBottom: '1.5rem',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}>
              Ready to Transform Lives?
            </h2>
            
            <p style={{
              fontSize: '1.4rem',
              maxWidth: '800px',
              margin: '0 auto 3rem',
              opacity: 0.95,
              lineHeight: 1.7
            }}>
              Join a community of visionary educators who are reshaping India's educational landscape. 
              Your two-year journey of impact, growth, and transformation begins here.
            </p>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              {[
                { number: '500+', label: 'Current Fellows' },
                { number: '50,000+', label: 'Students Impacted' },
                { number: '200+', label: 'Partner Schools' },
                { number: '15+', label: 'States Covered' }
              ].map((stat, index) => (
                <div key={index} style={{
                  background: 'rgba(255,255,255,0.2)',
                  padding: '1.5rem',
                  borderRadius: '15px',
                  backdropFilter: 'blur(10px)',
                  animation: `fadeInUp 0.8s ease-out ${0.5 + index * 0.1}s both`
                }}>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    fontFamily: 'Merriweather, serif'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: '1rem',
                    opacity: 0.9
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              animation: 'slideInFromBottom 1s ease-out 1s both'
            }}>
              <button style={{
                background: 'white',
                color: 'var(--color-primary)',
                border: 'none',
                padding: '20px 40px',
                borderRadius: '50px',
                fontSize: '1.3rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(255,255,255,0.3)'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.05)'
                e.target.style.boxShadow = '0 12px 35px rgba(255,255,255,0.4)'
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)'
                e.target.style.boxShadow = '0 8px 25px rgba(255,255,255,0.3)'
              }}>
                🚀 Apply Now
              </button>
              
              <button style={{
                background: 'transparent',
                border: '3px solid white',
                color: 'white',
                padding: '17px 37px',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'white'
                e.target.style.color = 'var(--color-primary)'
                e.target.style.transform = 'translateY(-3px)'
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent'
                e.target.style.color = 'white'
                e.target.style.transform = 'translateY(0)'
              }}>
                📞 Learn More
              </button>
            </div>

            <div style={{
              marginTop: '2rem',
              fontSize: '1rem',
              opacity: 0.8,
              animation: 'fadeInUp 1s ease-out 1.2s both'
            }}>
              Applications open year-round • Rolling admissions • Next cohort starts in 3 months
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials/Success Stories */}
      <section style={{ padding: '100px 0', background: 'white' }}>
        <div className="container-custom">
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem',
            animation: 'fadeInUp 1s ease-out 0.2s both'
          }}>
            <h2 style={{
              fontSize: '3rem',
              fontFamily: 'Merriweather, serif',
              color: 'var(--color-primary)',
              marginBottom: '1rem'
            }}>
              💬 Fellow Voices
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: 'var(--color-text-secondary)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Hear from current and former Fellows about their transformative journey
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2.5rem'
          }}>
            {[
              {
                name: 'Priya Sharma',
                role: '2022 Fellow, Rajasthan',
                quote: 'The Fellowship didn\'t just change my students\' lives—it transformed me into a leader I never knew I could be.',
                impact: 'Improved math scores by 40% in her school',
                animation: 'slideInFromLeft 1s ease-out 0.4s both'
              },
              {
                name: 'Arjun Patel',
                role: '2021 Fellow, Gujarat',
                quote: 'Teaching in a government school showed me the power of believing in every child\'s potential.',
                impact: 'Started coding club reaching 200+ students',
                animation: 'fadeInUp 1s ease-out 0.6s both'
              },
              {
                name: 'Kavya Reddy',
                role: '2023 Fellow, Telangana',
                quote: 'Two years of Fellowship taught me more about leadership than any MBA program could.',
                impact: 'Led district-wide teacher training program',
                animation: 'slideInFromRight 1s ease-out 0.8s both'
              }
            ].map((testimonial, index) => (
              <div key={index} style={{
                background: 'var(--color-warm-gray)',
                padding: '2.5rem',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                position: 'relative',
                animation: testimonial.animation
              }}>
                <div style={{
                  fontSize: '3rem',
                  color: 'var(--color-accent)',
                  position: 'absolute',
                  top: '10px',
                  left: '20px',
                  opacity: 0.3
                }}>❝</div>
                
                <p style={{
                  fontSize: '1.2rem',
                  fontStyle: 'italic',
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.7,
                  marginBottom: '1.5rem',
                  paddingTop: '1rem'
                }}>
                  {testimonial.quote}
                </p>
                
                <div style={{
                  borderTop: '2px solid var(--color-accent)',
                  paddingTop: '1.5rem'
                }}>
                  <div style={{
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    color: 'var(--color-primary)',
                    marginBottom: '0.5rem'
                  }}>
                    {testimonial.name}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'var(--color-text-secondary)',
                    marginBottom: '1rem'
                  }}>
                    {testimonial.role}
                  </div>
                  <div style={{
                    background: 'var(--color-secondary)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '15px',
                    fontSize: '0.85rem',
                    textAlign: 'center'
                  }}>
                    🎯 {testimonial.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
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
        
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: '1fr 1fr'"] {
            grid-template-columns: 1fr !important;
          }
          
          .fellowship-responsive {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
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
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <SafeHeader />
          <main style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<SafeHome />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/fellowship" element={<FellowshipPage />} />
              <Route path="/stories" element={<StoriesPage />} />
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
