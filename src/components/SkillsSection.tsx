"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function SkillsSection() {
  const [mounted, setMounted] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
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

  const skillCategories = [
    {
      title: "Frontend",
      description: "Modern web technologies and frameworks",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      color: "#8b5cf6",
      bgGradient: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
      skills: [
        { name: "React", level: 95, color: "#61dafb" },
        { name: "Next.js", level: 90, color: "#ffffff" },
        { name: "TypeScript", level: 88, color: "#3178c6" },
        { name: "Tailwind CSS", level: 92, color: "#06b6d4" },
        { name: "React Native", level: 85, color: "#61dafb" },
        { name: "Vue.js", level: 80, color: "#4fc08d" }
      ]
    },
    {
      title: "Backend",
      description: "Server-side development and APIs",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      color: "#06b6d4",
      bgGradient: "linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)",
      skills: [
        { name: "Node.js", level: 92, color: "#339933" },
        { name: "Express.js", level: 90, color: "#ffffff" },
        { name: "PostgreSQL", level: 85, color: "#336791" },
        { name: "MongoDB", level: 82, color: "#47a248" },
        { name: "GraphQL", level: 78, color: "#e10098" },
        { name: "Python", level: 75, color: "#3776ab" }
      ]
    },
    {
      title: "DevOps & Tools",
      description: "Deployment, infrastructure, and development tools",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      color: "#10b981",
      bgGradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
      skills: [
        { name: "Docker", level: 85, color: "#2496ed" },
        { name: "Git", level: 95, color: "#f05032" },
        { name: "AWS", level: 80, color: "#ff9900" },
        { name: "CI/CD", level: 82, color: "#4285f4" },
        { name: "Linux", level: 88, color: "#fcc624" },
        { name: "Nginx", level: 75, color: "#009639" }
      ]
    }
  ];

  const learningSkills = [
    { name: "Kubernetes", progress: 60 },
    { name: "Rust", progress: 45 },
    { name: "Machine Learning", progress: 55 },
    { name: "WebAssembly", progress: 40 }
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
        
        @keyframes progressFill {
          from {
            width: 0%;
          }
          to {
            width: var(--progress-width);
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .skill-card:hover .shimmer {
          animation: shimmer 1.5s ease-in-out;
        }
      `}</style>
      
      <section 
        id="skills"
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
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
          <div style={{
            position: 'absolute',
            top: '15%',
            left: '10%',
            width: '18rem',
            height: '18rem',
            background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 8s ease-in-out infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '60%',
            right: '15%',
            width: '22rem',
            height: '22rem',
            background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 10s ease-in-out infinite reverse'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '20%',
            left: '20%',
            width: '16rem',
            height: '16rem',
            background: 'radial-gradient(circle, #10b981 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 6s ease-in-out infinite'
          }}></div>
        </div>

        {/* Hexagon pattern overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpolygon points='30 0 60 15 60 45 30 60 0 45 0 15'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
              background: 'rgba(30, 41, 59, 0.6)',
              backdropFilter: 'blur(12px)',
              borderRadius: '9999px',
              border: '1px solid rgba(71, 85, 105, 0.5)',
              marginBottom: '1rem'
            }}>
              <span style={{ color: '#94a3b8', fontSize: '0.9rem', fontFamily: 'monospace' }}>
                Skills & Technologies
              </span>
            </div>
            
            <h2 style={{ 
              fontSize: isLargeScreen ? '3rem' : '2.5rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '1rem',
              lineHeight: 1.2
            }}>
              Technical{' '}
              <span style={{
                background: 'linear-gradient(135deg, #a78bfa 0%, #06b6d4 50%, #10b981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Expertise
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
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              A comprehensive toolkit for building modern, scalable applications. 
              I continuously expand my skillset to stay current with industry best practices.
            </p>
          </div>

          {/* Skills Categories */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isLargeScreen ? 'repeat(3, 1fr)' : '1fr',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="skill-card"
                style={{
                  background: 'rgba(30, 41, 59, 0.4)',
                  backdropFilter: 'blur(15px)',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  border: '1px solid rgba(71, 85, 105, 0.3)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  animation: isVisible ? `slideInUp 1s ease ${0.4 + categoryIndex * 0.2}s both` : 'none'
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.transform = 'translateY(-8px) scale(1.02)';
                  target.style.background = 'rgba(51, 65, 85, 0.6)';
                  target.style.borderColor = category.color;
                  target.style.boxShadow = `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px ${category.color}40`;
                  setActiveCategory(categoryIndex);
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.transform = 'translateY(0) scale(1)';
                  target.style.background = 'rgba(30, 41, 59, 0.4)';
                  target.style.borderColor = 'rgba(71, 85, 105, 0.3)';
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
                    transform: 'translateX(-100%)'
                  }}
                ></div>

                {/* Category header */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '0.5rem'
                  }}>
                    <div style={{
                      color: category.color,
                      marginRight: '0.8rem',
                      animation: 'float 3s ease-in-out infinite'
                    }}>
                      {category.icon}
                    </div>
                    <h3 style={{
                      fontSize: '1.4rem',
                      fontWeight: 600,
                      color: '#ffffff'
                    }}>
                      {category.title}
                    </h3>
                  </div>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#94a3b8',
                    lineHeight: 1.5
                  }}>
                    {category.description}
                  </p>
                </div>

                {/* Skills list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: skill.color,
                            animation: 'pulse 2s infinite'
                          }}></div>
                          <span style={{
                            color: '#cbd5e1',
                            fontSize: '0.9rem',
                            fontWeight: 500
                          }}>
                            {skill.name}
                          </span>
                        </div>
                        <span style={{
                          color: '#94a3b8',
                          fontSize: '0.8rem',
                          fontFamily: 'monospace'
                        }}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div style={{
                        height: '6px',
                        background: 'rgba(71, 85, 105, 0.4)',
                        borderRadius: '9999px',
                        overflow: 'hidden',
                        position: 'relative'
                      }}>
                        <div style={{
                          height: '100%',
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                          borderRadius: '9999px',
                          width: isVisible ? `${skill.level}%` : '0%',
                          transition: 'width 1.5s ease',
                          transitionDelay: `${1 + categoryIndex * 0.3 + skillIndex * 0.1}s`,
                          boxShadow: `0 0 10px ${skill.color}40`
                        }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Currently Learning Section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isLargeScreen ? '1fr 1fr' : '1fr',
            gap: '2rem',
            animation: isVisible ? 'fadeInUp 1s ease 1.2s both' : 'none'
          }}>
            
            {/* Learning Philosophy */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.4)',
              backdropFilter: 'blur(15px)',
              borderRadius: '1.5rem',
              padding: '2rem',
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
                background: 'linear-gradient(90deg, #ec4899 0%, #8b5cf6 50%, #06b6d4 100%)'
              }}></div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <div style={{
                  color: '#ec4899',
                  marginRight: '0.8rem'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3z"/>
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3z"/>
                    <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3z"/>
                    <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3z"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#ffffff'
                }}>
                  Learning Philosophy
                </h3>
              </div>
              
              <p style={{
                fontSize: '1rem',
                color: '#cbd5e1',
                lineHeight: 1.7,
                marginBottom: '1rem'
              }}>
                I believe in mastering fundamentals first, then building specialized expertise. 
                This approach allows me to quickly adapt to new technologies while maintaining 
                high code quality and architectural principles.
              </p>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {['Continuous Learning', 'Best Practices', 'Problem Solving', 'Innovation'].map((principle) => (
                  <span
                    key={principle}
                    style={{
                      padding: '0.3rem 0.8rem',
                      background: 'rgba(71, 85, 105, 0.5)',
                      borderRadius: '9999px',
                      fontSize: '0.8rem',
                      color: '#cbd5e1',
                      border: '1px solid rgba(100, 116, 139, 0.5)'
                    }}
                  >
                    {principle}
                  </span>
                ))}
              </div>
            </div>

            {/* Currently Learning */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.4)',
              backdropFilter: 'blur(15px)',
              borderRadius: '1.5rem',
              padding: '2rem',
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
                background: 'linear-gradient(90deg, #10b981 0%, #06b6d4 50%, #8b5cf6 100%)'
              }}></div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  color: '#10b981',
                  marginRight: '0.8rem'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M2 12h20"/>
                    <path d="M12 2a10 10 0 0 1 10 10"/>
                    <path d="M12 2a10 10 0 0 0-10 10"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#ffffff'
                }}>
                  Currently Learning
                </h3>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {learningSkills.map((skill, index) => (
                  <div key={skill.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{
                        color: '#cbd5e1',
                        fontSize: '0.9rem',
                        fontWeight: 500
                      }}>
                        {skill.name}
                      </span>
                      <span style={{
                        color: '#94a3b8',
                        fontSize: '0.8rem',
                        fontFamily: 'monospace'
                      }}>
                        {skill.progress}%
                      </span>
                    </div>
                    
                    <div style={{
                      height: '4px',
                      background: 'rgba(71, 85, 105, 0.4)',
                      borderRadius: '9999px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        height: '100%',
                        background: 'linear-gradient(90deg, #f59e0b, #eab308)',
                        borderRadius: '9999px',
                        width: isVisible ? `${skill.progress}%` : '0%',
                        transition: 'width 1.5s ease',
                        transitionDelay: `${1.5 + index * 0.2}s`
                      }}></div>
                    </div>
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