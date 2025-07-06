"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function TestimonialsSection() {
  const [mounted, setMounted] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      clearInterval(interval);
    };
  }, []);

  const testimonials = [
    {
      quote: "Pershant consistently delivers high-quality, scalable solutions. His attention to detail and architectural thinking have been invaluable to our team's success.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp Solutions",
      avatar: "SJ",
      rating: 5,
      project: "Enterprise Platform Architecture",
      color: "#8b5cf6",
      bgGradient: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)"
    },
    {
      quote: "Working with Pershant was a game-changer for our project. He not only built a robust system but also mentored our team on best practices that we still use today.",
      author: "Michael Chen",
      role: "Product Manager",
      company: "Digital Innovations Inc",
      avatar: "MC",
      rating: 5,
      project: "Mobile App Development",
      color: "#06b6d4",
      bgGradient: "linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)"
    },
    {
      quote: "Pershant's technical expertise is matched only by his collaborative spirit. He has a unique ability to translate complex technical concepts into business value.",
      author: "Emily Rodriguez",
      role: "Senior Developer",
      company: "StartupXYZ",
      avatar: "ER",
      rating: 5,
      project: "Frontend Redesign",
      color: "#10b981",
      bgGradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)"
    },
    {
      quote: "The applications Pershant built for us exceeded our expectations. His focus on performance and user experience resulted in measurable improvements in our business metrics.",
      author: "David Thompson",
      role: "CEO",
      company: "E-Commerce Platform Client",
      avatar: "DT",
      rating: 5,
      project: "E-Commerce Platform",
      color: "#f59e0b",
      bgGradient: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)"
    }
  ];

  const stats = [
    { value: "4.9/5", label: "Average Rating", icon: "⭐" },
    { value: "100%", label: "Client Satisfaction", icon: "😊" },
    { value: "15+", label: "Recommendations", icon: "👍" },
    { value: "50+", label: "Happy Clients", icon: "🤝" }
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
          50% { transform: translateY(-12px) rotate(3deg); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px var(--glow-color); }
          50% { box-shadow: 0 0 30px var(--glow-color), 0 0 40px var(--glow-color); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes slideTestimonial {
          0% { transform: translateX(100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        .testimonial-card:hover .shimmer {
          animation: shimmer 1.5s ease-in-out;
        }
        
        .star-rating {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .quote-icon {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      
      <section 
        ref={sectionRef}
        style={{ 
          minHeight: '100vh',
          background: 'linear-gradient(180deg, #1e293b 0%, #334155 30%, #1e293b 70%, #0f172a 100%)',
          position: 'relative',
          overflow: 'hidden',
          padding: isLargeScreen ? '5rem 0' : '3rem 0'
        }}
      >
        {/* Animated background elements */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06 }}>
          <div style={{
            position: 'absolute',
            top: '25%',
            right: '20%',
            width: '20rem',
            height: '20rem',
            background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 16s ease-in-out infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '65%',
            left: '15%',
            width: '24rem',
            height: '24rem',
            background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 20s ease-in-out infinite reverse'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '20%',
            right: '25%',
            width: '18rem',
            height: '18rem',
            background: 'radial-gradient(circle, #10b981 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 12s ease-in-out infinite'
          }}></div>
        </div>

        {/* Quote pattern overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M8 8h4v4H8zM8 16h4v4H8zM16 8h4v4h-4zM16 16h4v4h-4z'/%3E%3C/g%3E%3C/svg%3E")`,
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
            marginBottom: '3rem',
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
                💬 Client Testimonials
              </span>
            </div>
            
            <h2 style={{ 
              fontSize: isLargeScreen ? '3rem' : '2.5rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '1rem',
              lineHeight: 1.2
            }}>
              What People{' '}
              <span style={{
                background: 'linear-gradient(135deg, #a78bfa 0%, #06b6d4 50%, #10b981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Say
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
              Feedback from colleagues, clients, and mentors about my work ethic, 
              technical skills, and collaborative approach.
            </p>
          </div>

          {/* Stats Section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isLargeScreen ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)',
            gap: '1.5rem',
            marginBottom: '4rem',
            animation: isVisible ? 'fadeInUp 1s ease 0.4s both' : 'none'
          }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(30, 41, 59, 0.4)',
                  backdropFilter: 'blur(15px)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  border: '1px solid rgba(71, 85, 105, 0.3)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.background = 'rgba(51, 65, 85, 0.6)';
                  target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.background = 'rgba(30, 41, 59, 0.4)';
                  target.style.transform = 'scale(1)';
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                  {stat.icon}
                </div>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '0.3rem'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '0.8rem',
                  color: '#94a3b8'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Featured Testimonial Slider */}
          <div style={{
            background: 'rgba(30, 41, 59, 0.4)',
            backdropFilter: 'blur(15px)',
            borderRadius: '2rem',
            padding: '3rem',
            border: '1px solid rgba(71, 85, 105, 0.3)',
            marginBottom: '4rem',
            position: 'relative',
            overflow: 'hidden',
            animation: isVisible ? 'fadeInUp 1s ease 0.6s both' : 'none'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: testimonials[currentSlide].bgGradient
            }}></div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '2rem'
            }}>
              <div 
                className="quote-icon"
                style={{
                  fontSize: '4rem',
                  color: testimonials[currentSlide].color,
                  opacity: 0.3
                }}
              >
                "
              </div>
            </div>

            <div style={{
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <p style={{
                fontSize: isLargeScreen ? '1.3rem' : '1.1rem',
                color: '#ffffff',
                lineHeight: 1.7,
                marginBottom: '2rem',
                fontStyle: 'italic'
              }}>
                {testimonials[currentSlide].quote}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: testimonials[currentSlide].bgGradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  border: '3px solid rgba(255,255,255,0.2)'
                }}>
                  {testimonials[currentSlide].avatar}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    marginBottom: '0.2rem'
                  }}>
                    {testimonials[currentSlide].author}
                  </h4>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#cbd5e1',
                    marginBottom: '0.2rem'
                  }}>
                    {testimonials[currentSlide].role}
                  </p>
                  <p style={{
                    fontSize: '0.8rem',
                    color: '#94a3b8'
                  }}>
                    {testimonials[currentSlide].company}
                  </p>
                </div>
              </div>

              {/* Star Rating */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.2rem',
                marginBottom: '1rem'
              }}>
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <span 
                    key={i}
                    className="star-rating"
                    style={{
                      color: '#f59e0b',
                      fontSize: '1.2rem',
                      animationDelay: `${i * 0.1}s`
                    }}
                  >
                    ⭐
                  </span>
                ))}
              </div>

              <div style={{
                padding: '0.5rem 1rem',
                background: 'rgba(71, 85, 105, 0.3)',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                color: '#cbd5e1',
                display: 'inline-block'
              }}>
                Project: {testimonials[currentSlide].project}
              </div>
            </div>

            {/* Navigation Dots */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '2rem'
            }}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: 'none',
                    background: index === currentSlide ? testimonials[index].color : 'rgba(71, 85, 105, 0.5)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (index !== currentSlide) {
                      const target = e.target as HTMLButtonElement;
                      target.style.background = 'rgba(100, 116, 139, 0.8)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (index !== currentSlide) {
                      const target = e.target as HTMLButtonElement;
                      target.style.background = 'rgba(71, 85, 105, 0.5)';
                    }
                  }}
                />
              ))}
            </div>
          </div>

          {/* Testimonials Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isLargeScreen ? 'repeat(2, 1fr)' : '1fr',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className="testimonial-card"
                style={{
                  background: 'rgba(30, 41, 59, 0.4)',
                  backdropFilter: 'blur(15px)',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  border: '1px solid rgba(71, 85, 105, 0.3)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  animation: isVisible ? `fadeInUp 1s ease ${0.8 + index * 0.1}s both` : 'none'
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.background = 'rgba(51, 65, 85, 0.6)';
                  target.style.borderColor = testimonial.color;
                  target.style.transform = 'translateY(-5px) scale(1.02)';
                  target.style.boxShadow = `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px ${testimonial.color}40`;
                  setActiveTestimonial(index);
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.background = 'rgba(30, 41, 59, 0.4)';
                  target.style.borderColor = 'rgba(71, 85, 105, 0.3)';
                  target.style.transform = 'translateY(0) scale(1)';
                  target.style.boxShadow = 'none';
                }}
              >
                {/* Shimmer effect */}
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

                {/* Quote mark */}
                <div style={{
                  fontSize: '2.5rem',
                  color: testimonial.color,
                  opacity: 0.3,
                  marginBottom: '1rem',
                  lineHeight: 1
                }}>
                  "
                </div>

                {/* Quote text */}
                <p style={{
                  fontSize: '1rem',
                  color: '#cbd5e1',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem',
                  fontStyle: 'italic'
                }}>
                  {testimonial.quote}
                </p>

                {/* Author info */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: testimonial.bgGradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    border: '2px solid rgba(255,255,255,0.2)'
                  }}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      marginBottom: '0.2rem'
                    }}>
                      {testimonial.author}
                    </h4>
                    <p style={{
                      fontSize: '0.85rem',
                      color: '#cbd5e1',
                      marginBottom: '0.1rem'
                    }}>
                      {testimonial.role}
                    </p>
                    <p style={{
                      fontSize: '0.75rem',
                      color: '#94a3b8'
                    }}>
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div style={{
                  display: 'flex',
                  gap: '0.2rem',
                  marginTop: '1rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(71, 85, 105, 0.3)'
                }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span 
                      key={i}
                      style={{
                        color: '#f59e0b',
                        fontSize: '0.9rem'
                      }}
                    >
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Collaboration Philosophy */}
          <div style={{
            textAlign: 'center',
            animation: isVisible ? 'fadeInUp 1s ease 1.2s both' : 'none'
          }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(30, 41, 59, 0.4)',
              backdropFilter: 'blur(15px)',
              borderRadius: '1.5rem',
              padding: '2.5rem',
              border: '1px solid rgba(71, 85, 105, 0.3)',
              position: 'relative',
              overflow: 'hidden',
              maxWidth: '700px'
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
                fontSize: '1.8rem',
                marginBottom: '1rem'
              }}>
                🤝
              </div>
              
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '1rem'
              }}>
                Collaboration Philosophy
              </h3>
              
              <p style={{
                fontSize: '1rem',
                color: '#cbd5e1',
                lineHeight: 1.7
              }}>
                I believe that the best software is built through collaboration, clear communication, 
                and a shared understanding of business goals. My approach focuses on delivering 
                not just working code, but solutions that drive real business value.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}