"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function ContactSection() {
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const sectionRef = useRef(null);

  useEffect(() => {
    
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        projectType: '',
        timeline: ''
      });
    }, 2000);
  };

  // const contactInfo = [
  //   {
  //     title: "Email",
  //     description: "Get in touch directly",
  //     value: "pershant@example.com",
  //     icon: (
  //       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  //         <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
  //         <polyline points="22,6 12,13 2,6"/>
  //       </svg>
  //     ),
  //     color: "#8b5cf6",
  //     bgGradient: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
  //     action: "mailto:pershant@example.com"
  //   },
  //   {
  //     title: "Location",
  //     description: "Available for remote work",
  //     value: "Worldwide",
  //     icon: (
  //       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  //         <circle cx="12" cy="10" r="3"/>
  //         <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/>
  //       </svg>
  //     ),
  //     color: "#10b981",
  //     bgGradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
  //     action: "#"
  //   },
  //   {
  //     title: "Response Time",
  //     description: "Quick turnaround guaranteed",
  //     value: "Within 24 hours",
  //     icon: (
  //       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  //         <circle cx="12" cy="12" r="10"/>
  //         <polyline points="12,6 12,12 16,14"/>
  //       </svg>
  //     ),
  //     color: "#f59e0b",
  //     bgGradient: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
  //     action: "#"
  //   }
  // ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/username",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
      ),
      color: "#6b7280",
      description: "Check out my code"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/username",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
      color: "#94a3b8",
      description: "Professional network"
    }
  ];

  const projectTypes = [
    "Web Application",
    "Mobile App",
    "E-commerce Platform",
    "API Development",
    "Database Design",
    "Performance Optimization",
    "Consulting",
    "Other"
  ];

  const timelines = [
    "ASAP",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Flexible"
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
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px var(--glow-color); }
          50% { box-shadow: 0 0 30px var(--glow-color), 0 0 40px var(--glow-color); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .contact-card:hover .shimmer {
          animation: shimmer 1.5s ease-in-out;
        }
        
        .contact-icon {
          animation: float 3s ease-in-out infinite;
        }
        
        .form-input:focus {
          transform: scale(1.02);
        }
        
        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .spinning {
          animation: spin 1s linear infinite;
        }
      `}</style>
      
      <section 
        id="contact"
        ref={sectionRef}
        style={{ 
          minHeight: '100vh',
          background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 30%, #334155 70%, #1e293b 100%)',
          position: 'relative',
          overflow: 'hidden',
          padding: isLargeScreen ? '5rem 0' : '3rem 0'
        }}
      >
        {/* Animated background elements */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06 }}>
          <div style={{
            position: 'absolute',
            top: '15%',
            left: '10%',
            width: '22rem',
            height: '22rem',
            background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 18s ease-in-out infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '60%',
            right: '15%',
            width: '20rem',
            height: '20rem',
            background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 22s ease-in-out infinite reverse'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '10%',
            left: '20%',
            width: '18rem',
            height: '18rem',
            background: 'radial-gradient(circle, #10b981 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 14s ease-in-out infinite'
          }}></div>
        </div>

        {/* Mesh pattern overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M15 0v30M0 15h30'/%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.4
        }}></div>

        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 1.5rem',
          position: 'relative', 
          zIndex: 10
        }}>
          
          {/* Section Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem',
            animation: isVisible ? 'fadeInUp 1s ease 0.2s both' : 'none'
          }}>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'rgba(30, 41, 59, 0.6)',
              backdropFilter: 'blur(12px)',
              borderRadius: '9999px',
              border: '1px solid rgba(71, 85, 105, 0.5)',
              marginBottom: '1rem'
            }}>
              <span style={{ color: '#94a3b8', fontSize: '0.9rem', fontFamily: 'monospace' }}>
                Get In Touch
              </span>
            </div>
            
            <h2 style={{ 
              fontSize: isLargeScreen ? '3rem' : '2.5rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '1rem',
              lineHeight: 1.2
            }}>
              Let's Build{' '}
              <span style={{
                background: 'linear-gradient(135deg, #a78bfa 0%, #06b6d4 50%, #10b981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Something Amazing
              </span>
            </h2>
            
            <div style={{
              height: '3px',
              width: '6rem',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 50%, #10b981 100%)',
              borderRadius: '9999px',
              margin: '0 auto 1rem'
            }}></div>
            
            <p style={{ 
              fontSize: '1.1rem',
              color: '#cbd5e1',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Ready to turn your ideas into reality? I&apos;m always interested in new opportunities 
              and collaborations. Let&apos;s discuss how we can work together to create something extraordinary.
            </p>
          </div>

          {/* Contact Methods */}
          {/* <div style={{
            display: 'grid',
            gridTemplateColumns: isLargeScreen ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)',
            gap: '1.5rem',
            marginBottom: '4rem',
            animation: isVisible ? 'fadeInUp 1s ease 0.4s both' : 'none'
          }}>
            {contactInfo.map((method, index) => (
              <a
                key={method.title}
                href={method.action}
                className="contact-card"
                style={{
                  background: 'rgba(30, 41, 59, 0.4)',
                  backdropFilter: 'blur(15px)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  border: '1px solid rgba(71, 85, 105, 0.3)',
                  textAlign: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'block'
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLAnchorElement;
                  target.style.background = 'rgba(51, 65, 85, 0.6)';
                  target.style.borderColor = method.color;
                  target.style.transform = 'scale(1.05)';
                  target.style.boxShadow = `0 10px 30px rgba(0, 0, 0, 0.4), 0 0 0 1px ${method.color}40`;
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLAnchorElement;
                  target.style.background = 'rgba(30, 41, 59, 0.4)';
                  target.style.borderColor = 'rgba(71, 85, 105, 0.3)';
                  target.style.transform = 'scale(1)';
                  target.style.boxShadow = 'none';
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

                <div 
                  className="contact-icon"
                  style={{
                    fontSize: '2rem',
                    marginBottom: '1rem',
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  {method.icon}
                </div>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: '0.5rem'
                }}>
                  {method.title}
                </h4>
                <p style={{
                  fontSize: '0.8rem',
                  color: '#94a3b8',
                  marginBottom: '0.5rem'
                }}>
                  {method.description}
                </p>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#cbd5e1',
                  fontWeight: 500
                }}>
                  {method.value}
                </p>
              </a>
            ))}
          </div> */}

          {/* Main Content Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isLargeScreen ? '2fr 1fr' : '1fr',
            gap: '3rem'
          }}>
            
            {/* Contact Form */}
            <div style={{
              animation: isVisible ? 'slideInLeft 1s ease 0.6s both' : 'none'
            }}>
              <div style={{
                background: 'rgba(30, 41, 59, 0.4)',
                backdropFilter: 'blur(15px)',
                borderRadius: '1.5rem',
                padding: '2.5rem',
                border: '1px solid rgba(71, 85, 105, 0.3)',
                position: 'relative',
                overflow: 'hidden'
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
                  marginBottom: '2rem'
                }}>
                  {/* <div style={{ fontSize: '1.5rem', marginRight: '0.8rem' }}>
                    📝
                  </div> */}
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    color: '#ffffff'
                  }}>
                    Send a Message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {/* Name and Email Row */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: isLargeScreen ? '1fr 1fr' : '1fr',
                    gap: '1rem'
                  }}>
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        color: '#cbd5e1',
                        marginBottom: '0.5rem'
                      }}>
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          background: 'rgba(71, 85, 105, 0.3)',
                          border: '1px solid rgba(100, 116, 139, 0.5)',
                          borderRadius: '0.5rem',
                          color: '#ffffff',
                          fontSize: '0.9rem',
                          transition: 'all 0.3s ease',
                          outline: 'none'
                        }}
                        placeholder="Your full name"
                        onFocus={(e) => {
                          const target = e.target as HTMLInputElement;
                          target.style.borderColor = '#8b5cf6';
                          target.style.background = 'rgba(71, 85, 105, 0.5)';
                        }}
                        onBlur={(e) => {
                          const target = e.target as HTMLInputElement;
                          target.style.borderColor = 'rgba(100, 116, 139, 0.5)';
                          target.style.background = 'rgba(71, 85, 105, 0.3)';
                        }}
                      />
                    </div>
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        color: '#cbd5e1',
                        marginBottom: '0.5rem'
                      }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          background: 'rgba(71, 85, 105, 0.3)',
                          border: '1px solid rgba(100, 116, 139, 0.5)',
                          borderRadius: '0.5rem',
                          color: '#ffffff',
                          fontSize: '0.9rem',
                          transition: 'all 0.3s ease',
                          outline: 'none'
                        }}
                        placeholder="your.email@example.com"
                        onFocus={(e) => {
                          const target = e.target as HTMLInputElement;
                          target.style.borderColor = '#06b6d4';
                          target.style.background = 'rgba(71, 85, 105, 0.5)';
                        }}
                        onBlur={(e) => {
                          const target = e.target as HTMLInputElement;
                          target.style.borderColor = 'rgba(100, 116, 139, 0.5)';
                          target.style.background = 'rgba(71, 85, 105, 0.3)';
                        }}
                      />
                    </div>
                  </div>

                  {/* Subject and Budget Row */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: isLargeScreen ? '2fr 1fr' : '1fr',
                    gap: '1rem'
                  }}>
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        color: '#cbd5e1',
                        marginBottom: '0.5rem'
                      }}>
                        Project Type
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          background: 'rgba(71, 85, 105, 0.3)',
                          border: '1px solid rgba(100, 116, 139, 0.5)',
                          borderRadius: '0.5rem',
                          color: '#ffffff',
                          fontSize: '0.9rem',
                          transition: 'all 0.3s ease',
                          outline: 'none'
                        }}
                        onFocus={(e) => {
                          const target = e.target as HTMLSelectElement;
                          target.style.borderColor = '#10b981';
                          target.style.background = 'rgba(71, 85, 105, 0.5)';
                        }}
                        onBlur={(e) => {
                          const target = e.target as HTMLSelectElement;
                          target.style.borderColor = 'rgba(100, 116, 139, 0.5)';
                          target.style.background = 'rgba(71, 85, 105, 0.3)';
                        }}
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type} style={{ background: '#1e293b' }}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    {/* <div>
                      <label style={{
                        display: 'block',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        color: '#cbd5e1',
                        marginBottom: '0.5rem'
                      }}>
                        Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          background: 'rgba(71, 85, 105, 0.3)',
                          border: '1px solid rgba(100, 116, 139, 0.5)',
                          borderRadius: '0.5rem',
                          color: '#ffffff',
                          fontSize: '0.9rem',
                          transition: 'all 0.3s ease',
                          outline: 'none'
                        }}
                        onFocus={(e) => {
                          const target = e.target as HTMLSelectElement;
                          target.style.borderColor = '#f59e0b';
                          target.style.background = 'rgba(71, 85, 105, 0.5)';
                        }}
                        onBlur={(e) => {
                          const target = e.target as HTMLSelectElement;
                          target.style.borderColor = 'rgba(100, 116, 139, 0.5)';
                          target.style.background = 'rgba(71, 85, 105, 0.3)';
                        }}
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range} style={{ background: '#1e293b' }}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div> */}
                  </div>

                  {/* Timeline */}
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      color: '#cbd5e1',
                      marginBottom: '0.5rem'
                    }}>
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        background: 'rgba(71, 85, 105, 0.3)',
                        border: '1px solid rgba(100, 116, 139, 0.5)',
                        borderRadius: '0.5rem',
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease',
                        outline: 'none'
                      }}
                      onFocus={(e) => {
                        const target = e.target as HTMLSelectElement;
                        target.style.borderColor = '#ec4899';
                        target.style.background = 'rgba(71, 85, 105, 0.5)';
                      }}
                      onBlur={(e) => {
                        const target = e.target as HTMLSelectElement;
                        target.style.borderColor = 'rgba(100, 116, 139, 0.5)';
                        target.style.background = 'rgba(71, 85, 105, 0.3)';
                      }}
                    >
                      <option value="">When do you need this?</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline} style={{ background: '#1e293b' }}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      color: '#cbd5e1',
                      marginBottom: '0.5rem'
                    }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        background: 'rgba(71, 85, 105, 0.3)',
                        border: '1px solid rgba(100, 116, 139, 0.5)',
                        borderRadius: '0.5rem',
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease',
                        outline: 'none',
                        resize: 'vertical',
                        minHeight: '120px'
                      }}
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                      onFocus={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        target.style.borderColor = '#8b5cf6';
                        target.style.background = 'rgba(71, 85, 105, 0.5)';
                      }}
                      onBlur={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        target.style.borderColor = 'rgba(100, 116, 139, 0.5)';
                        target.style.background = 'rgba(71, 85, 105, 0.3)';
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="submit-button"
                    style={{
                      width: '100%',
                      padding: '1rem 1.5rem',
                      background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                      borderRadius: '0.75rem',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      border: 'none',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        const target = e.target as HTMLButtonElement;
                        target.style.transform = 'scale(1.05)';
                        target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) {
                        const target = e.target as HTMLButtonElement;
                        target.style.transform = 'scale(1)';
                        target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
                      }
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinning" style={{
                          width: '20px',
                          height: '20px',
                          border: '2px solid rgba(255,255,255,0.3)',
                          borderTopColor: '#ffffff',
                          borderRadius: '50%'
                        }}></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Form Status */}
                  {submitStatus === 'success' && (
                    <div style={{
                      padding: '1rem',
                      background: 'rgba(16, 185, 129, 0.2)',
                      borderRadius: '0.5rem',
                      border: '1px solid rgba(16, 185, 129, 0.5)',
                      color: '#10b981',
                      textAlign: 'center',
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}>
                      ✅ Message sent successfully! I'll get back to you within 24 hours.
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Right Sidebar */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              animation: isVisible ? 'slideInRight 1s ease 0.8s both' : 'none'
            }}>
              
              {/* Social Links */}
              <div style={{
                background: 'rgba(30, 41, 59, 0.4)',
                backdropFilter: 'blur(15px)',
                borderRadius: '1.5rem',
                padding: '2rem',
                border: '1px solid rgba(71, 85, 105, 0.3)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  {/* <div style={{ fontSize: '1.3rem', marginRight: '0.8rem' }}>
                    🌐
                  </div> */}
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: '#ffffff'
                  }}>
                    Connect With Me
                  </h3>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '0.8rem 1rem',
                        background: 'rgba(71, 85, 105, 0.3)',
                        borderRadius: '0.75rem',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        border: '1px solid rgba(100, 116, 139, 0.3)'
                      }}
                      onMouseEnter={(e) => {
                        const target = e.currentTarget as HTMLAnchorElement;
                        target.style.background = 'rgba(100, 116, 139, 0.5)';
                        target.style.transform = 'scale(1.05)';
                        target.style.borderColor = link.color;
                      }}
                      onMouseLeave={(e) => {
                        const target = e.currentTarget as HTMLAnchorElement;
                        target.style.background = 'rgba(71, 85, 105, 0.3)';
                        target.style.transform = 'scale(1)';
                        target.style.borderColor = 'rgba(100, 116, 139, 0.3)';
                      }}
                    >
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: `${link.color}20`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem'
                      }}>
                        {link.icon}
                      </div>
                      <div>
                        <div style={{
                          fontSize: '1rem',
                          fontWeight: 600,
                          color: '#ffffff',
                          marginBottom: '0.2rem'
                        }}>
                          {link.name}
                        </div>
                        <div style={{
                          fontSize: '0.8rem',
                          color: '#94a3b8'
                        }}>
                          {link.description}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              {/* <div style={{
                background: 'rgba(30, 41, 59, 0.4)',
                backdropFilter: 'blur(15px)',
                borderRadius: '1.5rem',
                padding: '2rem',
                border: '1px solid rgba(71, 85, 105, 0.3)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#10b981',
                    marginRight: '0.8rem',
                    animation: 'pulse 2s infinite'
                  }}></div>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: '#ffffff'
                  }}>
                    Currently Available
                  </h3>
                </div>
                
                <p style={{
                  fontSize: '0.95rem',
                  color: '#cbd5e1',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem'
                }}>
                  I&apos;m actively taking on new projects and would love to hear about yours. 
                  My current availability allows for immediate project starts.
                </p>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem'
                }}>
                  {[
                    { 
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12,6 12,12 16,14"/>
                        </svg>
                      ), 
                      text: 'Quick Response (24h)' 
                    },
                    { 
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="10" r="3"/>
                          <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/>
                        </svg>
                      ), 
                      text: 'Remote Work Available' 
                    },
                    { 
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12,6 12,12 16,14"/>
                        </svg>
                      ), 
                      text: 'Flexible Time Zones' 
                    },
                    { 
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                          <path d="M12 14l3-3m0 0l3 3m-3-3v9"/>
                        </svg>
                      ), 
                      text: 'Long-term Partnerships' 
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        padding: '0.5rem 0'
                      }}
                    >
                      <div style={{ color: '#94a3b8' }}>{item.icon}</div>
                      <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* Resume Download */}
              <div style={{
                background: 'rgba(30, 41, 59, 0.4)',
                backdropFilter: 'blur(15px)',
                borderRadius: '1.5rem',
                padding: '2rem',
                border: '1px solid rgba(71, 85, 105, 0.3)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  {/* <div style={{ color: '#10b981', marginRight: '0.8rem' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14,2 14,8 20,8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10,9 9,9 8,9"/>
                    </svg>
                  </div> */}
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: '#ffffff'
                  }}>
                    Download Resume
                  </h3>
                </div>
                
                <p style={{
                  fontSize: '0.9rem',
                  color: '#94a3b8',
                  marginBottom: '1.5rem',
                  lineHeight: 1.5
                }}>
                  Get a detailed overview of my experience, skills, and achievements in a comprehensive PDF format.
                </p>
                
                <a
                  href="/resume.pdf"
                  download
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.8rem 1.5rem',
                    background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
                    borderRadius: '0.75rem',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLAnchorElement;
                    target.style.transform = 'scale(1.05)';
                    target.style.boxShadow = '0 8px 25px rgba(16, 185, 129, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLAnchorElement;
                    target.style.transform = 'scale(1)';
                    target.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.3)';
                  }}
                >
                  <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </a>
              </div>

              {/* FAQ Section */}
              {/* <div style={{
                background: 'rgba(30, 41, 59, 0.4)',
                backdropFilter: 'blur(15px)',
                borderRadius: '1.5rem',
                padding: '2rem',
                border: '1px solid rgba(71, 85, 105, 0.3)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{ fontSize: '1.3rem', marginRight: '0.8rem' }}>
                    ❓
                  </div>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: '#ffffff'
                  }}>
                    Quick FAQ
                  </h3>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { q: 'What\'s your typical project timeline?', a: '2-12 weeks depending on scope' },
                    { q: 'Do you work with startups?', a: 'Yes, I love helping startups grow!' },
                    { q: 'What technologies do you use?', a: 'React, Node.js, TypeScript, and more' },
                    { q: 'Do you provide ongoing support?', a: 'Yes, maintenance packages available' }
                  ].map((faq, index) => (
                    <div key={index} style={{ paddingBottom: '1rem', borderBottom: index < 3 ? '1px solid rgba(71, 85, 105, 0.3)' : 'none' }}>
                      <div style={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: '#ffffff',
                        marginBottom: '0.3rem'
                      }}>
                        {faq.q}
                      </div>
                      <div style={{
                        fontSize: '0.8rem',
                        color: '#94a3b8',
                        lineHeight: 1.4
                      }}>
                        {faq.a}
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}