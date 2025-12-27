import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

// Import assets
import roboticsBannerImage from '/src/assets/20240121_134436.jpg';
import storyImage1 from '/src/assets/20250208_124056.jpg';
import storyImage2 from '/src/assets/20250303_111004.jpg';
import storyImage3 from '/src/assets/pexels-swastikarora-18012459.jpg';
import storyImage4 from '/src/assets/20250214_092458.jpg';
import storyImage5 from '/src/assets/20250214_094653.jpg';

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

const Stories = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const openStoryModal = (story) => {
    setSelectedStory(story);
  };

  const closeStoryModal = () => {
    setSelectedStory(null);
  };

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
          minHeight: '100vh',
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
                <Link to="/donate" style={{ textDecoration: 'none' }}>
                  <button className="btn-donate" style={{
                    fontSize: '1.1rem',
                    padding: '16px 32px',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    letterSpacing: '0.5px'
                  }}>
                    Donate Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Stories Section */}
        <section style={{ padding: '60px 0', background: '#f9fafb' }}>
            
          <div className="container-custom">
            {/* Introduction */}
            <ScrollReveal>

            </ScrollReveal>
            <ScrollReveal>
              <div style={{
                position: 'relative',
                textAlign: 'center',
                marginBottom: '4rem',
                padding: '3rem 2rem',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.05) 0%, rgba(79, 70, 229, 0.08) 50%, rgba(234, 88, 12, 0.05) 100%)',
                boxShadow: '0 4px 20px rgba(124, 58, 237, 0.1)',
                border: '1px solid rgba(124, 58, 237, 0.1)',
                overflow: 'hidden'
              }}>
                {/* Decorative elements */}
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '-30px',
                  left: '-30px',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(234, 88, 12, 0.15) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }} />

                {/* Quote mark */}
                

                <p style={{
                  fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                  fontFamily: 'Merriweather, serif',
                  color: '#1f2937',
                  lineHeight: 1.8,
                  maxWidth: '900px',
                  margin: '0 auto',
                  fontWeight: 400,
                  position: 'relative',
                  zIndex: 1,
                  textAlign: 'center'
                }}>
                  Welcome to the heart of the <span style={{
                    background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 600
                  }}>Zikshana Global Foundation</span> mission. Every story here is a testament to the power of equitable education and the boundless potential within every child. Our comprehensive programs focus on coding, STEM, and foundational literacy, working not just with students but with teachers and parents to ignite lasting change. Explore all nine of our powerful impact stories below and see how we are building dreams and breaking barriers with code.
                </p>

                {/* Bottom decorative line */}
                <div style={{
                  width: '80px',
                  height: '4px',
                  background: 'linear-gradient(90deg, transparent 0%, #7c3aed 50%, transparent 100%)',
                  margin: '2rem auto 0',
                  borderRadius: '2px'
                }} />
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div style={{
                textAlign: 'center',
                marginBottom: '3rem'
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
            </ScrollReveal>

            {/* Stories Grid - Compact Layout */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              {[
                {
                  image: storyImage1,
                  category: 'Student Success',
                  categoryColor: '#7c3aed',
                  title: 'From Zero to Coding Hero',
                  description: 'Priya never touched a computer before. Today, she builds apps that solve real problems in her community.',
                  fullStory: 'Priya lived in a small Karnataka village, far removed from the digital world, having never touched a computer until she was 14. When Zikshana Fellows arrived at her school, she was hesitant, believing technology was out of reach. Driven by curiosity and the support of her mentors, Priya quickly mastered Python and app design fundamentals. Identifying a key challenge in her community—lack of real-time agricultural data—Priya designed and published her first mobile app. This app provides local farmers with crucial, up-to-the-minute information on crop prices and weather patterns. At just 16, Priya transformed from a beginner into a "Coding Hero," using her skills to make a tangible, economic difference in her village. Her journey proves that access and opportunity can unleash immense, localized innovation.',
                  icon: '👩‍💻',
                  impact: 'First App Published'
                },
                {
                  image: storyImage2,
                  category: 'Student Success',
                  categoryColor: '#ea580c',
                  title: 'Building Robots, Building Dreams',
                  description: 'Students designed and built robots that won national competitions, proving their skill in STEM.',
                  fullStory: 'For students like Ravi, the introduction of the Zikshana STEM and Robotics curriculum was a pivotal moment. Moving beyond textbooks, the students engaged directly with hardware, circuits, and programming. Despite limited infrastructure, the students collaborated intensively, learning to code microcontrollers and design hardware solutions. Ravi and his team successfully engineered an autonomous line-following robot. Their hard work and intricate coding were recognized when they won a national-level robotics competition. This victory was not just a win for the school it validated the students competence in complex technical fields and solidified their dreams of pursuing careers in engineering and technology. They are now building dreams, one robot at a time.',
                  icon: '👨‍🏫',
                  impact: '200+ Lives Touched'
                },
                {
                  image: storyImage2,
                  category: 'Teacher Impact',
                  categoryColor: '#ea580c',
                  title: 'The Teacher Who Changed Everything',
                  description: 'One Zikshana Fellow transformed 200+ lives by bringing dynamic STEM education to a remote school.',
                  fullStory: 'When the Zikshana Fellow arrived at a remote school, she was faced with a typical challenge: dedicated students but a static, resource-poor curriculum. Recognizing the untapped potential, she implemented the Zikshana curriculum, replacing rote learning with dynamic, project-based STEM education. She introduced interactive tools, coding logic games, and hands-on science experiments. Her infectious passion and innovative teaching methods revitalized the entire school. Attendance soared, and over 200 students began actively engaging with technology, science, and math in a meaningful way for the first time. She didn\'t just teach the syllabus; she redefined what education meant in that community, demonstrating that a single, committed teacher can indeed Change Everything.',
                  icon: '👨‍🏫',
                  impact: '200+ Lives Touched'
                },
                {
                  image: storyImage3,
                  category: 'Community Empowerment',
                  categoryColor: '#dc2626',
                  title: 'A Village United by Learning',
                  description: 'The entire village united around the program, achieving 100% student enrollment and lasting change.',
                  fullStory: 'The Zikshana team understood that lasting educational impact requires more than just equipping a classroom; it requires community buy-in. In Chandrapur, they launched a massive outreach effort, meeting with parents, elders, and local leaders. They patiently explained how digital literacy was essential for the children’s future and the village’s economic prosperity. This sustained effort paid off dramatically: the community rallied together, providing space, volunteering time for supervision, and creating a collective system to ensure every single child attended the classes. This unity resulted in 100% student enrollment and a village-wide transformation where education is now prioritized and championed by everyone.',
                  icon: '🏘️',
                  impact: 'Entire Village Transformed'
                },
        
                {
                  image: storyImage5,
                  category: 'Student Transformation',
                  categoryColor: '#059669',
                  title: 'The Girl Who Found Her Voice',
                  description: 'Ananya overcame shyness, gaining confidence and leadership through mastering code.',
                  fullStory: 'Ananya was intelligent but crippled by shyness; her silence in the classroom often masked her remarkable potential. When she entered the Zikshana coding program, her mentor focused less on public speaking and more on her logical aptitude for programming. As Ananya tackled complex coding puzzles, she realized that the success of her code was an undeniable form of communication. Her mastery of Python and C++ gave her an innate authority that transcended her shyness. Soon, she was the class\'s technical expert, confidently leading small group troubleshooting sessions. Coding became the powerful language through which Ananya found her voice and leadership skills, transforming her into a confident advocate for digital literacy among her peers.',
                  icon: '🎯',
                  impact: 'Teaching 50+ Girls'
                },
                {
                  image: storyImage3,
                  category: 'Student Success',
                  categoryColor: '#7c3aed',
                  title: 'Breaking Barriers with Code',
                  description: 'Despite limited resources, students like Meera became peer mentors, ensuring everyone learns to code.',
                  fullStory: 'Resource scarcity—limited computers and unreliable power—is a major challenge in many schools. Meera, however, refused to let these obstacles define her learning. After quickly mastering the Zikshana curriculum, she realized that the most effective way to overcome the lack of resources was through collaboration. Meera organized a rigorous peer-mentoring system, scheduling computer time efficiently and leading group discussions on coding logic during power outages. By sharing her knowledge and skills, Meera and her peers ensured that every student in the program, regardless of their starting point or resource access, had the opportunity to learn. Her initiative became a model for Breaking Barriers with Code, fostering a powerful, inclusive learning environment sustained by student leadership.',
                  icon: '💪',
                  impact: 'Mentoring 30+ Students'
                },
                {
                  image: storyImage2,
                  category: 'Community Impact',
                  categoryColor: '#4338ca',
                  title: 'Parents Who Believed',
                  description: 'Skeptical parents became fierce advocates after seeing their children\'s success and confidence grow.',
                  fullStory: 'The concept of children spending time learning code—when farming or manual labor seemed more practical—was met with initial skepticism by many parents. The Zikshana team addressed this not through persuasion, but through visible results. They hosted open house sessions where students demonstrated their apps (like inventory trackers for local shops) and their new problem-solving skills. Witnessing their children, often first-generation learners, confidently navigating technology and presenting sophisticated solutions was a revelation. Skepticism quickly turned into pride and fierce advocacy. These parents became the program’s greatest champions, ensuring their children had the time and encouragement at home to pursue their digital education, creating a powerful supportive foundation for student success.',
                  icon: '👨‍👩‍👧‍👦',
                  impact: 'Community Support'
                },
                
                {
                  image: storyImage3,
                  category: 'Student Success',
                  categoryColor: '#7c3aed',
                  title: 'Parental Workshops',
                  description: 'Our workshops equip parents with the tools to actively support their child\'s digital education journey at home.',
                  fullStory: 'Resource scarcity—limited computers and unreliable power—is a major challenge in many schools. Meera, however, refused to let these obstacles define her learning. After quickly mastering the Zikshana curriculum, she realized that the most effective way to overcome the lack of resources was through collaboration. Meera organized a rigorous peer-mentoring system, scheduling computer time efficiently and leading group discussions on coding logic during power outages. By sharing her knowledge and skills, Meera and her peers ensured that every student in the program, regardless of their starting point or resource access, had the opportunity to learn. Her initiative became a model for Breaking Barriers with Code, fostering a powerful, inclusive learning environment sustained by student leadership.',
                  icon: '👨‍👩‍👧‍👦',
                  impact: 'Community Support'
                }
              ].map((story, index) => (
                <ScrollReveal key={index} delay={index * 0.05} direction="up">
                  <div style={{
                    background: 'white',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                  }}
                  onClick={() => openStoryModal(story)}>
                    {/* Image with gradient overlay */}
                    <div style={{
                      position: 'relative',
                      height: '240px',
                      overflow: 'hidden'
                    }}>
                      <img
                        src={story.image}
                        alt={story.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 100%)`
                      }} />

                      {/* Category Badge */}
                      <div style={{
                        position: 'absolute',
                        top: '15px',
                        left: '15px',
                        background: story.categoryColor,
                        color: 'white',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                      }}>
                        {story.category}
                      </div>

                      {/* Impact Badge */}
                      <div style={{
                        position: 'absolute',
                        bottom: '15px',
                        right: '15px',
                        background: 'rgba(255,255,255,0.95)',
                        color: story.categoryColor,
                        padding: '8px 12px',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                      }}>
                        {story.impact}
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{
                      padding: '1.5rem',
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        marginBottom: '1rem'
                      }}>
                        <div style={{
                          fontSize: '2rem',
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                        }}>
                          {story.icon}
                        </div>
                        <h3 style={{
                          fontSize: '1.25rem',
                          fontFamily: 'Merriweather, serif',
                          color: '#1f2937',
                          fontWeight: 700,
                          lineHeight: 1.3,
                          flex: 1
                        }}>
                          {story.title}
                        </h3>
                      </div>

                      <p style={{
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        color: '#4b5563',
                        flex: 1
                      }}>
                        {story.description}
                      </p>

                      {/* Read Full Story Link */}
                      <div style={{
                        marginTop: '1rem',
                        paddingTop: '1rem',
                        borderTop: '1px solid #e5e7eb'
                      }}>
                        <span style={{
                          color: story.categoryColor,
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          cursor: 'pointer'
                        }}>
                          Read Full Story
                          <span style={{
                            transition: 'transform 0.3s ease',
                            display: 'inline-block'
                          }}>→</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Story Modal */}
            {selectedStory && (
              <div
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 9999,
                  padding: '2rem',
                  animation: 'fadeIn 0.3s ease-in'
                }}
                onClick={closeStoryModal}
              >
                <div
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '24px',
                    maxWidth: '800px',
                    width: '100%',
                    maxHeight: '90vh',
                    overflow: 'hidden',
                    position: 'relative',
                    animation: 'slideUp 0.4s ease-out',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={closeStoryModal}
                    style={{
                      position: 'absolute',
                      top: '1.5rem',
                      right: '1.5rem',
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
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    ×
                  </button>

                  {/* Modal Header with Image */}
                  <div style={{
                    position: 'relative',
                    height: '250px',
                    overflow: 'hidden',
                    borderRadius: '24px 24px 0 0'
                  }}>
                    <img
                      src={selectedStory.image}
                      alt={selectedStory.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)`
                    }} />

                    {/* Category Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '1.5rem',
                      left: '1.5rem',
                      background: selectedStory.categoryColor,
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                    }}>
                      {selectedStory.category}
                    </div>

                    {/* Title at Bottom */}
                    <div style={{
                      position: 'absolute',
                      bottom: '1.5rem',
                      left: '1.5rem',
                      right: '1.5rem'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '0.5rem'
                      }}>
                        <div style={{
                          fontSize: '2.5rem',
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
                        }}>
                          {selectedStory.icon}
                        </div>
                        <h2 style={{
                          fontSize: '1.8rem',
                          fontFamily: 'Merriweather, serif',
                          color: 'white',
                          fontWeight: 700,
                          textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                          margin: 0
                        }}>
                          {selectedStory.title}
                        </h2>
                      </div>
                      <div style={{
                        background: 'rgba(255,255,255,0.95)',
                        color: selectedStory.categoryColor,
                        padding: '6px 12px',
                        borderRadius: '12px',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        display: 'inline-block',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                      }}>
                        {selectedStory.impact}
                      </div>
                    </div>
                  </div>

                  {/* Modal Content - Scrollable */}
                  <div style={{
                    padding: '2rem',
                    overflowY: 'auto',
                    flex: 1
                  }}>
                    <p style={{
                      fontSize: '1.05rem',
                      lineHeight: 1.9,
                      color: '#374151',
                      marginBottom: '1.5rem',
                      fontWeight: 500
                    }}>
                      {selectedStory.description}
                    </p>

                    <div style={{
                      borderTop: '2px solid #e5e7eb',
                      paddingTop: '1.5rem'
                    }}>
                      <h3 style={{
                        fontSize: '1.3rem',
                        fontFamily: 'Merriweather, serif',
                        color: selectedStory.categoryColor,
                        marginBottom: '1rem',
                        fontWeight: 700
                      }}>
                        The Full Story
                      </h3>
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: 1.8,
                        color: '#4b5563',
                        whiteSpace: 'pre-line'
                      }}>
                        {selectedStory.fullStory}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @media (max-width: 768px) {
            /* Responsive grid for stories */
            div[style*="gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'"] {
              grid-template-columns: 1fr !important;
            }
          }

          @media (max-width: 480px) {
            /* Single column on mobile */
            div[style*="gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </>
  )
}

export default Stories