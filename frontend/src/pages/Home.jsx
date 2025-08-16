import React from 'react';
import { Helmet } from 'react-helmet-async'

// Import assets
import heroBannerImage from '/src/assets/pexels-swastikarora-18012459.jpg';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Zikshana Global Foundation - Building Future Changemakers</title>
        <meta name="description" content="One day all children will build the future they dream of. Join Zikshana in transforming education through skills, creativity, and leadership—not just grades." />
        <meta name="keywords" content="education, skills, STEM, coding, robotics, leadership, entrepreneurship, students, future" />
      </Helmet>

      <div>
        {/* Hero Section - Stories Banner */}
        <section style={{
          backgroundImage: `url(${heroBannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          position: 'relative'
        }}>
          {/* Dark overlay for text readability */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)',
            zIndex: 1
          }} />
          
          <div className="container-custom" style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '600px'
          }}>
            {/* Hero Text */}
            <div>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 4vw, 3.8rem)',
                fontFamily: 'Merriweather, serif',
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: '3rem',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                color: 'white'
              }}>
One day all children will build the future they dream of
              </h1>
              
              <div style={{
                display: 'flex',
                gap: '1.5rem',
                flexWrap: 'wrap'
              }}>
                <button className="btn-donate" style={{
                  fontSize: '1.1rem',
                  padding: '16px 32px',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  letterSpacing: '0.5px'
                }}>
                  DONATE NOW
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* THE EDUCATION CRISIS */}
        <section style={{
          padding: '100px 0',
          background: 'white'
        }}>
          <div className="container-custom" style={{ maxWidth: '900px', textAlign: 'center' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 3vw, 2.5rem)',
              fontFamily: 'Merriweather, serif',
              fontWeight: 700,
              marginBottom: '3rem',
              color: '#1f2937',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              The Education Crisis
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '3rem',
              marginBottom: '3rem'
            }}>
              <div>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: '#7c3aed',
                  marginBottom: '0.5rem'
                }}>70%</div>
                <p style={{ fontSize: '1.1rem', color: '#374151' }}>
                  of students lack essential skills for the 21st century
                </p>
              </div>
              <div>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: '#7c3aed',
                  marginBottom: '0.5rem'
                }}>80%</div>
                <p style={{ fontSize: '1.1rem', color: '#374151' }}>
                  graduate without real-world problem-solving abilities
                </p>
              </div>
              <div>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: '#7c3aed',
                  marginBottom: '0.5rem'
                }}>90%</div>
                <p style={{ fontSize: '1.1rem', color: '#374151' }}>
                  never experience hands-on learning in STEM
                </p>
              </div>
            </div>
            
            <p style={{
              fontSize: '1.3rem',
              lineHeight: 1.6,
              color: '#374151',
              fontStyle: 'italic'
            }}>
              Traditional classrooms prepare students for a world that no longer exists. 
              We're changing that.
            </p>
          </div>
        </section>

        {/* WHY WE EXIST */}
        <section style={{
          padding: '100px 0',
          background: 'linear-gradient(135deg, #4c1d95 0%, #5b21b6 25%, #c2410c 75%, #9a3412 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 8s ease-in-out infinite',
          minHeight: '600px',
          color: 'white',
          position: 'relative'
        }}>
          <div className="container-custom">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '4rem',
              alignItems: 'center'
            }}>
              <div>
                <h2 style={{
                  fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                  fontFamily: 'Merriweather, serif',
                  fontWeight: 700,
                  marginBottom: '2rem',
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
                }}>
                  Why We Exist
                </h2>
                
                <p style={{
                  fontSize: '1.2rem',
                  lineHeight: 1.7,
                  color: 'white',
                  marginBottom: '2rem',
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)',
                  fontWeight: 500
                }}>
                  In a rapidly changing world, education must evolve beyond textbooks and tests. 
                  Children need skills that prepare them to thrive, not just survive.
                </p>
                
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)',
                  fontWeight: 400
                }}>
                  We bridge the gap between classroom learning and real-world readiness through 
                  hands-on experiences in technology, leadership, and global citizenship.
                </p>
              </div>
              
              <div style={{
                backgroundImage: `url(${heroBannerImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px',
                borderRadius: '15px',
                boxShadow: '0 15px 40px rgba(0,0,0,0.1)'
              }} />
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section style={{
          padding: '100px 0',
          background: 'white'
        }}>
          <div className="container-custom">
            <h2 style={{
              fontSize: 'clamp(2rem, 3vw, 2.5rem)',
              fontFamily: 'Merriweather, serif',
              fontWeight: 700,
              marginBottom: '4rem',
              color: '#1f2937',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              textAlign: 'center'
            }}>
              What We Do
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: 'repeat(2, 1fr)',
              gap: '2rem',
              maxWidth: '1200px',
              margin: '0 auto',
              '@media (max-width: 768px)': {
                gridTemplateColumns: '1fr',
                gridTemplateRows: 'repeat(6, 1fr)'
              }
            }}>
              {[
                {
                  icon: '⚙️',
                  title: 'STEM & Innovation',
                  description: 'Hands-on science and technology projects that solve real-world problems',
                  color: '#3730a3',
                  hoverColor: '#92400e'
                },
                {
                  icon: '🤖',
                  title: 'Coding & Robotics',
                  description: 'Programming and robotics that turn students into creators and innovators',
                  color: '#4c1d95',
                  hoverColor: '#7c2d12'
                },
                {
                  icon: '🌍',
                  title: 'Global Languages',
                  description: 'Multilingual fluency that opens doors to worldwide opportunities',
                  color: '#9a3412',
                  hoverColor: '#3730a3'
                },
                {
                  icon: '🎤',
                  title: 'Leadership',
                  description: 'Public speaking and leadership skills that build confident voices',
                  color: '#7c2d12',
                  hoverColor: '#4c1d95'
                },
                {
                  icon: '🧘',
                  title: 'Well-being',
                  description: 'Mental health and wellness programs for holistic development',
                  color: '#3730a3',
                  hoverColor: '#92400e'
                },
                {
                  icon: '🚀',
                  title: 'Entrepreneurship',
                  description: 'Business skills and startup mentality that creates job makers, not job seekers',
                  color: '#4c1d95',
                  hoverColor: '#7c2d12'
                }
              ].map((program, index) => (
                <div key={index} className="card" style={{
                  padding: '2.5rem',
                  textAlign: 'center',
                  border: 'none',
                  borderRadius: '15px',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  background: `linear-gradient(135deg, ${program.color} 0%, ${program.hoverColor} 100%)`,
                  color: 'white',
                  transform: 'translateY(0) scale(1)',
                  boxShadow: `0 10px 30px ${program.color}40`
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-25px) scale(1.08) rotateY(5deg)';
                  e.currentTarget.style.boxShadow = `0 35px 80px ${program.color}60`;
                  e.currentTarget.style.background = `linear-gradient(135deg, ${program.hoverColor} 0%, ${program.color} 100%)`;
                  e.currentTarget.style.filter = 'brightness(1.1)';
                  
                  // Animate the icon based on program type
                  const icon = e.currentTarget.querySelector('.program-icon');
                  if (icon) {
                    icon.style.transition = 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                    icon.style.filter = 'drop-shadow(0 5px 15px rgba(0,0,0,0.3))';
                    
                    // Different animations for different icons
                    if (program.title === 'STEM & Innovation') {
                      // Spinning gear animation
                      icon.style.transform = '';
                      icon.style.animation = 'spin 2s linear infinite';
                    } else if (program.title === 'Coding & Robotics') {
                      // Robot stays as current animation
                      icon.style.transform = 'scale(1.4) rotate(15deg) translateY(-5px)';
                    } else if (program.title === 'Global Languages') {
                      // Earth spinning animation
                      icon.style.transform = '';
                      icon.style.animation = 'earthSpin 3s linear infinite';
                    } else if (program.title === 'Entrepreneurship') {
                      // Rocket normal animation
                      icon.style.transform = 'scale(1.4) rotate(15deg) translateY(-5px)';
                    } else {
                      // Default animation for other icons
                      icon.style.transform = 'scale(1.4) rotate(15deg) translateY(-5px)';
                    }
                  }
                  
                  // Animate the title
                  const title = e.currentTarget.querySelector('.program-title');
                  if (title) {
                    title.style.transform = 'translateY(-3px) scale(1.05)';
                    title.style.textShadow = '0 3px 10px rgba(0,0,0,0.3)';
                  }
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
                  e.currentTarget.style.boxShadow = `0 10px 30px ${program.color}40`;
                  e.currentTarget.style.background = `linear-gradient(135deg, ${program.color} 0%, ${program.hoverColor} 100%)`;
                  e.currentTarget.style.filter = 'brightness(1)';
                  
                  // Reset icon animation
                  const icon = e.currentTarget.querySelector('.program-icon');
                  if (icon) {
                    icon.style.transform = 'scale(1) rotate(0deg) translateY(0px)';
                    icon.style.filter = 'none';
                    icon.style.animation = 'none';
                  }
                  
                  // Reset title
                  const title = e.currentTarget.querySelector('.program-title');
                  if (title) {
                    title.style.transform = 'translateY(0) scale(1)';
                    title.style.textShadow = 'none';
                  }
                }}>
                  {/* Background gradient on hover */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${program.color}05 0%, ${program.color}10 100%)`,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    pointerEvents: 'none'
                  }} className="card-bg" />
                  
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <div className="program-icon" style={{ 
                      fontSize: '3.5rem', 
                      marginBottom: '1.5rem',
                      transition: 'all 0.3s ease',
                      display: 'inline-block'
                    }}>
                      {program.icon}
                    </div>
                    <h3 className="program-title" style={{
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      marginBottom: '1rem',
                      color: 'white',
                      transition: 'all 0.3s ease'
                    }}>
                      {program.title}
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      color: 'rgba(255, 255, 255, 0.9)'
                    }}>
                      {program.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE POWER OF OUR MOVEMENT */}
        <section style={{
          padding: '100px 0',
          background: 'linear-gradient(135deg, #4c1d95 0%, #5b21b6 50%, #c2410c 100%)',
          color: 'white',
          textAlign: 'center'
        }}>
          <div className="container-custom">
            <h2 style={{
              fontSize: 'clamp(2rem, 3vw, 2.5rem)',
              fontFamily: 'Merriweather, serif',
              fontWeight: 700,
              marginBottom: '4rem',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: 'white',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
            }}>
              The Power of Our Movement
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '3rem',
              marginBottom: '4rem'
            }}>
              <div>
                <div style={{
                  fontSize: '4rem',
                  fontWeight: 700,
                  color: '#fbbf24',
                  marginBottom: '1rem',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
                }}>5,000+</div>
                <p style={{ fontSize: '1.2rem', color: 'white', opacity: 0.9 }}>
                  Students Directly Impacted
                </p>
              </div>
              <div>
                <div style={{
                  fontSize: '4rem',
                  fontWeight: 700,
                  color: '#fbbf24',
                  marginBottom: '1rem',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
                }}>150+</div>
                <p style={{ fontSize: '1.2rem', color: 'white', opacity: 0.9 }}>
                  Schools Transformed
                </p>
              </div>
              <div>
                <div style={{
                  fontSize: '4rem',
                  fontWeight: 700,
                  color: '#fbbf24',
                  marginBottom: '1rem',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
                }}>50+</div>
                <p style={{ fontSize: '1.2rem', color: 'white', opacity: 0.9 }}>
                  Cities Reached
                </p>
              </div>
            </div>
            
            <div style={{
              fontSize: '1.8rem',
              fontWeight: 600,
              lineHeight: 1.4,
              maxWidth: '700px',
              margin: '0 auto 3rem auto',
              textAlign: 'center',
              color: 'white',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)'
            }}>
              5,000+ students today are discovering the courage to dream, create, and lead.
            </div>
            
            <blockquote style={{
              fontSize: '1.5rem',
              fontStyle: 'italic',
              lineHeight: 1.5,
              maxWidth: '600px',
              margin: '0 auto',
              color: 'rgba(255, 255, 255, 0.95)',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)'
            }}>
              "When you transform education, you don't just change a student's future—you rewrite society's destiny."
            </blockquote>
          </div>
        </section>

        {/* OUR NORTH STAR */}
        <section style={{
          padding: '100px 0',
          background: 'white',
          color: '#1f2937',
          textAlign: 'center'
        }}>
          <div className="container-custom" style={{ maxWidth: '800px' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 3vw, 2.5rem)',
              fontFamily: 'Merriweather, serif',
              fontWeight: 700,
              marginBottom: '3rem',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: '#4c1d95'
            }}>
              Our North Star
            </h2>
            
            <h3 style={{
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontFamily: 'Merriweather, serif',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '2rem',
              color: '#1f2937'
            }}>
              One day all children will design the future instead of just surviving it.
            </h3>
            
            <p style={{
              fontSize: '1.3rem',
              lineHeight: 1.6,
              color: '#6b7280'
            }}>
              This is our vision. This is what drives us every single day. 
              Join us in making it a reality.
            </p>
          </div>
        </section>

        {/* GET INVOLVED */}
        <section style={{
          padding: '100px 0',
          background: 'white'
        }}>
          <div className="container-custom">
            <h2 style={{
              fontSize: 'clamp(2rem, 3vw, 2.5rem)',
              fontFamily: 'Merriweather, serif',
              fontWeight: 700,
              marginBottom: '4rem',
              color: '#1f2937',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              textAlign: 'center'
            }}>
              Get Involved
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {[
                {
                  icon: '🎓',
                  title: 'Join as a Fellow',
                  description: 'Become a Zikshana Fellow and transform education from within classrooms',
                  cta: 'APPLY NOW',
                  color: '#7c3aed'
                },
                {
                  icon: '🤝',
                  title: 'Partner with Us',
                  description: 'Collaborate with Zikshana to scale educational transformation',
                  cta: 'PARTNER',
                  color: '#fbbf24'
                },
                {
                  icon: '💝',
                  title: 'Support Our Mission',
                  description: 'Fund the future by supporting skill-based education initiatives',
                  cta: 'DONATE',
                  color: '#7c3aed'
                }
              ].map((item, index) => (
                <div key={index} className="card" style={{
                  padding: '3rem',
                  textAlign: 'center',
                  border: `2px solid ${item.color}`,
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = `0 20px 40px ${item.color}20`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                }}>
                  <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>{item.icon}</div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    marginBottom: '1rem',
                    color: item.color
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    marginBottom: '2rem',
                    color: '#6b7280'
                  }}>
                    {item.description}
                  </p>
                  <button style={{
                    background: item.color,
                    color: 'white',
                    border: 'none',
                    padding: '12px 30px',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = `0 8px 25px ${item.color}40`;
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = 'none';
                  }}>
                    {item.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home