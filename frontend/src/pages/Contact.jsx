import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import contactBanner from '/src/assets/20250303_111623.jpg';
import facebookIcon from '/src/assets/facebook.png';
import instagramIcon from '/src/assets/instagram.png';
import twitterIcon from '/src/assets/twitter.png';
import linkedinIcon from '/src/assets/linkedin.png';
import youtubeIcon from '/src/assets/youtube.png';

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

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: '',
    message: '',
    attachment: null
  });

  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(false);

  // WhatsApp configuration
  const whatsappNumber = '919731113922'; // Zikshana's WhatsApp number
  const whatsappMessage = 'Hello Zikshana Global Foundation! I would like to know more about your programs and how I can get involved.';

  const openWhatsAppChat = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      attachment: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show loading state
    setFormStatus({
      type: 'loading',
      message: 'Sending your message...'
    });

    try {
      // Call backend API
      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          category: formData.category,
          message: formData.message
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Show success message
        setFormStatus({
          type: 'success',
          message: data.message || 'Thank you for reaching out! We will get back to you soon.'
        });

        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          category: '',
          message: '',
          attachment: null
        });

        // Clear status message after 5 seconds
        setTimeout(() => {
          setFormStatus({ type: '', message: '' });
        }, 5000);
      } else {
        throw new Error(data.message || 'Failed to send message');
      }

    } catch (error) {
      console.error('Email sending failed:', error);
      setFormStatus({
        type: 'error',
        message: error.message || 'Failed to send message. Please try again or contact us directly at info@zikshana.com'
      });

      // Clear error message after 7 seconds
      setTimeout(() => {
        setFormStatus({ type: '', message: '' });
      }, 7000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Zikshana Global Foundation</title>
        <meta name="description" content="Get in touch with Zikshana Global Foundation. Contact us for volunteering, donations, partnerships, or general inquiries." />
        <meta name="keywords" content="contact, volunteer, donate, partnership, CSR collaboration, NGO contact" />
      </Helmet>

      <style>
        {`
          @keyframes contactBannerZoom {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.1);
            }
          }

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

          @keyframes zoomInContent {
            0% {
              opacity: 0;
              transform: scale(0.3) translateY(50px);
            }
            50% {
              transform: scale(1.05) translateY(0);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          @keyframes dividerExpand {
            from {
              width: 0;
              opacity: 0;
            }
            to {
              width: 150px;
              opacity: 1;
            }
          }

          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }

          .contact-card {
            transition: all 0.3s ease;
          }

          .contact-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 40px rgba(124, 58, 237, 0.2);
          }

          .form-input {
            transition: all 0.3s ease;
          }

          .form-input:focus {
            outline: none;
            border-color: #7c3aed;
            box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
            transform: translateY(-2px);
          }

          .submit-btn {
            transition: all 0.3s ease;
          }

          .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(124, 58, 237, 0.3);
          }

          .social-icon {
            transition: all 0.3s ease;
          }

          .social-icon:hover {
            transform: translateY(-5px) scale(1.1);
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes ripple {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            100% {
              transform: scale(1.5);
              opacity: 0;
            }
          }

          .whatsapp-float {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 1000;
            animation: float 3s ease-in-out infinite;
          }

          .whatsapp-button {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 30px rgba(37, 211, 102, 0.4);
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            border: none;
          }

          .whatsapp-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 50%;
            background: #25D366;
            animation: ripple 2s infinite;
          }

          .whatsapp-button:hover {
            transform: scale(1.1);
            box-shadow: 0 12px 40px rgba(37, 211, 102, 0.6);
          }

          .whatsapp-icon {
            font-size: 2.5rem;
            position: relative;
            z-index: 1;
          }

          .whatsapp-tooltip {
            position: absolute;
            bottom: 80px;
            right: 0;
            background: white;
            padding: 1rem 1.5rem;
            border-radius: 15px;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
            white-space: nowrap;
            font-weight: 600;
            color: #1f2937;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            transform: translateY(10px);
          }

          .whatsapp-tooltip::after {
            content: '';
            position: absolute;
            bottom: -8px;
            right: 25px;
            width: 0;
            height: 0;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-top: 8px solid white;
          }

          .whatsapp-float:hover .whatsapp-tooltip {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          @media (max-width: 768px) {
            .contact-grid {
              grid-template-columns: 1fr !important;
            }

            .whatsapp-float {
              bottom: 20px;
              right: 20px;
            }

            .whatsapp-button {
              width: 60px;
              height: 60px;
            }

            .whatsapp-icon {
              font-size: 2rem;
            }
          }
        `}
      </style>

      {/* Hero Banner */}
      <section className="contact-hero" style={{
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
          backgroundImage: `url(${contactBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          animation: 'contactBannerZoom 20s ease-in-out infinite alternate',
          filter: 'brightness(1.1) contrast(1.15)',
          zIndex: 0
        }} />

        {/* Enhanced Purple Gradient Overlay with Radial Focus */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(ellipse at center, rgba(39, 32, 50, 0.25) 0%, rgba(29, 19, 48, 0.4) 50%, rgba(29, 22, 34, 0.55) 100%),
            linear-gradient(135deg, rgba(32, 31, 35, 0.35) 0%, rgba(12, 11, 12, 0.45) 40%, rgba(109, 40, 217, 0.5) 70%, rgba(88, 28, 135, 0.6) 100%)
          `,
          zIndex: 1
        }} />

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: '900px',
          padding: '0 2rem'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 900,
            fontFamily: 'Merriweather, serif',
            color: 'white',
            textShadow: '4px 4px 8px rgba(0, 0, 0, 0.8)',
            marginBottom: '1.5rem',
            letterSpacing: '1px',
            animation: 'zoomInContent 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards'
          }}>
            Let's Connect & Make a Difference
          </h1>
          <div style={{
            width: '150px',
            height: '5px',
            background: 'linear-gradient(90deg, #fbbf24, #f59e0b)',
            margin: '0 auto 2rem',
            borderRadius: '3px',
            boxShadow: '0 4px 15px rgba(251, 191, 36, 0.6)',
            animation: 'dividerExpand 1s ease-out 0.8s backwards'
          }} />
          <p style={{
            fontSize: 'clamp(1.7rem, 2vw, 1.4rem)',
            lineHeight: 1.8,
            color: 'white',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
            maxWidth: '700px',
            margin: '0 auto',
            animation: 'fadeInUp 1s ease-out 0.2s both'
          }}>
            Whether you want to volunteer, donate, partner with us, or simply learn more about our mission — we're here to listen.
          </p>
        </div>
      </section>

      

      {/* Main Contact Section */}
      <section style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #fef3c7 0%, #c794e7ff 25%, #6d4793ff 50%, #551de3ff 75%, #f59e0b 100%)',
        position: 'relative'
      }}>
        <div className="container-custom" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div className="contact-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start'
          }}>

            {/* Left Side - Contact Form */}
            <ScrollReveal direction="right">
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                animation: 'fadeInUp 0.8s ease-out'
              }}>
              <h2 style={{
                fontSize: 'clamp(1.6rem, 3vw, 2rem)',
                fontFamily: 'Merriweather, serif',
                fontWeight: 700,
                marginBottom: '0.5rem',
                color: '#1f2937',
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem'
              }}>
                <span style={{ fontSize: '2rem' }}>✉️</span>
                Get In Touch
              </h2>
              <p style={{
                fontSize: '1rem',
                color: '#6b7280',
                marginBottom: '1.5rem',
                lineHeight: 1.5
              }}>
                Fill out the form below and our team will respond within 24-48 hours.
              </p>

              {formStatus.message && (
                <div style={{
                  padding: '1rem',
                  borderRadius: '10px',
                  marginBottom: '2rem',
                  background: formStatus.type === 'success' ? '#d1fae5' : formStatus.type === 'error' ? '#fee2e2' : '#dbeafe',
                  color: formStatus.type === 'success' ? '#065f46' : formStatus.type === 'error' ? '#991b1b' : '#1e40af',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  {formStatus.type === 'loading' && <span style={{ fontSize: '1.2rem' }}>⏳</span>}
                  {formStatus.type === 'success' && <span style={{ fontSize: '1.2rem' }}>✅</span>}
                  {formStatus.type === 'error' && <span style={{ fontSize: '1.2rem' }}>❌</span>}
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.4rem',
                    fontWeight: 600,
                    color: '#374151',
                    fontSize: '0.95rem'
                  }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Enter your full name"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '10px',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                {/* Email */}
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.4rem',
                    fontWeight: 600,
                    color: '#374151',
                    fontSize: '0.95rem'
                  }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '10px',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                {/* Phone */}
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.4rem',
                    fontWeight: 600,
                    color: '#374151',
                    fontSize: '0.95rem'
                  }}>
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="+91 XXXXX XXXXX"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '10px',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                {/* Category Dropdown */}
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.4rem',
                    fontWeight: 600,
                    color: '#374151',
                    fontSize: '0.95rem'
                  }}>
                    Select Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '10px',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="">-- Choose an option --</option>
                    <option value="volunteer">Volunteer Inquiry</option>
                    <option value="donation">Donation Inquiry</option>
                    <option value="partnership">School/Community Partnership</option>
                    <option value="csr">CSR Collaboration</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                {/* Message */}
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.4rem',
                    fontWeight: 600,
                    color: '#374151',
                    fontSize: '0.95rem'
                  }}>
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Tell us how we can help you..."
                    rows="3"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '10px',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                  />
                </div>



                {/* Submit Button */}
                <button
                  type="submit"
                  className="submit-btn"
                  style={{
                    width: '100%',
                    padding: '0.9rem',
                    background: 'linear-gradient(135deg, #e98737ff 0%, #5d06e9ff 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
            </ScrollReveal>

            {/* Right Side - Contact Information */}
            <ScrollReveal direction="left" delay={0.2}>
              <div style={{
                animation: 'fadeInUp 0.8s ease-out 0.2s both'
              }}>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontFamily: 'Merriweather, serif',
                fontWeight: 700,
                marginBottom: '2rem',
                color: '#1f2937'
              }}>
                Contact Information
              </h2>

              {/* Office Address */}
              <div className="contact-card" style={{
                background: 'white',
                borderRadius: '15px',
                padding: '2rem',
                marginBottom: '2rem',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
              }}>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#7c3aed',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem'
                }}>
                  <span style={{ fontSize: '1.8rem' }}>🏢</span>
                  Registered Office
                </h3>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  color: '#4b5563'
                }}>
                  Zikshana Infotech Pvt. Ltd.<br />
                  3rd Floor Sana Eclave, No 1733, 33<br />
                  17th Cross Rd, MC Layout, Vijayanagar<br />
                  Bengaluru, Karnataka - 560040<br />
                  India
                </p>
                <a
                  href="https://maps.google.com/?q=Sana+Eclave+Vijayanagar+Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    marginTop: '1rem',
                    color: '#7c3aed',
                    fontWeight: 600,
                    textDecoration: 'none',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#6d28d9'}
                  onMouseOut={(e) => e.target.style.color = '#7c3aed'}
                >
                  📍 View on Google Maps →
                </a>
              </div>

              {/* Phone Numbers */}
              <div className="contact-card" style={{
                background: 'white',
                borderRadius: '15px',
                padding: '2rem',
                marginBottom: '2rem',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
              }}>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#7c3aed',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem'
                }}>
                  <span style={{ fontSize: '1.8rem' }}>📞</span>
                  Call Us
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <p style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '0.3rem' }}>General Helpline</p>
                    <a href="tel:+919731113922" style={{
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      color: '#1f2937',
                      textDecoration: 'none'
                    }}>
                      +91 9731113922
                    </a>
                  </div>
                </div>

                {/* WhatsApp Quick Action */}
                <div style={{
                  marginTop: '1.5rem',
                  padding: '1.2rem',
                  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                  borderRadius: '12px',
                  textAlign: 'center'
                }}>
                  <button
                    onClick={openWhatsAppChat}
                    style={{
                      width: '100%',
                      background: 'white',
                      color: '#128C7E',
                      border: 'none',
                      padding: '1rem',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.8rem',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <span style={{ fontSize: '1.5rem' }}>💬</span>
                    Chat on WhatsApp
                  </button>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="contact-card" style={{
                background: 'white',
                borderRadius: '15px',
                padding: '2rem',
                marginBottom: '2rem',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
              }}>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#7c3aed',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem'
                }}>
                  <span style={{ fontSize: '1.8rem' }}>✉️</span>
                  Email Us
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <p style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '0.3rem' }}>General Inquiries</p>
                    <a href="mailto:info@zikshana.com" style={{
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: '#1f2937',
                      textDecoration: 'none',
                      wordBreak: 'break-word',
                      display: 'block'
                    }}>
                      info@zikshana.com
                    </a>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '0.3rem' }}>HR Department</p>
                    <a href="mailto:hr@zikshana.com" style={{
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: '#1f2937',
                      textDecoration: 'none',
                      wordBreak: 'break-word',
                      display: 'block'
                    }}>
                      hr@zikshana.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="contact-card" style={{
                background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
                borderRadius: '15px',
                padding: '2rem',
                marginBottom: '2rem',
                boxShadow: '0 4px 20px rgba(124, 58, 237, 0.3)'
              }}>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem'
                }}>
                  <span style={{ fontSize: '1.8rem' }}>🕐</span>
                  Operating Hours
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  color: 'white',
                  lineHeight: 1.8,
                  fontWeight: 500
                }}>
                  Monday – Saturday<br />
                  10:00 AM – 6:00 PM IST
                </p>
                <p style={{
                  fontSize: '0.95rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginTop: '1rem',
                  fontStyle: 'italic'
                }}>
                  We typically respond within 24-48 hours
                </p>
              </div>
            </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #ddd6fe 0%, #c4b5fd 25%, #a78bfa 50%, #8b5cf6 75%, #7c3aed 100%)',
        textAlign: 'center'
      }}>
        <div className="container-custom" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontFamily: 'Merriweather, serif',
            fontWeight: 700,
            marginBottom: '1rem',
            color: '#1f2937'
          }}>
            Follow Our Journey
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#030b1cff',
            marginBottom: '3rem',
            lineHeight: 1.6
          }}>
            Stay connected with us on social media to see our latest updates, stories, and impact
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <a href="https://www.facebook.com/people/Zikshana/100064189320421/" target="_blank" rel="noopener noreferrer" className="social-icon" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.8rem',
              textDecoration: 'none',
              padding: '1.5rem',
              borderRadius: '15px',
              background: '#f9fafb',
              minWidth: '140px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #1877f2 0%, #0d65d9 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                color: 'white',
                boxShadow: '0 4px 15px rgba(24, 119, 242, 0.3)',
                overflow: 'hidden'
              }}>
                <img src={facebookIcon} alt="Facebook" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ fontWeight: 600, color: '#1f2937' }}>Facebook</span>
            </a>

            <a href="https://x.com/TeamZikshana?t=U9pf1dvPLGyoAKHExERNnw&s=08" target="_blank" rel="noopener noreferrer" className="social-icon" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.8rem',
              textDecoration: 'none',
              padding: '1.5rem',
              borderRadius: '15px',
              background: '#f9fafb',
              minWidth: '140px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #1da1f2 0%, #0d8bd9 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                color: 'white',
                boxShadow: '0 4px 15px rgba(29, 161, 242, 0.3)'
              }}>
                <img src={twitterIcon} alt="Facebook" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ fontWeight: 600, color: '#1f2937' }}>Twitter / X</span>
            </a>

            <a href="https://www.instagram.com/zikshana/" target="_blank" rel="noopener noreferrer" className="social-icon" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.8rem',
              textDecoration: 'none',
              padding: '1.5rem',
              borderRadius: '15px',
              background: '#f9fafb',
              minWidth: '140px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #f56040 0%, #c13584 50%, #833ab4 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                color: 'white',
                boxShadow: '0 4px 15px rgba(193, 53, 132, 0.3)',
                overflow: 'hidden'
              }}>
                <img src={instagramIcon} alt="Instagram" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ fontWeight: 600, color: '#1f2937' }}>Instagram</span>
            </a>

            <a href="https://www.linkedin.com/company/zikshana/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-icon" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.8rem',
              textDecoration: 'none',
              padding: '1.5rem',
              borderRadius: '15px',
              background: '#f9fafb',
              minWidth: '140px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #0077b5 0%, #005885 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                color: 'white',
                boxShadow: '0 4px 15px rgba(0, 119, 181, 0.3)'
              }}>
                <img src={linkedinIcon} alt="Facebook" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ fontWeight: 600, color: '#1f2937' }}>LinkedIn</span>
            </a>

            <a href="https://www.youtube.com/@ZIKSHANA" target="_blank" rel="noopener noreferrer" className="social-icon" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.8rem',
              textDecoration: 'none',
              padding: '1.5rem',
              borderRadius: '15px',
              background: '#f9fafb',
              minWidth: '140px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                color: 'white',
                boxShadow: '0 4px 15px rgba(255, 0, 0, 0.3)'
              }}>
                 <img src={youtubeIcon} alt="Facebook" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ fontWeight: 600, color: '#1f2937' }}>YouTube</span>
            </a>
          </div>
        </div>
      </section>

      {/* Support/Donation CTA Section */}
      <section style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #9d4a06ff 0%, #ee741dff 25%, #df5f1bff 50%, #c2410c 75%, #9a3412 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-50px',
          left: '-50px',
          width: '250px',
          height: '250px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }} />

        <div className="container-custom" style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontFamily: 'Merriweather, serif',
            fontWeight: 700,
            color: 'white',
            marginBottom: '1.5rem'
          }}>
            Want to Support Us?
          </h2>
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            color: 'rgba(255, 255, 255, 0.95)',
            marginBottom: '3rem',
            lineHeight: 1.8
          }}>
            Your contribution can transform lives and build a brighter future for children across India
          </p>
          <div style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a href="/donate" style={{
              display: 'inline-block',
              background: 'white',
              color: '#7c3aed',
              padding: '1.2rem 3rem',
              borderRadius: '50px',
              fontWeight: 700,
              fontSize: '1.2rem',
              textDecoration: 'none',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.3)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.2)';
            }}>
              ❤️ Make a Donation
            </a>
            <a href="/fellowship" style={{
              display: 'inline-block',
              background: 'transparent',
              color: 'white',
              padding: '1.2rem 3rem',
              borderRadius: '50px',
              fontWeight: 700,
              fontSize: '1.2rem',
              textDecoration: 'none',
              border: '3px solid white',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'white';
              e.target.style.color = '#7c3aed';
              e.target.style.transform = 'translateY(-5px)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(0)';
            }}>
              🤝 Become a Volunteer
            </a>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section style={{
        height: '450px',
        position: 'relative'
      }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6449203858373!2d77.53234491482238!3d12.978475390851547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8f1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sVijayanagar%2C%20Bengaluru%2C%20Karnataka%20560040!5e0!3m2!1sen!2sin!4v1234567890123"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Zikshana Infotech Pvt. Ltd. - Bengaluru Location"
        />
      </section>

      {/* Floating WhatsApp Button */}
      <div className="whatsapp-float">
        <div className="whatsapp-tooltip">
          Chat with us on WhatsApp
        </div>
        <button
          className="whatsapp-button"
          onClick={openWhatsAppChat}
          aria-label="Chat on WhatsApp"
        >
          <span className="whatsapp-icon">💬</span>
        </button>
      </div>
    </>
  );
};

export default Contact;
