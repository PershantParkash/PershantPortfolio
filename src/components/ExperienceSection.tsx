"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function ExperienceSection() {
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
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

  const experiences = [
    {
      company: "TechCorp Solutions",
      role: "Senior Full-Stack Developer",
      period: "2022 - Present",
      duration: "2+ years",
      description: "Leading development of enterprise-scale applications and mentoring junior developers while architecting scalable solutions.",
      achievements: [
        "Architected and deployed microservices platform serving 1M+ daily requests",
        "Reduced application load time by 60% through performance optimization",
        "Mentored 5 junior developers and established coding standards",
        "Implemented CI/CD pipeline reducing deployment time by 80%"
      ],
      tech: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "Kubernetes"],
      metrics: ["1M+ Requests/day", "60% Performance ↗", "5 Developers Mentored"],
      color: "#8b5cf6",
      bgGradient: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
      icon: "🚀",
      isActive: true
    },
    {
      company: "Digital Innovations Inc",
      role: "Full-Stack Developer",
      period: "2020 - 2022",
      duration: "2 years",
      description: "Developed scalable web applications and mobile solutions for diverse client base with focus on performance and user experience.",
      achievements: [
        "Built 10+ client applications with 99.9% uptime SLA",
        "Developed React Native app with 50K+ downloads",
        "Optimized database queries improving performance by 40%",
        "Collaborated with design team to improve UX metrics by 35%"
      ],
      tech: ["React", "React Native", "Node.js", "MongoDB", "Express.js", "Firebase"],
      metrics: ["10+ Applications", "50K+ Downloads", "99.9% Uptime"],
      color: "#06b6d4",
      bgGradient: "linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)",
      icon: "💻",
      isActive: false
    },
    {
      company: "StartupXYZ",
      role: "Frontend Developer",
      period: "2019 - 2020",
      duration: "1 year",
      description: "Focused on creating responsive, user-friendly interfaces and improving user experience across multiple platforms.",
      achievements: [
        "Redesigned main application UI improving conversion rates by 25%",
        "Implemented responsive design across all platforms",
        "Reduced bundle size by 30% through code optimization",
        "Established component library used across 5 projects"
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "Redux", "Jest", "Webpack"],
      metrics: ["25% Conversion ↗", "30% Bundle Size ↓", "5 Projects Impact"],
      color: "#10b981",
      bgGradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      isActive: false
    }
  ];

  const totalExperience = "3+";
  const companiesWorked = experiences.length;
  const projectsCompleted = "20+";

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
        
        @keyframes timelineFill {
          from {
            height: 0%;
          }
          to {
            height: 100%;
          }
        }
        
        .experience-card:hover .experience-icon {
          animation: float 2s ease-in-out infinite;
        }
        
        .timeline-line {
          animation: timelineFill 2s ease 1s both;
        }
      `}</style>
      
      <section 
        id="experience"
        ref={sectionRef}
        style={{ 
          minHeight: '100vh',
          background: 'linear-gradient(180deg, #334155 0%, #1e293b 30%, #0f172a 70%, #1e293b 100%)',
          position: 'relative',
          overflow: 'hidden',
          padding: isLargeScreen ? '5rem 0' : '3rem 0'
        }}
      >
        {/* Animated background elements */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.08 }}>
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '15%',
            width: '22rem',
            height: '22rem',
            background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 14s ease-in-out infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '60%',
            right: '10%',
            width: '18rem',
            height: '18rem',
            background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 12s ease-in-out infinite reverse'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '10%',
            left: '25%',
            width: '20rem',
            height: '20rem',
            background: 'radial-gradient(circle, #10b981 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 16s ease-in-out infinite'
          }}></div>
        </div>

        {/* Dot pattern overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '25px 25px',
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
                Professional Journey
              </span>
            </div>
            
            <h2 style={{ 
              fontSize: isLargeScreen ? '3rem' : '2.5rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '1rem',
              lineHeight: 1.2
            }}>
              Career{' '}
              <span style={{
                background: 'linear-gradient(135deg, #a78bfa 0%, #06b6d4 50%, #10b981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Evolution
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
              A progressive journey in software development, focusing on scalable solutions 
              and continuous improvement in both technical and leadership skills.
            </p>
          </div>

          {/* Experience Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isLargeScreen ? 'repeat(3, 1fr)' : '1fr',
            gap: '1.5rem',
            marginBottom: '4rem',
            animation: isVisible ? 'fadeInUp 1s ease 0.4s both' : 'none'
          }}>
            {[
              { label: 'Years Experience', value: totalExperience, icon: '⏱️' },
              { label: 'Companies', value: companiesWorked, icon: '🏢' },
              { label: 'Projects Delivered', value: projectsCompleted, icon: '🚀' }
            ].map((stat, index) => (
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
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '0.5rem'
                }}>
                  {stat.value}
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

          {/* Timeline Section */}
          <div style={{ position: 'relative' }}>
            {/* Timeline Line */}
            <div style={{
              position: 'absolute',
              left: isLargeScreen ? '50%' : '2rem',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'rgba(71, 85, 105, 0.5)',
              transform: isLargeScreen ? 'translateX(-50%)' : 'none'
            }}>
              <div 
                className="timeline-line"
                style={{
                  width: '100%',
                  background: 'linear-gradient(180deg, #8b5cf6 0%, #06b6d4 50%, #10b981 100%)',
                  height: isVisible ? '100%' : '0%',
                  transition: 'height 2s ease 1s'
                }}
              ></div>
            </div>

            {experiences.map((experience, index) => (
              <div
                key={experience.company}
                className="experience-card"
                style={{
                  position: 'relative',
                  marginBottom: '3rem',
                  animation: isVisible ? `fadeInUp 1s ease ${0.6 + index * 0.2}s both` : 'none'
                }}
              >
                {/* Timeline Dot */}
                <div style={{
                  position: 'absolute',
                  left: isLargeScreen ? '50%' : '2rem',
                  top: '2rem',
                  width: '1rem',
                  height: '1rem',
                  borderRadius: '50%',
                  background: experience.isActive ? experience.color : 'rgba(71, 85, 105, 0.8)',
                  border: '3px solid #1e293b',
                  transform: isLargeScreen ? 'translateX(-50%)' : 'translateX(-50%)',
                  zIndex: 10,
                  boxShadow: experience.isActive ? `0 0 20px ${experience.color}60` : 'none',
                  animation: experience.isActive ? 'glow 2s ease-in-out infinite' : 'none',
                  // '--glow-color': `${experience.color}60`
                }}></div>

                {/* Experience Content */}
                <div style={{
                  marginLeft: isLargeScreen ? (index % 2 === 0 ? '0' : 'auto') : '4rem',
                  marginRight: isLargeScreen ? (index % 2 === 0 ? 'auto' : '0') : '0',
                  width: isLargeScreen ? '45%' : 'auto',
                  paddingLeft: isLargeScreen ? (index % 2 === 0 ? '0' : '2rem') : '0',
                  paddingRight: isLargeScreen ? (index % 2 === 0 ? '2rem' : '0') : '0'
                }}>
                  <div style={{
                    background: 'rgba(30, 41, 59, 0.4)',
                    backdropFilter: 'blur(15px)',
                    borderRadius: '1.5rem',
                    padding: '2rem',
                    border: '1px solid rgba(71, 85, 105, 0.3)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget as HTMLDivElement;
                    target.style.background = 'rgba(51, 65, 85, 0.6)';
                    target.style.borderColor = experience.color;
                    target.style.transform = 'scale(1.02)';
                    target.style.boxShadow = `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px ${experience.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget as HTMLDivElement;
                    target.style.background = 'rgba(30, 41, 59, 0.4)';
                    target.style.borderColor = 'rgba(71, 85, 105, 0.3)';
                    target.style.transform = 'scale(1)';
                    target.style.boxShadow = 'none';
                  }}
                  >
                    {/* Header with gradient */}
                    <div style={{
                      background: experience.bgGradient,
                      borderRadius: '1rem',
                      padding: '1.5rem',
                      marginBottom: '1.5rem',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0,0,0,0.1)',
                        backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)'
                      }}></div>
                      
                      <div style={{
                        position: 'relative',
                        zIndex: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}>
                        <div>
                          <h3 style={{
                            fontSize: '1.3rem',
                            fontWeight: 600,
                            color: '#ffffff',
                            marginBottom: '0.3rem'
                          }}>
                            {experience.role}
                          </h3>
                          <h4 style={{
                            fontSize: '1.1rem',
                            color: 'rgba(255,255,255,0.9)',
                            marginBottom: '0.5rem'
                          }}>
                            {experience.company}
                          </h4>
                          <div style={{
                            display: 'flex',
                            gap: '1rem',
                            fontSize: '0.8rem',
                            color: 'rgba(255,255,255,0.8)'
                          }}>
                            <span>{experience.period}</span>
                            <span>•</span>
                            <span>{experience.duration}</span>
                          </div>
                        </div>
                        <div 
                          className="experience-icon"
                          style={{
                            fontSize: '2rem',
                            opacity: 0.9
                          }}
                        >
                          {experience.icon}
                        </div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '1.5rem'
                    }}>
                      {experience.metrics.map((metric) => (
                        <span
                          key={metric}
                          style={{
                            padding: '0.3rem 0.8rem',
                            background: 'rgba(71, 85, 105, 0.5)',
                            borderRadius: '9999px',
                            fontSize: '0.7rem',
                            color: '#cbd5e1',
                            border: '1px solid rgba(100, 116, 139, 0.5)',
                            fontWeight: 500
                          }}
                        >
                          {metric}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p style={{
                      fontSize: '1rem',
                      color: '#cbd5e1',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem'
                    }}>
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h5 style={{
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: '#ffffff',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        Key Achievements
                      </h5>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <div
                            key={achievementIndex}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.8rem'
                            }}
                          >
                            <div style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              background: experience.color,
                              marginTop: '0.5rem',
                              flexShrink: 0,
                              animation: 'pulse 2s infinite'
                            }}></div>
                            <span style={{
                              fontSize: '0.85rem',
                              color: '#94a3b8',
                              lineHeight: 1.5
                            }}>
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 style={{
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: '#ffffff',
                        marginBottom: '0.8rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        Technologies Used
                      </h5>
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem'
                      }}>
                        {experience.tech.map((tech) => (
                          <span
                            key={tech}
                            style={{
                              padding: '0.4rem 0.8rem',
                              background: 'rgba(71, 85, 105, 0.5)',
                              borderRadius: '0.4rem',
                              fontSize: '0.75rem',
                              color: '#cbd5e1',
                              border: '1px solid rgba(100, 116, 139, 0.5)',
                              fontWeight: 500,
                              transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                              const target = e.target as HTMLSpanElement;
                              target.style.background = experience.color + '40';
                              target.style.borderColor = experience.color;
                              target.style.color = '#ffffff';
                            }}
                            onMouseLeave={(e) => {
                              const target = e.target as HTMLSpanElement;
                              target.style.background = 'rgba(71, 85, 105, 0.5)';
                              target.style.borderColor = 'rgba(100, 116, 139, 0.5)';
                              target.style.color = '#cbd5e1';
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Career Philosophy */}
          <div style={{
            textAlign: 'center',
            marginTop: '4rem',
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
                🎯
              </div>
              
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '1rem'
              }}>
                Career Philosophy
              </h3>
              
              <p style={{
                fontSize: '1rem',
                color: '#cbd5e1',
                lineHeight: 1.7
              }}>
                I believe in continuous learning and growth. Each role has taught me valuable lessons 
                about scalable architecture, team collaboration, and delivering business value through 
                technology. I'm always looking for new challenges that push me to grow both technically 
                and professionally.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}