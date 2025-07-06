"use client";

import React, { useState, useEffect } from 'react';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    setMounted(true);
    
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleViewProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactMe = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
      
      <section 
        id="home"
        style={{ 
          height: `calc(100vh - 70px)`,
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
      >


        {/* Grid pattern overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
          backgroundSize: '20px 20px',
          opacity: 0.05
        }}></div>

        {/* Main content container - takes up most of the space */}
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '2rem 1.5rem 0',
          position: 'relative', 
          zIndex: 10,
          flex: 1,
          display: 'flex',
          alignItems: 'center'
        }}>
          <div style={{ 
            width: '100%', 
            display: 'grid', 
            gridTemplateColumns: isLargeScreen ? '1fr 1fr' : '1fr',
            gap: isLargeScreen ? '3rem' : '2rem',
            alignItems: 'center'
          }}>
            
            {/* Left side - Image */}
            <div style={{
              position: 'relative',
              transition: 'all 1s ease 0.3s',
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateX(0)' : 'translateX(-2.5rem)'
            }}>
              <div style={{ position: 'relative' }}>
                {/* Glowing border effect */}
                <div style={{
                  position: 'absolute',
                  inset: '-4px',
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 50%, #ec4899 100%)',
                  borderRadius: '1rem',
                  filter: 'blur(8px)',
                  opacity: 0.3,
                  transition: 'opacity 1s ease'
                }}></div>
                
                {/* Main image container */}
                <div style={{
                  position: 'relative',
                  background: '#1e293b',
                  borderRadius: '1rem',
                  padding: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #334155 0%, #0f172a 100%)',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    height: isLargeScreen ? '350px' : '280px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {/* Your professional image */}
                    <div style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '8px',
                      position: 'relative',
                      overflow: 'hidden',
                      background: 'linear-gradient(135deg, #475569 0%, #1e293b 100%)'
                    }}>
                      {/* Image overlay for better contrast */}
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
                        zIndex: 1
                      }}></div>
                      
                      {/* Your actual image */}
                      <img
                        src="/profile.jpeg"
                        alt="Pershant - Full Stack Developer"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center top',
                          borderRadius: '8px',
                          position: 'relative',
                          zIndex: 2
                        }}
                        onError={(e) => {
                          // Fallback if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div style="
                                position: relative;
                                z-index: 10;
                                text-align: center;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                justify-content: center;
                                height: 100%;
                              ">
                                <div style="
                                  width: 72px;
                                  height: 72px;
                                  background: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%);
                                  border-radius: 50%;
                                  margin: 0 auto 0.75rem;
                                  display: flex;
                                  align-items: center;
                                  justify-content: center;
                                ">
                                  <svg style="width: 36px; height: 36px; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                  </svg>
                                </div>
                                <p style="color: #94a3b8; font-size: 0.8rem;">Add your photo as profile.jpg</p>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>


              </div>
            </div>

            {/* Right side - Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Status badge */}
              {/* <div style={{
                transition: 'all 1s ease',
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(2rem)'
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0.4rem 0.8rem',
                  background: 'rgba(30, 41, 59, 0.5)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '9999px',
                  border: '1px solid rgba(71, 85, 105, 0.5)'
                }}>
                  <div style={{
                    width: '0.4rem',
                    height: '0.4rem',
                    background: '#4ade80',
                    borderRadius: '50%',
                    marginRight: '0.6rem',
                    animation: 'pulse 2s infinite'
                  }}></div>
                  <span style={{ color: '#cbd5e1', fontSize: '0.8rem', fontFamily: 'monospace' }}>
                    Available for new projects
                  </span>
                </div>
              </div> */}

              {/* Main heading */}
              <div style={{
                transition: 'all 1s ease 0.2s',
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(2rem)'
              }}>
                <h1 style={{ 
                  fontSize: isLargeScreen ? '3rem' : '2.5rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '0.8rem',
                  lineHeight: 1.2
                }}>
                  Hi, I'm{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, #a78bfa 0%, #06b6d4 50%, #ec4899 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    Pershant Parkash
                  </span>
                </h1>
                <div style={{
                  height: '3px',
                  width: '5rem',
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                  borderRadius: '9999px'
                }}></div>
              </div>

              {/* Subtitle */}
              <div style={{
                transition: 'all 1s ease 0.4s',
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(2rem)'
              }}>
                <h2 style={{ 
                  fontSize: isLargeScreen ? '1.5rem' : '1.3rem',
                  fontWeight: 600,
                  color: '#cbd5e1',
                  marginBottom: '1rem'
                }}>
                  Full-Stack Developer & Digital Architect
                </h2>
                <p style={{ 
                  fontSize: '1rem',
                  color: '#94a3b8',
                  lineHeight: 1.6,
                  maxWidth: '26rem'
                }}>
                  I transform complex business requirements into{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: 600
                  }}>
                    scalable digital solutions
                  </span>
                  . Specializing in modern web applications that drive real business results.
                </p>
              </div>

              {/* Key differentiators */}
              <div style={{
                transition: 'all 1s ease 0.6s',
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(2rem)'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: isLargeScreen ? '1fr 1fr' : '1fr',
                  gap: '0.8rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div style={{ width: '0.4rem', height: '0.4rem', background: '#4ade80', borderRadius: '50%' }}></div>
                    <span style={{ color: '#cbd5e1', fontSize: '0.8rem' }}>1.5+ Years Experience</span>
                  </div>
                  {/* <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div style={{ width: '0.4rem', height: '0.4rem', background: '#60a5fa', borderRadius: '50%' }}></div>
                    <span style={{ color: '#cbd5e1', fontSize: '0.8rem' }}>20+ Projects Delivered</span>
                  </div> */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div style={{ width: '0.4rem', height: '0.4rem', background: '#a78bfa', borderRadius: '50%' }}></div>
                    <span style={{ color: '#cbd5e1', fontSize: '0.8rem' }}>Full-Stack Expertise</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div style={{ width: '0.4rem', height: '0.4rem', background: '#f472b6', borderRadius: '50%' }}></div>
                    <span style={{ color: '#cbd5e1', fontSize: '0.8rem' }}>Performance Focused</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div style={{
                transition: 'all 1s ease 0.8s',
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(2rem)'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: isLargeScreen ? 'row' : 'column',
                  gap: '0.8rem'
                }}>
                  <button
                    onClick={handleViewProjects}
                    style={{
                      position: 'relative',
                      padding: '0.8rem 1.5rem',
                      background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                      borderRadius: '0.75rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                      overflow: 'hidden',
                      fontSize: '0.9rem'
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLButtonElement;
                      target.style.transform = 'scale(1.05)';
                      target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLButtonElement;
                      target.style.transform = 'scale(1)';
                      target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
                    }}
                  >
                                          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        View My Work
                      </span>
                  </button>
                  <button
                    onClick={handleContactMe}
                    style={{
                      padding: '0.8rem 1.5rem',
                      background: 'rgba(30, 41, 59, 0.5)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: '0.75rem',
                      fontWeight: 600,
                      color: '#cbd5e1',
                      border: '1px solid rgba(71, 85, 105, 0.5)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontSize: '0.9rem'
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLButtonElement;
                      target.style.background = 'rgba(71, 85, 105, 0.5)';
                      target.style.borderColor = 'rgba(100, 116, 139, 1)';
                      target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLButtonElement;
                      target.style.background = 'rgba(30, 41, 59, 0.5)';
                      target.style.borderColor = 'rgba(71, 85, 105, 0.5)';
                      target.style.transform = 'scale(1)';
                    }}
                  >
                                          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        Let's Connect
                      </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section - Tech Stack and Scroll Indicator */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem 1.5rem',
          position: 'relative',
          zIndex: 10
        }}>
          {/* Tech Stack */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1.5rem'
          }}>
            <div style={{
              transition: 'all 1s ease 1s',
              opacity: mounted ? 1 : 0,
              textAlign: 'center'
            }}>
              <p style={{
                color: '#94a3b8',
                fontSize: '0.8rem',
                fontFamily: 'monospace',
                marginBottom: '0.8rem'
              }}>
                Core Technologies
              </p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.6rem',
                justifyContent: 'center'
              }}>
                {[
                  'React',
                  'Node.js',
                  'TypeScript',
                  'Next.js',
                  'PostgreSQL',
                  'AWS',
                  'Docker',
                  'GraphQL',
                ].map((tech) => (
                  <div
                    key={tech}
                    style={{
                      padding: '0.4rem 0.8rem',
                      background: 'rgba(30, 41, 59, 0.5)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: '0.4rem',
                      border: '1px solid rgba(71, 85, 105, 0.5)',
                      color: '#cbd5e1',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLDivElement;
                      target.style.background = 'rgba(71, 85, 105, 0.5)';
                      target.style.borderColor = 'rgba(100, 116, 139, 1)';
                      target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLDivElement;
                      target.style.background = 'rgba(30, 41, 59, 0.5)';
                      target.style.borderColor = 'rgba(71, 85, 105, 0.5)';
                      target.style.transform = 'scale(1)';
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>


        </div>
      </section>
    </>
  );
}