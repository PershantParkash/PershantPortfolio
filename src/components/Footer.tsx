"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const sectionRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Update time every second
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(timeInterval);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ) },
    { name: 'Skills', href: '#skills', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ) },
    { name: 'Projects', href: '#projects', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3h18v18H3z"/>
        <path d="M3 9h18"/>
        <path d="M9 21V9"/>
      </svg>
    ) },
    { name: 'Experience', href: '#experience', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M2 12h20"/>
        <path d="M12 2a10 10 0 0 1 10 10"/>
        <path d="M12 2a10 10 0 0 0-10 10"/>
      </svg>
    ) },
    { name: 'Testimonials', href: '#testimonials', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M8 9h8"/>
        <path d="M8 13h6"/>
      </svg>
    ) },
    { name: 'Contact', href: '#contact', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ) }
  ];

  const resources = [
    { name: 'Download Resume', href: '/resume.pdf', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10,9 9,9 8,9"/>
      </svg>
    ), download: true },
    { name: 'GitHub Profile', href: 'https://github.com/username', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ), external: true },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/username', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ), external: true },
    { name: 'Email Me', href: 'mailto:pershant@example.com', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ) }
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/username', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ), color: '#6b7280' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/username', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ), color: '#94a3b8' },
    { name: 'Email', href: 'mailto:pershant@example.com', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ), color: '#ef4444' }
  ];

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Tailwind CSS'
  ];

  return (
    <>
      <style jsx>{`
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
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px var(--glow-color); }
          50% { box-shadow: 0 0 30px var(--glow-color), 0 0 40px var(--glow-color); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .footer-link:hover .shimmer {
          animation: shimmer 1s ease-in-out;
        }
        
        .scroll-top-btn:hover {
          animation: bounce 1s ease-in-out infinite;
        }
        
        .tech-badge:hover {
          animation: float 1s ease-in-out;
        }
      `}</style>
      
      <footer 
        ref={sectionRef}
        style={{
          background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 50%, #020617 100%)',
          borderTop: '1px solid rgba(71, 85, 105, 0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Animated background elements */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04 }}>
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '18rem',
            height: '18rem',
            background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 20s ease-in-out infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '60%',
            right: '15%',
            width: '16rem',
            height: '16rem',
            background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 25s ease-in-out infinite reverse'
          }}></div>
        </div>

        {/* Grid pattern overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0)',
          backgroundSize: '20px 20px',
          opacity: 0.5
        }}></div>

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '3rem 1.5rem',
          position: 'relative',
          zIndex: 10
        }}>
          
          {/* Main Footer Content */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isLargeScreen ? '2fr 1fr 1fr 1fr' : '1fr',
            gap: '3rem',
            marginBottom: '3rem'
          }}>
            
            {/* Brand Section */}
            <div style={{
              animation: isVisible ? 'slideInLeft 1s ease 0.2s both' : 'none'
            }}>
              <div style={{
                background: 'rgba(30, 41, 59, 0.4)',
                backdropFilter: 'blur(15px)',
                borderRadius: '1.5rem',
                padding: '2rem',
                border: '1px solid rgba(71, 85, 105, 0.3)',
                position: 'relative',
                overflow: 'hidden',
                height: '100%'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #8b5cf6 0%, #06b6d4 50%, #10b981 100%)'
                }}></div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    marginRight: '1rem',
                    animation: 'glow 3s ease-in-out infinite',
                    // '--glow-color': '#8b5cf6'
                  }}>
                    💻
                  </div>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    color: '#ffffff'
                  }}>
                    Pershant
                  </h3>
                </div>
                
                <p style={{
                  fontSize: '1rem',
                  color: '#cbd5e1',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem'
                }}>
                  Full-stack developer passionate about building scalable, maintainable applications 
                  that solve real-world problems and drive business growth.
                </p>

                {/* Status Indicator */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: '#10b981',
                    animation: 'pulse 2s infinite'
                  }}></div>
                  <span style={{
                    fontSize: '0.9rem',
                    color: '#10b981',
                    fontWeight: 500
                  }}>
                    Available for new projects
                  </span>
                </div>

                {/* Current Time */}
                {/* <div style={{
                  padding: '0.8rem 1rem',
                  background: 'rgba(71, 85, 105, 0.3)',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(100, 116, 139, 0.3)'
                }}>
                  <div style={{
                    fontSize: '0.8rem',
                    color: '#94a3b8',
                    marginBottom: '0.2rem'
                  }}>
                    Local Time (UTC)
                  </div>
                  <div style={{
                    fontSize: '1rem',
                    color: '#ffffff',
                    fontFamily: 'monospace',
                    fontWeight: 600
                  }}>
                    {mounted ? currentTime.toLocaleTimeString() : '--:--:--'}
                  </div>
                </div> */}
              </div>
            </div>

            {/* Quick Links */}
            <div style={{
              animation: isVisible ? 'fadeInUp 1s ease 0.4s both' : 'none'
            }}>
              <h4 style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                🔗 Quick Links
              </h4>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem'
              }}>
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="footer-link"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      padding: '0.6rem 1rem',
                      background: 'rgba(71, 85, 105, 0.2)',
                      borderRadius: '0.5rem',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(100, 116, 139, 0.2)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      const target = e.currentTarget as HTMLAnchorElement;
                      target.style.background = 'rgba(100, 116, 139, 0.4)';
                      target.style.transform = 'translateX(5px)';
                      target.style.borderColor = 'rgba(139, 92, 246, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.currentTarget as HTMLAnchorElement;
                      target.style.background = 'rgba(71, 85, 105, 0.2)';
                      target.style.transform = 'translateX(0)';
                      target.style.borderColor = 'rgba(100, 116, 139, 0.2)';
                    }}
                  >
                    <div 
                      className="shimmer"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                        transform: 'translateX(-100%)',
                        zIndex: 1
                      }}
                    ></div>
                    <span style={{ fontSize: '1rem', zIndex: 2 }}>{link.icon}</span>
                    <span style={{
                      fontSize: '0.9rem',
                      color: '#cbd5e1',
                      fontWeight: 500,
                      zIndex: 2
                    }}>
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div style={{
              animation: isVisible ? 'fadeInUp 1s ease 0.6s both' : 'none'
            }}>
              <h4 style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                📚 Resources
              </h4>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem'
              }}>
                {resources.map((resource) => (
                  <a
                    key={resource.name}
                    href={resource.href}
                    download={resource.download}
                    target={resource.external ? '_blank' : undefined}
                    rel={resource.external ? 'noopener noreferrer' : undefined}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      padding: '0.6rem 1rem',
                      background: 'rgba(71, 85, 105, 0.2)',
                      borderRadius: '0.5rem',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(100, 116, 139, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      const target = e.currentTarget as HTMLAnchorElement;
                      target.style.background = 'rgba(100, 116, 139, 0.4)';
                      target.style.transform = 'translateX(5px)';
                      target.style.borderColor = 'rgba(6, 182, 212, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.currentTarget as HTMLAnchorElement;
                      target.style.background = 'rgba(71, 85, 105, 0.2)';
                      target.style.transform = 'translateX(0)';
                      target.style.borderColor = 'rgba(100, 116, 139, 0.2)';
                    }}
                  >
                    <span style={{ fontSize: '1rem' }}>{resource.icon}</span>
                    <span style={{
                      fontSize: '0.9rem',
                      color: '#cbd5e1',
                      fontWeight: 500
                    }}>
                      {resource.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div style={{
              animation: isVisible ? 'slideInRight 1s ease 0.8s both' : 'none'
            }}>
              <h4 style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                🌐 Connect
              </h4>
              
              {/* Social Links */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
                marginBottom: '2rem'
              }}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      padding: '0.6rem 1rem',
                      background: 'rgba(71, 85, 105, 0.2)',
                      borderRadius: '0.5rem',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(100, 116, 139, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      const target = e.currentTarget as HTMLAnchorElement;
                      target.style.background = 'rgba(100, 116, 139, 0.4)';
                      target.style.transform = 'scale(1.05)';
                      target.style.borderColor = social.color;
                    }}
                    onMouseLeave={(e) => {
                      const target = e.currentTarget as HTMLAnchorElement;
                      target.style.background = 'rgba(71, 85, 105, 0.2)';
                      target.style.transform = 'scale(1)';
                      target.style.borderColor = 'rgba(100, 116, 139, 0.2)';
                    }}
                  >
                    <span style={{ fontSize: '1rem' }}>{social.icon}</span>
                    <span style={{
                      fontSize: '0.9rem',
                      color: '#cbd5e1',
                      fontWeight: 500
                    }}>
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>

              {/* Scroll to Top Button */}
              <button
                onClick={scrollToTop}
                className="scroll-top-btn"
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                  borderRadius: '0.75rem',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.transform = 'scale(1.05)';
                  target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.transform = 'scale(1)';
                  target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
                }}
              >
                <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Back to Top
              </button>
            </div>
          </div>

          {/* Technologies Used */}
          <div style={{
            padding: '2rem',
            background: 'rgba(30, 41, 59, 0.3)',
            borderRadius: '1rem',
            border: '1px solid rgba(71, 85, 105, 0.3)',
            marginBottom: '2rem',
            animation: isVisible ? 'fadeInUp 1s ease 1s both' : 'none'
          }}>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              ⚡ Built with Modern Technologies
            </h4>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              justifyContent: 'center'
            }}>
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="tech-badge"
                  style={{
                    padding: '0.4rem 0.8rem',
                    background: 'rgba(71, 85, 105, 0.4)',
                    borderRadius: '9999px',
                    fontSize: '0.8rem',
                    color: '#cbd5e1',
                    border: '1px solid rgba(100, 116, 139, 0.4)',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLSpanElement;
                    target.style.background = 'rgba(139, 92, 246, 0.3)';
                    target.style.borderColor = '#8b5cf6';
                    target.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLSpanElement;
                    target.style.background = 'rgba(71, 85, 105, 0.4)';
                    target.style.borderColor = 'rgba(100, 116, 139, 0.4)';
                    target.style.color = '#cbd5e1';
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div style={{
            display: 'flex',
            flexDirection: isLargeScreen ? 'row' : 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(71, 85, 105, 0.3)',
            animation: isVisible ? 'fadeInUp 1s ease 1.2s both' : 'none'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: isLargeScreen ? 'row' : 'column',
              alignItems: 'center',
              gap: '1rem',
              fontSize: '0.9rem',
              color: '#94a3b8'
            }}>
              <span>© {currentYear} Pershant. All rights reserved.</span>
              <span style={{
                padding: '0.3rem 0.8rem',
                background: 'rgba(71, 85, 105, 0.3)',
                borderRadius: '9999px',
                fontSize: '0.8rem'
              }}>
                Made with ❤️ and ☕
              </span>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              fontSize: '0.8rem',
              color: '#64748b'
            }}>
              <span>Built with Next.js & Tailwind CSS</span>
              <div style={{
                display: 'flex',
                gap: '0.5rem'
              }}>
                {socialLinks.slice(0, 3).map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(71, 85, 105, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(100, 116, 139, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      const target = e.currentTarget as HTMLAnchorElement;
                      target.style.background = social.color + '40';
                      target.style.borderColor = social.color;
                      target.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.currentTarget as HTMLAnchorElement;
                      target.style.background = 'rgba(71, 85, 105, 0.3)';
                      target.style.borderColor = 'rgba(100, 116, 139, 0.3)';
                      target.style.transform = 'scale(1)';
                    }}
                  >
                    <span style={{ fontSize: '0.9rem' }}>{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}