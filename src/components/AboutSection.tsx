"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function AboutSection() {
  const [mounted, setMounted] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
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
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    { name: 'Frontend Development', level: 95, color: '#8b5cf6' },
    { name: 'Backend Development', level: 90, color: '#06b6d4' },
    { name: 'Database Design', level: 85, color: '#10b981' },
    { name: 'Cloud & DevOps', level: 80, color: '#f59e0b' },
    { name: 'UI/UX Design', level: 75, color: '#ef4444' },
    { name: 'Mobile Development', level: 70, color: '#ec4899' }
  ];

  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      period: '2023 - Present',
      description: 'Led development of enterprise-scale web applications serving 100K+ users. Implemented microservices architecture and improved system performance by 40%.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Innovations',
      period: '2022 - 2023',
      description: 'Developed and maintained multiple client projects, focusing on responsive design and optimal user experience. Collaborated with cross-functional teams.',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'GraphQL']
    },
    {
      title: 'Frontend Developer',
      company: 'StartupHub',
      period: '2021 - 2022',
      description: 'Built dynamic user interfaces for SaaS platforms. Optimized application performance and implemented modern development practices.',
      technologies: ['React', 'JavaScript', 'CSS3', 'REST APIs']
    }
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
        
        @keyframes progressBar {
          from {
            width: 0%;
          }
          to {
            width: var(--progress-width);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(139, 92, 246, 0.6); }
        }
      `}</style>
      
      <section 
        id="about"
        ref={sectionRef}
        style={{ 
          minHeight: '100vh',
          background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
          position: 'relative',
          overflow: 'hidden',
          padding: isLargeScreen ? '5rem 0' : '3rem 0'
        }}
      >
        {/* Animated background elements */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
          <div style={{
            position: 'absolute',
            top: '20%',
            right: '20%',
            width: '20rem',
            height: '20rem',
            background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 6s ease-in-out infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '20%',
            left: '10%',
            width: '16rem',
            height: '16rem',
            background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 8s ease-in-out infinite reverse'
          }}></div>
        </div>

        {/* Grid pattern overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.08) 1px, transparent 0)',
          backgroundSize: '30px 30px',
          opacity: 0.3
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
              background: 'rgba(30, 41, 59, 0.5)',
              backdropFilter: 'blur(8px)',
              borderRadius: '9999px',
              border: '1px solid rgba(71, 85, 105, 0.5)',
              marginBottom: '1rem'
            }}>
              <span style={{ color: '#94a3b8', fontSize: '0.9rem', fontFamily: 'monospace' }}>
                About Me
              </span>
            </div>
            
            <h2 style={{ 
              fontSize: isLargeScreen ? '3rem' : '2.5rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '1rem',
              lineHeight: 1.2
            }}>
              Crafting Digital{' '}
              <span style={{
                background: 'linear-gradient(135deg, #a78bfa 0%, #06b6d4 50%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Experiences
              </span>
            </h2>
            
            <div style={{
              height: '3px',
              width: '6rem',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
              borderRadius: '9999px',
              margin: '0 auto'
            }}></div>
          </div>

          {/* Main Content Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isLargeScreen ? '1fr 1fr' : '1fr',
            gap: '3rem',
            alignItems: 'start'
          }}>
            
            {/* Left Column - Personal Info & Story */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Personal Story */}
              <div style={{
                background: 'rgba(30, 41, 59, 0.3)',
                backdropFilter: 'blur(10px)',
                borderRadius: '1rem',
                padding: '2rem',
                border: '1px solid rgba(71, 85, 105, 0.3)',
                position: 'relative',
                overflow: 'hidden',
                animation: isVisible ? 'slideInLeft 1s ease 0.4s both' : 'none'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #8b5cf6 0%, #06b6d4 50%, #ec4899 100%)'
                }}></div>
                
                <h3 style={{ 
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: '1rem'
                }}>
                  My Journey
                </h3>
                
                <p style={{ 
                  fontSize: '1rem',
                  color: '#cbd5e1',
                  lineHeight: 1.7,
                  marginBottom: '1rem'
                }}>
                  I'm a passionate full-stack developer with over 3 years of experience building 
                  scalable web applications. My journey started with a curiosity about how websites 
                  work, which evolved into a deep love for creating digital solutions that make a 
                  real impact.
                </p>
                
                <p style={{ 
                  fontSize: '1rem',
                  color: '#94a3b8',
                  lineHeight: 1.7
                }}>
                  I believe in writing clean, maintainable code and staying current with the latest 
                  technologies. When I'm not coding, you'll find me exploring new frameworks, 
                  contributing to open-source projects, or mentoring aspiring developers.
                </p>
              </div>

              {/* Quick Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                animation: isVisible ? 'slideInLeft 1s ease 0.6s both' : 'none'
              }}>
                {[
                  { number: '20+', label: 'Projects Completed' },
                  { number: '3+', label: 'Years Experience' },
                  { number: '15+', label: 'Technologies' },
                  { number: '100%', label: 'Client Satisfaction' }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    style={{
                      background: 'rgba(30, 41, 59, 0.3)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '0.75rem',
                      padding: '1.5rem',
                      border: '1px solid rgba(71, 85, 105, 0.3)',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      const target = e.currentTarget as HTMLDivElement;
                      target.style.background = 'rgba(71, 85, 105, 0.3)';
                      target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.currentTarget as HTMLDivElement;
                      target.style.background = 'rgba(30, 41, 59, 0.3)';
                      target.style.transform = 'scale(1)';
                    }}
                  >
                    <div style={{ 
                      fontSize: '1.8rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '0.5rem'
                    }}>
                      {stat.number}
                    </div>
                    <div style={{ 
                      fontSize: '0.9rem',
                      color: '#94a3b8'
                    }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Skills & Experience */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Skills Section */}
              <div style={{
                background: 'rgba(30, 41, 59, 0.3)',
                backdropFilter: 'blur(10px)',
                borderRadius: '1rem',
                padding: '2rem',
                border: '1px solid rgba(71, 85, 105, 0.3)',
                position: 'relative',
                overflow: 'hidden',
                animation: isVisible ? 'slideInRight 1s ease 0.4s both' : 'none'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #ec4899 0%, #8b5cf6 50%, #06b6d4 100%)'
                }}></div>
                
                <h3 style={{ 
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: '1.5rem'
                }}>
                  Technical Skills
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {skills.map((skill, index) => (
                    <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ color: '#cbd5e1', fontSize: '0.9rem', fontWeight: 500 }}>
                          {skill.name}
                        </span>
                        <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div style={{
                        height: '6px',
                        background: 'rgba(71, 85, 105, 0.5)',
                        borderRadius: '9999px',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          height: '100%',
                          background: skill.color,
                          borderRadius: '9999px',
                          width: isVisible ? `${skill.level}%` : '0%',
                          transition: 'width 1.5s ease',
                          transitionDelay: `${0.8 + index * 0.1}s`
                        }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Timeline */}
              <div style={{
                background: 'rgba(30, 41, 59, 0.3)',
                backdropFilter: 'blur(10px)',
                borderRadius: '1rem',
                padding: '2rem',
                border: '1px solid rgba(71, 85, 105, 0.3)',
                position: 'relative',
                overflow: 'hidden',
                animation: isVisible ? 'slideInRight 1s ease 0.6s both' : 'none'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #06b6d4 0%, #10b981 50%, #f59e0b 100%)'
                }}></div>
                
                <h3 style={{ 
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: '1.5rem'
                }}>
                  Experience
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {experiences.map((exp, index) => (
                    <div 
                      key={index}
                      style={{
                        position: 'relative',
                        paddingLeft: '1.5rem',
                        borderLeft: index === 0 ? '2px solid #8b5cf6' : '2px solid rgba(71, 85, 105, 0.5)'
                      }}
                    >
                      <div style={{
                        position: 'absolute',
                        left: '-6px',
                        top: '0.5rem',
                        width: '10px',
                        height: '10px',
                        background: index === 0 ? '#8b5cf6' : '#475569',
                        borderRadius: '50%',
                        animation: index === 0 ? 'glow 2s ease-in-out infinite' : 'none'
                      }}></div>
                      
                      <div style={{ marginBottom: '0.5rem' }}>
                        <h4 style={{ 
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          color: '#ffffff',
                          marginBottom: '0.2rem'
                        }}>
                          {exp.title}
                        </h4>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <span style={{ color: '#06b6d4', fontSize: '0.9rem', fontWeight: 500 }}>
                            {exp.company}
                          </span>
                          <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>
                            • {exp.period}
                          </span>
                        </div>
                      </div>
                      
                      <p style={{ 
                        fontSize: '0.9rem',
                        color: '#cbd5e1',
                        lineHeight: 1.6,
                        marginBottom: '0.8rem'
                      }}>
                        {exp.description}
                      </p>
                      
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {exp.technologies.map((tech) => (
                          <span 
                            key={tech}
                            style={{
                              padding: '0.2rem 0.6rem',
                              background: 'rgba(71, 85, 105, 0.5)',
                              borderRadius: '0.3rem',
                              fontSize: '0.7rem',
                              color: '#cbd5e1',
                              border: '1px solid rgba(100, 116, 139, 0.5)'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}