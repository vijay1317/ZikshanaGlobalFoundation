import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

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
      <div className="container-custom" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 20px',
        minHeight: '70px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}>
            Z
          </div>
          <div>
            <h1 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'var(--color-primary)',
              margin: 0,
              fontFamily: 'Merriweather, serif'
            }}>
              <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                Zikshana Global Foundation
              </a>
            </h1>
            <p style={{
              fontSize: '0.8rem',
              color: 'var(--color-text-secondary)',
              margin: 0
            }}>Empowering Communities, Transforming Lives</p>
          </div>
        </div>
        
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[
              { name: 'About Us', path: '/about' },
              { name: 'Programs', path: '/programs' },
              { name: 'Get Involved', path: '/get-involved' },
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
      <div style={{ padding: '20px', backgroundColor: '#333', color: 'white', textAlign: 'center' }}>
        <p>&copy; 2024 Zikshana Global Foundation</p>
      </div>
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
    {/* Hero Section - CRY Style */}
    <section 
      style={{
        background: 'linear-gradient(135deg, rgba(230, 81, 0, 0.9) 0%, rgba(46, 125, 50, 0.8) 100%), url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        position: 'relative'
      }}
    >
      <div className="container-custom" style={{zIndex: 2, textAlign: 'center'}}>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
          marginBottom: '1.5rem',
          fontFamily: 'Merriweather, serif',
          fontWeight: 700,
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          Let's ensure <em style={{fontStyle: 'italic', color: 'var(--color-accent)'}}>happy communities</em><br />
          for India's underserved
        </h1>
        <p style={{ 
          fontSize: '1.3rem', 
          marginBottom: '2.5rem',
          maxWidth: '600px',
          margin: '0 auto 2.5rem',
          opacity: 0.95
        }}>
          Together, we can create lasting change through education, healthcare, 
          community development, and women empowerment.
        </p>
        <button 
          className="btn-donate"
          style={{
            background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%)',
            color: 'white',
            padding: '18px 40px',
            borderRadius: '50px',
            fontWeight: 700,
            fontSize: '18px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(245, 127, 23, 0.4)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-3px)'
            e.target.style.boxShadow = '0 8px 25px rgba(245, 127, 23, 0.6)'
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = '0 6px 20px rgba(245, 127, 23, 0.4)'
          }}
        >
          Yes! I want to Help!
        </button>
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

// Animated About Us Page
const AboutUsPage = () => {
  return (
    <div style={{ background: 'var(--color-warm-gray)' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(230, 81, 0, 0.9) 0%, rgba(46, 125, 50, 0.8) 100%), url("https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container-custom">
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            marginBottom: '1.5rem',
            fontFamily: 'Merriweather, serif',
            fontWeight: 700,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            animation: 'fadeInUp 1s ease-out'
          }}>
            About <em style={{ color: 'var(--color-accent)' }}>Zikshana Global Foundation</em>
          </h1>
          <p style={{
            fontSize: '1.3rem',
            maxWidth: '800px',
            margin: '0 auto',
            opacity: 0.95,
            animation: 'fadeInUp 1s ease-out 0.3s both'
          }}>
            We believe education is more than a right—it's the most powerful tool for change.
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
            <p style={{
              fontSize: '1.3rem',
              lineHeight: 1.8,
              color: 'var(--color-text-primary)',
              textAlign: 'center',
              fontWeight: 500
            }}>
              At Zikshana Global Foundation, we believe education is more than a right—it's the most powerful tool for change. 
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
                background: 'linear-gradient(135deg, rgba(230, 81, 0, 0.8) 0%, rgba(46, 125, 50, 0.6) 100%), url("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
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
                  <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>💻</div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontFamily: 'Merriweather, serif',
                    fontWeight: 700
                  }}>
                    From Zero to Code
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
        
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: '1fr 1fr'"] {
            grid-template-columns: 1fr !important;
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
