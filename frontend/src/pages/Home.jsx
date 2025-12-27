import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'

// Import assets
import heroBannerImage from '/src/assets/20250214_094653.jpg';
import heroBannerImage2 from '/src/assets/20250208_124056.jpg';
import heroBannerImage3 from '/src/assets/pexels-swastikarora-18012463.jpg';
import heroBannerImage4 from '/src/assets/20250214_092458.jpg';
import northStarImage from '/src/assets/20250303_111004.jpg';

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

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const startValue = 0;

          const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(startValue + (end - startValue) * easeOutQuart);

            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return <span ref={counterRef}>{count.toLocaleString()}{suffix}</span>;
};

const Home = () => {
  // Image carousel state
  const carouselImages = [heroBannerImage2, heroBannerImage3, heroBannerImage4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Donation modal state
  const [showDonateModal, setShowDonateModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Show donation modal on first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    if (!hasVisited) {
      // Show modal after 8 seconds delay
      const timer = setTimeout(() => {
        setShowDonateModal(true);
        localStorage.setItem('hasVisitedBefore', 'true');
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closeDonateModal = () => {
    setShowDonateModal(false);
  };

  return (
    <>
      <Helmet>
        <title>Zikshana Global Foundation - Building Future Changemakers</title>
        <meta name="description" content="One day all children will build the future they dream of. Join Zikshana in transforming education through skills, creativity, and leadership—not just grades." />
        <meta name="keywords" content="education, skills, STEM, coding, robotics, leadership, entrepreneurship, students, future" />
      </Helmet>

      <style>
        {`
          @keyframes slowZoomIn {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.1);
            }
          }
        `}
      </style>

      {/* Donation Modal */}
      {showDonateModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            animation: 'fadeIn 0.3s ease-in',
            padding: '1rem'
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              maxWidth: '600px',
              width: '100%',
              overflow: 'hidden',
              position: 'relative',
              animation: 'slideUp 0.4s ease-out',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeDonateModal}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(0, 0, 0, 0.5)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                zIndex: 10,
                transition: 'all 0.3s ease',
                lineHeight: '1'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(0, 0, 0, 0.8)';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(0, 0, 0, 0.5)';
                e.target.style.transform = 'scale(1)';
              }}
            >
              ×
            </button>

            {/* Modal Image */}
            <div style={{
              width: '100%',
              height: '250px',
              backgroundImage: `linear-gradient(rgba(124, 58, 237, 0.3), rgba(124, 58, 237, 0.3)), url(${northStarImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <h2 style={{
                color: 'white',
                fontSize: '2.5rem',
                fontWeight: 'bold',
                textAlign: 'center',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                padding: '0 2rem'
              }}>
                Help Us Transform Lives
              </h2>
            </div>

            {/* Modal Content */}
            <div style={{
              padding: '2.5rem',
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: '1.2rem',
                color: '#333',
                marginBottom: '1.5rem',
                lineHeight: '1.8'
              }}>
                Your donation empowers students with essential 21st-century skills,
                transforming lives and building future changemakers.
              </p>

              <p style={{
                fontSize: '1rem',
                color: '#666',
                marginBottom: '2rem',
                fontStyle: 'italic'
              }}>
                Every contribution makes a difference in shaping tomorrow's leaders.
              </p>

              {/* Donate Button */}
              <Link
                to="/donate"
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
                  color: 'white',
                  padding: '1rem 3rem',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(124, 58, 237, 0.4)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(124, 58, 237, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(124, 58, 237, 0.4)';
                }}
              >
                Donate Now
              </Link>

              <p style={{
                marginTop: '1.5rem',
                fontSize: '0.9rem',
                color: '#999'
              }}>
                Thank you for supporting our mission! 💜
              </p>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <div>
        {/* Hero Section - Stories Banner */}
        <section style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Animated Background Layer */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${heroBannerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            animation: 'slowZoomIn 20s ease-out infinite alternate',
            zIndex: 0
          }} />
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
                <Link to="/donate" style={{ textDecoration: 'none' }}>
                  <button className="btn-donate" style={{
                    fontSize: '1.1rem',
                    padding: '16px 32px',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    letterSpacing: '0.5px'
                  }}>
                    DONATE NOW
                  </button>
                </Link>
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
            <ScrollReveal>
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
            </ScrollReveal>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '3rem',
              marginBottom: '3rem'
            }}>
              <ScrollReveal delay={0.1}>
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
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
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
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
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
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.4}>
              <p style={{
                fontSize: '1.3rem',
                lineHeight: 1.6,
                color: '#374151',
                fontStyle: 'italic'
              }}>
                Traditional classrooms prepare students for a world that no longer exists.
                We're changing that.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* WHY WE EXIST */}
        <section style={{
          padding: '100px 0',
          background: 'linear-gradient(135deg, #4c1d95 0%, #5b21b6 25%, #c2410c 75%, #9a3412 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 25s ease-in-out infinite',
          minHeight: '400px',
          color: 'white',
          position: 'relative'
        }}>
          {/* Top Smoke Blend Effect - Enhanced */}
          <div style={{
            position: 'absolute',
            top: '-10px',
            left: 0,
            right: 0,
            height: '200px',
            background: `
              radial-gradient(ellipse 100% 120% at 15% -20%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 30%, transparent 80%),
              radial-gradient(ellipse 90% 110% at 45% -15%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 35%, transparent 85%),
              radial-gradient(ellipse 100% 120% at 75% -20%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.75) 30%, transparent 80%),
              radial-gradient(ellipse 85% 100% at 30% -10%, rgba(255,255,255,0.9) 0%, transparent 75%),
              radial-gradient(ellipse 85% 100% at 65% -10%, rgba(255,255,255,0.85) 0%, transparent 75%),
              linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.5) 40%, rgba(255,255,255,0.2) 70%, transparent 100%)
            `,
            pointerEvents: 'none',
            zIndex: 1,
            filter: 'blur(2px)'
          }} />

          {/* Bottom Smoke Blend Effect - Enhanced */}
          <div style={{
            position: 'absolute',
            bottom: '-10px',
            left: 0,
            right: 0,
            height: '200px',
            background: `
              radial-gradient(ellipse 100% 120% at 20% 120%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 30%, transparent 80%),
              radial-gradient(ellipse 90% 110% at 50% 115%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 35%, transparent 85%),
              radial-gradient(ellipse 100% 120% at 80% 120%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.75) 30%, transparent 80%),
              radial-gradient(ellipse 85% 100% at 35% 110%, rgba(255,255,255,0.9) 0%, transparent 75%),
              radial-gradient(ellipse 85% 100% at 70% 110%, rgba(255,255,255,0.85) 0%, transparent 75%),
              linear-gradient(to top, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.5) 40%, rgba(255,255,255,0.2) 70%, transparent 100%)
            `,
            pointerEvents: 'none',
            zIndex: 1,
            filter: 'blur(2px)'
          }} />
          <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '4rem',
              alignItems: 'center'
            }}>
              <div>
                <ScrollReveal direction="right">
                  <h2 style={{
                    fontSize: 'clamp(3rem, 3vw, 2.5rem)',
                    fontFamily: 'Merriweather, serif',
                    fontWeight: 700,
                    marginBottom: '2rem',
                    color: 'white',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    textShadow: '2px 2px 4px rgba(6, 6, 6, 0.7)'
                  }}>
                    Why We Exist
                  </h2>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.2}>
                  <p style={{
                    fontSize: '1.6rem',
                    lineHeight: 1.4,
                    color: 'white',
                    marginBottom: '2rem',
                    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)',
                    fontWeight: 500
                  }}>
                    "In a rapidly changing world, education must evolve beyond textbooks and tests.
                    Children need skills that prepare them to thrive, not just survive."
                  </p>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.4}>
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
                </ScrollReveal>
              </div>

              <ScrollReveal direction="left" delay={0.2}>
                <div style={{
                  backgroundImage: `url(${carouselImages[currentImageIndex]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '400px',
                  borderRadius: '15px',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                  transition: 'background-image 0.5s ease-in-out'
                }} />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* OUR NORTH STAR */}
        <section style={{
          padding: '100px 0',
          background: 'linear-gradient(135deg, #4c1d95 0%, #5b21b6 25%, #c2410c 75%, #9a3412 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 19s ease-in-out infinite',
          minHeight: '600px',
          color: 'white',
          position: 'relative'
        }}>
          {/* Top Smoke Blend Effect - Enhanced */}
          <div style={{
            position: 'absolute',
            top: '-10px',
            left: 0,
            right: 0,
            height: '200px',
            background: `
              radial-gradient(ellipse 100% 120% at 15% -20%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 30%, transparent 80%),
              radial-gradient(ellipse 90% 110% at 45% -15%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 35%, transparent 85%),
              radial-gradient(ellipse 100% 120% at 75% -20%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.75) 30%, transparent 80%),
              radial-gradient(ellipse 85% 100% at 30% -10%, rgba(255,255,255,0.9) 0%, transparent 75%),
              radial-gradient(ellipse 85% 100% at 65% -10%, rgba(255,255,255,0.85) 0%, transparent 75%),
              linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.5) 40%, rgba(255,255,255,0.2) 70%, transparent 100%)
            `,
            pointerEvents: 'none',
            zIndex: 1,
            filter: 'blur(2px)'
          }} />

          {/* Bottom Smoke Blend Effect - Enhanced */}
          <div style={{
            position: 'absolute',
            bottom: '-10px',
            left: 0,
            right: 0,
            height: '200px',
            background: `
              radial-gradient(ellipse 100% 120% at 20% 120%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 30%, transparent 80%),
              radial-gradient(ellipse 90% 110% at 50% 115%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 35%, transparent 85%),
              radial-gradient(ellipse 100% 120% at 80% 120%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.75) 30%, transparent 80%),
              radial-gradient(ellipse 85% 100% at 35% 110%, rgba(255,255,255,0.9) 0%, transparent 75%),
              radial-gradient(ellipse 85% 100% at 70% 110%, rgba(255,255,255,0.85) 0%, transparent 75%),
              linear-gradient(to top, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.5) 40%, rgba(255,255,255,0.2) 70%, transparent 100%)
            `,
            pointerEvents: 'none',
            zIndex: 1,
            filter: 'blur(2px)'
          }} />
          <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '4rem',
              alignItems: 'center'
            }}>
              {/* Left side - Image */}
              <ScrollReveal direction="right" delay={0.2}>
                <div style={{
                  backgroundImage: `url("${northStarImage}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '500px',
                  borderRadius: '15px',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.3)'
                }} />
              </ScrollReveal>

              {/* Right side - Content */}
              <div>
                <ScrollReveal direction="left">
                  <h2 style={{
                    fontSize: 'clamp(3rem, 3vw, 9.5rem)',
                    fontFamily: 'Merriweather, serif',
                    fontWeight: 700,
                    marginBottom: '2rem',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: 'white',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
                  }}>
                    Our North Star
                  </h2>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={0.2}>
                  <h3 style={{
                    fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                    fontFamily: 'Merriweather, serif',
                    fontWeight: 700,
                    lineHeight: 1.3,
                    marginBottom: '2rem',
                    color: 'white',
                    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)'
                  }}>
                    "One day all children will design the future instead of just surviving it."
                  </h3>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={0.4}>
                  <p style={{
                    fontSize: '1.2rem',
                    lineHeight: 1.7,
                    color: 'rgba(255, 255, 255, 0.95)',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
                  }}>
                    This is our vision. This is what drives us every single day.
                    Join us in making it a reality.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section style={{
          padding: '100px 0',
          background: 'white'
        }}>
          <div className="container-custom">
            <ScrollReveal>
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
            </ScrollReveal>

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
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="card" style={{
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
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* THE POWER OF OUR MOVEMENT */}
        <section style={{
          padding: '100px 0',
          background: 'white',
          color: '#1f2937',
          textAlign: 'center'
        }}>
          <div className="container-custom">
            <ScrollReveal>
              <h2 style={{
                fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                fontFamily: 'Merriweather, serif',
                fontWeight: 700,
                marginBottom: '4rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#4c1d95'
              }}>
                The Power of Our Movement
              </h2>
            </ScrollReveal>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '3rem',
              marginBottom: '4rem'
            }}>
              <ScrollReveal delay={0.1}>
                <div>
                  <div style={{
                    fontSize: '4rem',
                    fontWeight: 700,
                    color: '#c2410c',
                    marginBottom: '1rem'
                  }}>
                    <AnimatedCounter end={5000} duration={2500} suffix="+" />
                  </div>
                  <p style={{ fontSize: '1.2rem', color: '#6b7280' }}>
                    Students Directly Impacted
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div>
                  <div style={{
                    fontSize: '4rem',
                    fontWeight: 700,
                    color: '#c2410c',
                    marginBottom: '1rem'
                  }}>
                    <AnimatedCounter end={150} duration={2000} suffix="+" />
                  </div>
                  <p style={{ fontSize: '1.2rem', color: '#6b7280' }}>
                    Schools Transformed
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div>
                  <div style={{
                    fontSize: '4rem',
                    fontWeight: 700,
                    color: '#c2410c',
                    marginBottom: '1rem'
                  }}>
                    <AnimatedCounter end={50} duration={1500} suffix="+" />
                  </div>
                  <p style={{ fontSize: '1.2rem', color: '#6b7280' }}>
                    Cities Reached
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.4}>
              <div style={{
                fontSize: '1.8rem',
                fontWeight: 600,
                lineHeight: 1.4,
                maxWidth: '700px',
                margin: '0 auto 3rem auto',
                textAlign: 'center',
                color: '#1f2937'
              }}>
                5,000+ students today are discovering the courage to dream, create, and lead.
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <blockquote style={{
                fontSize: '1.5rem',
                fontStyle: 'italic',
                lineHeight: 1.5,
                maxWidth: '600px',
                margin: '0 auto',
                color: '#191e25ff'
              }}>
                "When you transform education, you don't just change a student's future—you rewrite society's destiny."
              </blockquote>
            </ScrollReveal>
          </div>
        </section>

        

        {/* GET INVOLVED */}
        <section style={{
          padding: '100px 0',
          background: 'white'
        }}>
          <div className="container-custom">
            <ScrollReveal>
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
            </ScrollReveal>

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
                  color: '#7c3aed',
                  link: '/fellowship'
                },
                {
                  icon: '🤝',
                  title: 'Partner with Us',
                  description: 'Collaborate with Zikshana to scale educational transformation',
                  cta: 'PARTNER',
                  color: '#fbbf24',
                  link: '/contact'
                },
                {
                  icon: '💝',
                  title: 'Support Our Mission',
                  description: 'Fund the future by supporting skill-based education initiatives',
                  cta: 'DONATE',
                  color: '#7c3aed',
                  link: '/donate'
                }
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.15}>
                  <div className="card" style={{
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
                  <Link to={item.link} style={{ textDecoration: 'none' }}>
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
                  </Link>
                </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home