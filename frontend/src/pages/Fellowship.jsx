import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

// Scroll Reveal Component
const ScrollReveal = ({ children, delay = 0, direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translateY(0) translateX(0)';
    switch (direction) {
      case 'up':
        return 'translateY(60px)';
      case 'down':
        return 'translateY(-60px)';
      case 'left':
        return 'translateX(60px)';
      case 'right':
        return 'translateX(-60px)';
      default:
        return 'translateY(60px)';
    }
  };

  return (
    <div
      ref={elementRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const Fellowship = () => {
  return (
    <>
      <Helmet>
        <title>Fellowship Program - Zikshana Global Foundation</title>
        <meta name="description" content="Join the Zikshana Fellowship - a transformative two-year leadership journey in government schools across India." />
        <meta name="keywords" content="fellowship, teaching, education, leadership, social impact, government schools" />
      </Helmet>

    <div style={{ background: '#ffffff' }}>
      {/* Hero Section - Clean with Animation */}
      <section style={{
        background: '#ffffff',
        padding: '120px 20px 80px',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div className="container-custom" style={{ maxWidth: '900px', margin: '0 auto' }}>
          

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            marginBottom: '1.5rem',
            fontWeight: 300,
            color: '#2d2d2d',
            letterSpacing: '0.5px',
            lineHeight: 1.3,
            animation: 'fadeInUp 0.8s ease-out 0.2s both'
          }}>
            Zikshana Fellowship
          </h1>
          <div style={{
            width: '500px',
            height: '4px',
            background: '#a863edff',
            margin: '0 auto 2rem',
            animation: 'slideInFromLeft 0.8s ease-out'
          }}></div>

          
        </div>
      </section>

      {/* About the Fellowship - with Image */}
      <section style={{ padding: '80px 20px', background: '#ffffff', position: 'relative' }}>
        <div className="container-custom" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}>
            {/* Text Content */}
            <ScrollReveal direction="right">
              <div style={{ order: 1 }}>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: 300,
                  color: '#2d2d2d',
                  marginBottom: '2rem',
                  lineHeight: 1.4
                }}>
                  About the Programme
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: 1.9,
                  color: '#555',
                  marginBottom: '1.5rem',
                  fontWeight: 300
                }}>
                  The Zikshana Fellowship is a year-long development program designed for passionate
                  graduates who want to begin their careers in education and make a real difference
                  in K-12 learning.
                </p>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: 1.9,
                  color: '#555',
                  fontWeight: 300
                }}>
                  Fellows work hands-on in classrooms, gaining valuable experience while making a tangible
                  impact on students' lives across multiple partner schools.
                </p>
              </div>
            </ScrollReveal>

            {/* Image */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="fellowship-image-wrapper" style={{
                position: 'relative',
                order: 2
              }}>
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Fellowship Program"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '4px',
                    boxShadow: '0 4px 12px rgba(1,0,0,0.1)'
                  }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What the Fellowship Offers */}
      <section style={{ padding: '80px 20px', background: '#f9f9f9' }}>
        <div className="container-custom" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 300,
              color: '#2d2d2d',
              marginBottom: '3rem',
              textAlign: 'center',
              lineHeight: 1.4
            }}>
              What the Fellowship Offers
            </h2>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                title: 'Teach Key Skill-Based Subjects',
                description: 'English Communication, Coding, STEM, Personality Development, Foreign Languages, Yoga'
              },
              {
                title: 'Hands-On Classroom Experience',
                description: 'Work across multiple partner schools with weekly rotations for broader exposure'
              },
              {
                title: 'Student Activities & Events',
                description: 'Get involved in exhibitions, competitions, and various student activities'
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div style={{
                background: 'white',
                padding: '2.5rem',
                borderRadius: '4px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)'
                e.currentTarget.style.transform = 'translateY(-5px)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: 400,
                  color: 'var(--color-primary)',
                  marginBottom: '1rem',
                  lineHeight: 1.4
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  color: '#666',
                  margin: 0,
                  fontWeight: 300
                }}>
                  {item.description}
                </p>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section - Alternating Layout */}
      <section style={{ padding: '80px 20px', background: '#ffffff', position: 'relative' }}>
        <div className="container-custom" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}>
            {/* Image - Now on Left */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="fellowship-image-wrapper" style={{
                position: 'relative',
                order: 2
              }}>
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Why Join Fellowship"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '4px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                />
              </div>
            </ScrollReveal>

            {/* Text Content - Now on Right */}
            <ScrollReveal direction="left">
              <div style={{ order: 1 }}>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: 300,
                  color: '#2d2d2d',
                  marginBottom: '2rem',
                  lineHeight: 1.4
                }}>
                  Why Join
                </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  {
                    title: 'Structured Training',
                    description: 'Receive comprehensive training in teaching methods, communication skills, and leadership development.'
                  },
                  {
                    title: 'Expert Mentorship',
                    description: 'Learn from experienced educators who guide and support your professional journey.'
                  },
                  {
                    title: 'Continuous Development',
                    description: 'Access ongoing professional development opportunities to enhance your skills and expertise.'
                  },
                  {
                    title: 'Career Opportunities',
                    description: 'Open doors to roles in training, academic coordination, and EdTech after fellowship completion.'
                  }
                ].map((item, index) => (
                  <div key={index} style={{
                    borderLeft: '3px solid var(--color-primary)',
                    paddingLeft: '1.5rem'
                  }}>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: 400,
                      color: '#2d2d2d',
                      marginBottom: '0.5rem',
                      lineHeight: 1.4
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: 1.8,
                      color: '#666',
                      margin: 0,
                      fontWeight: 300
                    }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Who We Seek - Clean Design */}
      <section style={{ padding: '80px 20px', background: '#f9f9f9' }}>
        <div className="container-custom" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 300,
              color: '#2d2d2d',
              marginBottom: '3rem',
              textAlign: 'center',
              lineHeight: 1.4
            }}>
              Who We Seek
            </h2>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {[
              {
                title: 'Passionate',
                description: 'Driven by purpose and committed to making a difference'
              },
              {
                title: 'Adaptable',
                description: 'Flexible and resilient in diverse environments'
              },
              {
                title: 'Inspiring',
                description: 'Natural ability to motivate and encourage others'
              },
              {
                title: 'Committed',
                description: 'Dedicated to seeing the mission through completion'
              }
            ].map((quality, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '4px',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)'
                e.currentTarget.style.transform = 'translateY(-5px)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: 400,
                  color: 'var(--color-primary)',
                  marginBottom: '0.8rem'
                }}>
                  {quality.title}
                </h4>
                <p style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: '#666',
                  margin: 0,
                  fontWeight: 300
                }}>
                  {quality.description}
                </p>
              </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Who Can Apply */}
         
          <section style={{ padding: '80px 20px', background: '#ffffff', position: 'relative' }}>
          <div className="container-custom" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}>
            {/* Image - Now on Left */}
            <div className="fellowship-image-wrapper" style={{
              position: 'relative',
              order: 2
            }}>
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Why Join Fellowship"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '4px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              />
            </div>

            {/* Text Content - Now on Right */}
            <ScrollReveal direction="left">
              <div style={{ order: 1 }}>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: 300,
                  color: '#2d2d2d',
                  marginBottom: '2rem',
                  lineHeight: 1.4
                }}>
                  Who Can Apply
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  {
                    title: 'Graduates from any discipline',
                
                  },
                  {
                    title: 'Strong communication and interpersonal skills',
                 
                  },
                  {
                    title: 'Genuine interest in student development',
                   
                  },
                  {
                    title: 'Willingness to travel within assigned school clusters',
                   
                  }
                ].map((item, index) => (
                  <div key={index} style={{
                    borderLeft: '3px solid var(--color-primary)',
                    paddingLeft: '1.5rem'
                  }}>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: 400,
                      color: '#2d2d2d',
                      marginBottom: '0.5rem',
                      lineHeight: 1.4
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: 1.8,
                      color: '#666',
                      margin: 0,
                      fontWeight: 300
                    }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

        </div>
      </section>

      {/* Apply For The Zikshana Fellowship */}
      <section style={{ padding: '80px 20px', background: '#ffffff' }}>
        <div className="container-custom" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 300,
              color: '#2d2d2d',
              marginBottom: '2rem',
              textAlign: 'center',
              lineHeight: 1.4
            }}>
              Apply For The Zikshana Fellowship
            </h2>
          </ScrollReveal>

          <div style={{
            background: '#f9f9f9',
            borderRadius: '4px',
            padding: '3rem',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.9,
              color: '#555',
              marginBottom: '2rem',
              fontWeight: 300
            }}>
              If you'd like to apply for the Zikshana fellowship program, just send your updated resume to
            </p>

            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '4px',
              marginBottom: '2rem',
              border: '1px solid #e0e0e0'
            }}>
              <a href="mailto:hr@zikshana.com" style={{
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--color-primary)',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => {
                e.target.style.color = 'var(--color-secondary)'
              }}
              onMouseOut={(e) => {
                e.target.style.color = 'var(--color-primary)'
              }}>
                hr@zikshana.com
              </a>
            </div>

            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '4px',
              border: '1px solid #e0e0e0'
            }}>
              <p style={{
                fontSize: '0.95rem',
                fontWeight: 400,
                marginBottom: '0.5rem',
                color: '#666'
              }}>
                Email Subject Line:
              </p>
              <p style={{
                fontSize: '1.1rem',
                fontWeight: 500,
                margin: 0,
                color: '#2d2d2d'
              }}>
                "Application For Zikshana Fellowship"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section style={{ padding: '80px 20px', background: '#f9f9f9' }}>
        <div className="container-custom" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 300,
              color: '#2d2d2d',
              marginBottom: '2rem',
              textAlign: 'center',
              lineHeight: 1.4
            }}>
              Impact
            </h2>
          </ScrollReveal>

          <div style={{
            background: 'white',
            borderRadius: '4px',
            padding: '3rem',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: 1.9,
              color: '#555',
              fontWeight: 300,
              margin: '0'
            }}>
              By joining the Zikshana Fellowship, you contribute directly to improving
              <strong style={{
                color: 'var(--color-primary)',
                fontWeight: 500,
                padding: '0 0.3rem'
              }}>
                skill-based education
              </strong>
              and shaping
              <strong style={{
                color: 'var(--color-secondary)',
                fontWeight: 500,
                padding: '0 0.3rem'
              }}>
                confident, future-ready students
              </strong>
              across India.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Clean Design */}
      <section style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container-custom" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 300,
            marginBottom: '1.5rem',
            lineHeight: 1.4
          }}>
            Ready to Transform Lives?
          </h2>

          <p style={{
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto 3rem',
            lineHeight: 1.8,
            fontWeight: 300
          }}>
            Join a community of dedicated educators who are reshaping India's educational landscape.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a href="mailto:hr@zikshana.com" style={{
              background: '#32373c',
              color: 'white',
              border: 'none',
              padding: '15px 40px',
              borderRadius: '9999px',
              fontSize: '1rem',
              fontWeight: 500,
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-block'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#2d2d2d'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseOut={(e) => {
              e.target.style.background = '#32373c'
              e.target.style.transform = 'translateY(0)'
            }}>
              Apply Now
            </a>
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

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
            opacity: 0.8;
          }
          25% {
            background-position: 100% 50%;
            opacity: 1;
          }
          50% {
            background-position: 100% 100%;
            opacity: 0.9;
          }
          75% {
            background-position: 50% 100%;
            opacity: 1;
          }
          100% {
            background-position: 0% 50%;
            opacity: 0.8;
          }
        }

        /* Fellowship Image Wrapper with Gradient Background */
        .fellowship-image-wrapper {
          position: relative;
          padding: 30px;
          background: linear-gradient(135deg,
            rgba(106, 13, 173, 0.8) 0%,
            rgba(124, 58, 237, 0.8) 25%,
            rgba(234, 88, 12, 0.8) 75%,
            rgba(220, 38, 38, 0.8) 100%);
          background-size: 400% 400%;
          animation: gradientShift 15s ease-in-out infinite;
        }

        .fellowship-image-wrapper img {
          position: relative;
          display: block;
          width: 100%;
          height: auto;
          border-radius: 10px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 768px) {
          section {
            padding: 60px 20px !important;
          }

          h1 {
            font-size: 2rem !important;
          }

          h2 {
            font-size: 2rem !important;
          }

          div[style*="grid"] {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          div[style*="order: 1"],
          div[style*="order: 2"] {
            order: 0 !important;
          }
        }

        @media (min-width: 769px) {
          section:nth-of-type(4) div[style*="order: 1"] {
            order: 2 !important;
          }

          section:nth-of-type(4) div[style*="order: 2"] {
            order: 1 !important;
          }
        }
      `}</style>
    </div>
    </>
  )
}

export default Fellowship;
