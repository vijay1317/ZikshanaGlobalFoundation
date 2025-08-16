import React from 'react'
import { Helmet } from 'react-helmet-async'

// Import assets
import roboticsBannerImage from '/src/assets/20240121_134436.jpg';

const Stories = () => {
  return (
    <>
      <Helmet>
        <title>Stories of Change - Zikshana Global Foundation</title>
        <meta name="description" content="Inspiring stories of transformation from students who are building the future they dream of through Zikshana's programs." />
        <meta name="keywords" content="stories, change, transformation, students, STEM, coding, robotics, success" />
      </Helmet>

      <div>
        {/* Hero Section - Stories Banner */}
        <section style={{
          backgroundImage: `url(${roboticsBannerImage})`,
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
            maxWidth: '800px'
          }}>
            {/* Hero Text */}
            <div>
              <h1 style={{
                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                fontFamily: 'Merriweather, serif',
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: '2rem',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                color: 'white'
              }}>
                Stories of Change
              </h1>
              
              <p style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                lineHeight: 1.4,
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)',
                fontWeight: 400,
                fontStyle: 'italic',
                marginBottom: '3rem'
              }}>
                "From the girl who thought technology wasn't for her, now building her first robot…"
              </p>
              
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
                  Read More Stories
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Stories Section */}
        <section style={{ padding: '100px 0', background: 'white' }}>
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
                color: '#4c1d95',
                marginBottom: '1rem'
              }}>
                Transforming Lives, One Story at a Time
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#374151',
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
                  background: 'linear-gradient(135deg, rgba(76, 29, 149, 0.8) 0%, rgba(194, 65, 12, 0.6) 100%), url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
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
                    color: '#9a3412',
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
                    color: '#4c1d95',
                    marginBottom: '1.5rem',
                    lineHeight: 1.3
                  }}>
                    From a Small Town to a World of Opportunity
                  </h3>
                  <p style={{
                    fontSize: '1.2rem',
                    lineHeight: 1.8,
                    color: '#374151',
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
                      background: 'linear-gradient(135deg, #4c1d95 0%, #c2410c 100%)',
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
                        color: '#4c1d95'
                      }}>
                        Future Software Engineer
                      </div>
                      <div style={{
                        fontSize: '0.9rem',
                        color: '#6b7280'
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
                    color: '#c2410c',
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
                    color: '#c2410c',
                    marginBottom: '1.5rem',
                    lineHeight: 1.3
                  }}>
                    The One Who Believed in Them
                  </h3>
                  <p style={{
                    fontSize: '1.2rem',
                    lineHeight: 1.8,
                    color: '#374151',
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
                      background: 'linear-gradient(135deg, #c2410c 0%, #9a3412 100%)',
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
                        color: '#c2410c'
                      }}>
                        Zikshana Fellow
                      </div>
                      <div style={{
                        fontSize: '0.9rem',
                        color: '#6b7280'
                      }}>
                        Igniting minds, building leaders
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Section - Right */}
                <div style={{
                  background: 'linear-gradient(135deg, rgba(194, 65, 12, 0.8) 0%, rgba(154, 52, 18, 0.6) 100%), url("https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
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
              background: 'linear-gradient(135deg, #4c1d95 0%, #c2410c 100%)',
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
          background: 'linear-gradient(135deg, #9a3412 0%, #4c1d95 100%)',
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
                color: '#4c1d95',
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
              text-shadow: 0 0 20px rgba(255,255,255,0.8), 0 0 30px rgba(76, 29, 149, 0.3);
            }
          }
          
          @media (max-width: 768px) {
            div[style*="gridTemplateColumns: '1fr 1fr'"] {
              grid-template-columns: 1fr !important;
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
    </>
  )
}

export default Stories