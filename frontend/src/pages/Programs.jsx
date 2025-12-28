import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import bannerImage from '/src/assets/IMG_1493.HEIC.jpg';

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

const Programs = () => {
  const navigate = useNavigate();

  const programs = [
    {
      icon: '⚙️',
      title: 'STEM & Robotics',
      description: 'Building tomorrow\'s problem solvers through hands-on science and technology',
      sectionId: 'stem-innovation'
    },
    {
      icon: '🤖',
      title: 'Coding',
      description: 'Empowering young minds to create, program, and innovate',
      sectionId: 'coding'
    },
    {
      icon: '🌍',
      title: 'Global Languages',
      description: 'Opening doors to worldwide opportunities through multilingual fluency',
      sectionId: 'global-languages'
    },
    {
      icon: '🎤',
      title: 'Public Speaking & Leadership',
      description: 'Developing confident voices that will lead the next generation',
      sectionId: 'public-speaking-leadership'
    },
    {
      icon: '🧘',
      title: 'Yoga & Well-being',
      description: 'Nurturing mental health and physical wellness for holistic growth',
      sectionId: 'yoga-wellbeing'
    },
    {
      icon: '🚀',
      title: 'Entrepreneurship',
      description: 'Inspiring young entrepreneurs to turn dreams into reality',
      sectionId: 'entrepreneurship'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Our Programs - Zikshana Global Foundation</title>
        <meta name="description" content="Discover our transformative programs in STEM, coding, robotics, languages, leadership, wellness, and entrepreneurship." />
      </Helmet>

      <style>
        {`
          @keyframes bannerZoom {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.1);
            }
          }
        `}
      </style>

      {/* Hero Banner */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          animation: 'bannerZoom 20s ease-in-out infinite alternate',
          filter: 'contrast(1.3) saturate(1.2) sepia(0.35) brightness(1.1) hue-rotate(-5deg)',
          zIndex: 0
        }} />

        {/* Warm Vintage Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.25) 0%, rgba(200, 120, 60, 0.15) 100%)',
          mixBlendMode: 'multiply',
          zIndex: 1,
          pointerEvents: 'none'
        }} />

        {/* Additional Warm Glow */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at center, rgba(5, 5, 5, 0.15) 0%, transparent 70%)',
          mixBlendMode: 'screen',
          zIndex: 1,
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          textAlign: 'center',
          width: '90%',
          maxWidth: '1000px',
          padding: '2rem'
        }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            lineHeight: 1.3,
            fontWeight: 900,
            fontFamily: 'Merriweather, serif',
            color: 'white',
            textShadow: '4px 4px 8px rgba(0, 0, 0, 0.9), 2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6)',
            marginBottom: '1rem',
            letterSpacing: '0.5px'
          }}>
            "Empower Students with Skills for the 21st Century"
          </h1>
          <div style={{
            width: '120px',
            height: '4px',
            background: 'linear-gradient(90deg, #fbbf24, #f59e0b)',
            margin: '1.5rem auto',
            borderRadius: '2px',
            boxShadow: '0 4px 12px rgba(251, 191, 36, 0.8), 0 2px 6px rgba(0, 0, 0, 0.4)'
          }} />
          <p style={{
            fontSize: 'clamp(1.9rem, 2vw, 1.5rem)',
            lineHeight: 1.7,
            fontWeight: 400,
            color: 'white',
            textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9), 1px 1px 3px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.5)',
            maxWidth: '800px',
            margin: '0 auto',
            letterSpacing: '0.3px'
          }}>
            Through our innovative teaching approach
          </p>
        </div>
      </section>

      {/* Programs Section - The Pillars of Transformation */}
<section style={{
          padding: '100px 0',
          background: 'white'
        }}>
          <div className="container-custom">
            <ScrollReveal>
              <h2
      style={{
        fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
        fontFamily: "Merriweather, serif",
        textAlign: "center",
        marginBottom: "4rem",
        textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
      }}
    >
      Future-Ready Curriculum
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
                  title: 'STEM & Robotics',
                  description: 'Hands-on science and technology projects that solve real-world problems',
                  color: '#3730a3',
                  hoverColor: '#92400e',
                  sectionId: 'stem-innovation'
                },
                {
                  icon: '🤖',
                  title: 'Coding & ',
                  description: 'Programming and robotics that turn students into creators and innovators',
                  color: '#4c1d95',
                  hoverColor: '#7c2d12',
                  sectionId: 'coding-robotics'
                },
                {
                  icon: '🌍',
                  title: 'Global Languages',
                  description: 'Multilingual fluency that opens doors to worldwide opportunities',
                  color: '#9a3412',
                  hoverColor: '#3730a3',
                  sectionId: 'global-languages'
                },
                {
                  icon: '🎤',
                  title: 'Leadership',
                  description: 'Public speaking and leadership skills that build confident voices',
                  color: '#7c2d12',
                  hoverColor: '#4c1d95',
                  sectionId: 'public-speaking-leadership'
                },
                {
                  icon: '🧘',
                  title: 'Well-being',
                  description: 'Mental health and wellness programs for holistic development',
                  color: '#3730a3',
                  hoverColor: '#92400e',
                  sectionId: 'yoga-wellbeing'
                },
                {
                  icon: '🚀',
                  title: 'Entrepreneurship',
                  description: 'Business skills and startup mentality that creates job makers, not job seekers',
                  color: '#4c1d95',
                  hoverColor: '#7c2d12',
                  sectionId: 'entrepreneurship'
                }
              ].map((program, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div
                    className="card"
                    onClick={() => scrollToSection(program.sectionId)}
                    style={{
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



      {/* Detailed Program Sections */}
      {/* STEM & Innovation */}

      <section id="stem-innovation" style={{
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
            top: '-5px',
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
            bottom: '-5px',
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
              
               <div style={{
                              backgroundImage: `url("${bannerImage}")`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              height: '500px',
                              borderRadius: '15px',
                              boxShadow: '0 15px 40px rgba(0,0,0,0.3)'
                            }} />
            
           
            {/* Right - Content */}
            <div>
              <h2 style={{
                  fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                  fontFamily: 'Merriweather, serif',
                  fontWeight: 700,
                  marginBottom: '2rem',
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  textShadow: '2px 2px 4px rgba(6, 6, 6, 0.7)'
                }}>
                "STEM & Innovation"
              </h2>
              <p style={{
                fontSize: '1.3rem',
                lineHeight: 1.6,
                color: '#e0e3eaff',
                marginBottom: '1.5rem'
              }}>
                Building tomorrow's problem solvers through hands-on science and technology.
                Our STEM program encourages students to explore, experiment, and innovate with
                cutting-edge tools and methodologies. From robotics to environmental science,
                students engage in real-world projects that foster critical thinking and creativity.
              </p>
              <ul style={{
                fontSize: '1rem',
                lineHeight: 1.8,
                color: '#f3f7ffff',
                listStyle: 'none',
                padding: 0
              }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ Hands-on experiments and projects</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Real-world problem solving</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Collaboration with industry experts</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Innovation labs and maker spaces</li>
              </ul>
            </div>
             
            </div>
          </div>
        </section>

      {/* Coding & Robotics */}
     < section id="coding-robotics" style={{
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
            top: '-5px',
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
            bottom: '-5px',
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
              
             
            
           
            {/* Right - Content */}
            <div>
              <h2 style={{
                  fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                  fontFamily: 'Merriweather, serif',
                  fontWeight: 700,
                  marginBottom: '2rem',
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  textShadow: '2px 2px 4px rgba(6, 6, 6, 0.7)'
                }}>
                 "Coding & Robotics"
              </h2>
              <p style={{
                fontSize: '1.3rem',
                lineHeight: 1.6,
                color: '#e0e3eaff',
                marginBottom: '1.5rem'
              }}>
                Empowering young minds to create, program, and innovate in the digital age.
                Students learn programming languages, computational thinking, and robotics through
                interactive projects. Our curriculum covers everything from basic coding concepts
                to advanced AI and machine learning applications.
              </p>
              <ul style={{
                fontSize: '1rem',
                lineHeight: 1.8,
                color: '#f3f7ffff',
                listStyle: 'none',
                padding: 0
              }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ Python, JavaScript, and Scratch programming</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Robotics competitions and challenges</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Game development and app creation</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ AI and machine learning basics</li>
              </ul>
            </div>
              <div style={{
                              backgroundImage: `url("${bannerImage}")`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              height: '500px',
                              borderRadius: '15px',
                              boxShadow: '0 15px 40px rgba(0,0,0,0.3)'
                            }} />
             
            </div>
          </div>
        </section>


      {/* Global Languages */}
       <section id="global-languages" style={{
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
            top: '-5px',
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
            bottom: '-5px',
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
              
               <div style={{
                              backgroundImage: `url("${bannerImage}")`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              height: '500px',
                              borderRadius: '15px',
                              boxShadow: '0 15px 40px rgba(0,0,0,0.3)'
                            }} />
            
           
            {/* Right - Content */}
            <div>
              <h2 style={{
                  fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                  fontFamily: 'Merriweather, serif',
                  fontWeight: 700,
                  marginBottom: '2rem',
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  textShadow: '2px 2px 4px rgba(6, 6, 6, 0.7)'
                }}>
                "Global Languages"
              </h2>
              <p style={{
                fontSize: '1.3rem',
                lineHeight: 1.6,
                color: '#e0e3eaff',
                marginBottom: '1.5rem'
              }}>
                Opening doors to worldwide opportunities through multilingual fluency.
                Students develop proficiency in multiple languages through immersive learning
                experiences, cultural exchange programs, and practical communication skills.
                We focus on languages that open global career opportunities.
              </p>
              <ul style={{
                fontSize: '1rem',
                lineHeight: 1.8,
                color: '#f3f7ffff',
                listStyle: 'none',
                padding: 0
              }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ English, Spanish, French, Mandarin</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Cultural immersion activities</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ International collaboration projects</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Professional communication skills</li>
              </ul>
            </div>
             
            </div>
          </div>
        </section>


      {/* Public Speaking & Leadership */}
      < section id="public-speaking-leadership" style={{
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
            top: '-5px',
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
            bottom: '-5px',
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
              
             
            
           
            {/* Right - Content */}
            <div>
              <h2 style={{
                  fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                  fontFamily: 'Merriweather, serif',
                  fontWeight: 700,
                  marginBottom: '2rem',
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  textShadow: '2px 2px 4px rgba(6, 6, 6, 0.7)'
                }}>
                 "Public Speaking & Leadership"
              </h2>
              <p style={{
                fontSize: '1.3rem',
                lineHeight: 1.6,
                color: '#e0e3eaff',
                marginBottom: '1.5rem'
              }}>
                Developing confident voices that will lead the next generation. Through debate
                clubs, presentations, and leadership workshops, students build communication
                skills, confidence, and the ability to inspire others. Our program prepares
                students to become change-makers in their communities.
              </p>
              <ul style={{
                fontSize: '1rem',
                lineHeight: 1.8,
                color: '#f3f7ffff',
                listStyle: 'none',
                padding: 0
              }}>
                 <li style={{ marginBottom: '0.5rem' }}>✓ Debate and public speaking clubs</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Leadership development workshops</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Community service projects</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Mentorship and team building</li>
              </ul>
            </div>
              <div style={{
                              backgroundImage: `url("${bannerImage}")`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              height: '500px',
                              borderRadius: '15px',
                              boxShadow: '0 15px 40px rgba(0,0,0,0.3)'
                            }} />
             
            </div>
          </div>
        </section>

     

      {/* Yoga & Well-being */}
      <section id="yoga-wellbeing" style={{
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
            top: '-5px',
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
            bottom: '-5px',
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
              
               <div style={{
                              backgroundImage: `url("${bannerImage}")`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              height: '500px',
                              borderRadius: '15px',
                              boxShadow: '0 15px 40px rgba(0,0,0,0.3)'
                            }} />
            
           
            {/* Right - Content */}
            <div>
              <h2 style={{
                  fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                  fontFamily: 'Merriweather, serif',
                  fontWeight: 700,
                  marginBottom: '2rem',
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  textShadow: '2px 2px 4px rgba(6, 6, 6, 0.7)'
                }}>
                "Yoga & Well-being"
              </h2>
              <p style={{
                fontSize: '1.3rem',
                lineHeight: 1.6,
                color: '#e0e3eaff',
                marginBottom: '1.5rem'
              }}>
                Nurturing mental health and physical wellness for holistic growth. Our wellness
                program integrates yoga, mindfulness, nutrition education, and mental health
                support. Students learn to manage stress, build resilience, and maintain a
                healthy lifestyle in today's fast-paced world.
              </p>
              <ul style={{
                fontSize: '1rem',
                lineHeight: 1.8,
                color: '#f3f7ffff',
                listStyle: 'none',
                padding: 0
              }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ Daily yoga and meditation sessions</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Mental health awareness workshops</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Nutrition and healthy lifestyle education</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Stress management techniques</li>
              </ul>
            </div>
             
            </div>
          </div>
        </section>


      {/* Entrepreneurship */}


       < section id="entrepreneurship" style={{
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
            top: '-5px',
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
            bottom: '-5px',
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
              
             
            
           
            {/* Right - Content */}
            <div>
              <h2 style={{
                  fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                  fontFamily: 'Merriweather, serif',
                  fontWeight: 700,
                  marginBottom: '2rem',
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  textShadow: '2px 2px 4px rgba(6, 6, 6, 0.7)'
                }}>
                 "Entrepreneurship"
              </h2>
              <p style={{
                fontSize: '1.3rem',
                lineHeight: 1.6,
                color: '#e0e3eaff',
                marginBottom: '1.5rem'
              }}>
                Inspiring young entrepreneurs to turn dreams into reality. Students learn business
                fundamentals, financial literacy, innovation, and how to launch their own ventures.
                Through mentorship from successful entrepreneurs and hands-on projects, students
                develop the mindset and skills to create opportunities rather than just seeking them.
              </p>
              <ul style={{
                fontSize: '1rem',
                lineHeight: 1.8,
                color: '#f3f7ffff',
                listStyle: 'none',
                padding: 0
              }}>
                 <li style={{ marginBottom: '0.5rem' }}>✓ Business plan development</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Financial literacy and management</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Startup incubation programs</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Mentorship from industry leaders</li>
              </ul>
            </div>
              <div style={{
                              backgroundImage: `url("${bannerImage}")`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              height: '500px',
                              borderRadius: '15px',
                              boxShadow: '0 15px 40px rgba(0,0,0,0.3)'
                            }} />
             
            </div>
          </div>
        </section>
     

      {/* How We Make a Difference */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              color: '#7c3aed',
              marginBottom: '1rem',
              fontFamily: 'Merriweather, serif',
              fontSize: 'clamp(2rem, 3vw, 2.5rem)'
            }}>
              How We Make a Difference
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
              Our comprehensive approach tackles the root causes of poverty and inequality
            </p>
          </div>

          
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
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
            <button style={{
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
              color: '#1f2937',
              border: 'none',
              padding: '14px 28px',
              borderRadius: '25px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '1.1rem'
            }}
            onClick={() => navigate('/donate')}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 8px 25px rgba(251,191,36,0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = 'none';
            }}>
              Donate Now
            </button>
            <button style={{
              background: 'transparent',
              border: '2px solid white',
              color: 'white',
              padding: '14px 28px',
              borderRadius: '25px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '1.1rem'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'white';
              e.target.style.color = '#7c3aed';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'white';
            }}>
              Volunteer Us
            </button>
            <button style={{
              background: 'transparent',
              border: '2px solid white',
              color: 'white',
              padding: '14px 28px',
              borderRadius: '25px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '1.1rem'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'white';
              e.target.style.color = '#7c3aed';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'white';
            }}>
              Team Up
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
