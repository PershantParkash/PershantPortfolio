"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function ProjectsSection() {
  const [mounted, setMounted] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [filter, setFilter] = useState('all');
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

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "fullstack",
      description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Handles 10,000+ concurrent users with 99.9% uptime.",
      problem: "Business needed scalable online store with complex inventory and order management",
      solution: "Built microservices architecture with React frontend, Node.js backend, and PostgreSQL database",
      impact: "Increased online sales by 300% and reduced order processing time by 60%",
      tech: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
      github: "https://github.com/username/ecommerce-platform",
      live: "https://ecommerce-demo.com",
      metrics: ["10K+ Users", "99.9% Uptime", "300% Sales ↗"],
      color: "#8b5cf6",
      bgGradient: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
      icon: "🛒"
    },
    {
      title: "Task Management System",
      category: "webapp",
      description: "Enterprise-grade project management tool with real-time collaboration, file sharing, and advanced reporting. Used by 50+ teams across multiple organizations.",
      problem: "Teams struggled with scattered project information and poor collaboration tools",
      solution: "Created unified platform with real-time updates, role-based access, and comprehensive analytics",
      impact: "Improved team productivity by 40% and reduced project delivery time by 25%",
      tech: ["Next.js", "TypeScript", "MongoDB", "Socket.io", "Tailwind CSS"],
      github: "https://github.com/username/task-manager",
      live: "https://task-manager-demo.com",
      metrics: ["50+ Teams", "40% Productivity ↗", "25% Faster Delivery"],
      color: "#06b6d4",
      bgGradient: "linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)",
      icon: "📋"
    },
    {
      title: "Mobile Banking App",
      category: "mobile",
      description: "Cross-platform mobile application for digital banking with biometric authentication, real-time transactions, and financial analytics. Serves 100,000+ active users.",
      problem: "Traditional banking apps lacked modern UX and essential features for digital-first customers",
      solution: "Developed React Native app with secure authentication, real-time data sync, and intuitive interface",
      impact: "Increased mobile banking adoption by 200% and improved customer satisfaction scores",
      tech: ["React Native", "Node.js", "GraphQL", "PostgreSQL", "Firebase"],
      github: "https://github.com/username/banking-app",
      live: "https://banking-app-demo.com",
      metrics: ["100K+ Users", "200% Adoption ↗", "5★ Rating"],
      color: "#10b981",
      bgGradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
      icon: "🏦"
    },
    {
      title: "Data Analytics Dashboard",
      category: "fullstack",
      description: "Real-time business intelligence platform with interactive charts, automated reporting, and data visualization. Processes millions of data points daily.",
      problem: "Company lacked insights into business performance and customer behavior patterns",
      solution: "Built comprehensive analytics platform with real-time data processing and interactive visualizations",
      impact: "Enabled data-driven decisions leading to 15% revenue increase and improved customer retention",
      tech: ["React", "D3.js", "Python", "Apache Kafka", "Elasticsearch"],
      github: "https://github.com/username/analytics-dashboard",
      live: "https://analytics-demo.com",
      metrics: ["1M+ Data Points", "15% Revenue ↗", "Real-time"],
      color: "#f59e0b",
      bgGradient: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
      icon: "📊"
    },
    {
      title: "API Gateway & Microservices",
      category: "backend",
      description: "Scalable microservices architecture with API gateway, service discovery, and load balancing. Handles 1M+ requests per day with sub-100ms response times.",
      problem: "Monolithic application couldn't scale and was difficult to maintain and deploy",
      solution: "Architected microservices with API gateway, containerization, and automated CI/CD pipeline",
      impact: "Improved system reliability by 99.5% and reduced deployment time from hours to minutes",
      tech: ["Node.js", "Docker", "Kubernetes", "Nginx", "Redis", "AWS"],
      github: "https://github.com/username/api-gateway",
      live: "https://api-docs.com",
      metrics: ["1M+ Requests/day", "<100ms Response", "99.5% Uptime"],
      color: "#ef4444",
      bgGradient: "linear-gradient(135deg, #ef4444 0%, #f87171 100%)",
      icon: "⚡"
    },
    {
      title: "Real-time Chat Application",
      category: "webapp",
      description: "High-performance messaging platform with end-to-end encryption, file sharing, and group chat capabilities. Supports 50,000+ concurrent connections.",
      problem: "Existing chat solutions lacked security, performance, and modern features",
      solution: "Built secure, scalable chat platform with WebSocket connections and encryption",
      impact: "Reduced communication costs by 70% and improved team collaboration efficiency",
      tech: ["React", "Socket.io", "Node.js", "MongoDB", "Redis", "Docker"],
      github: "https://github.com/username/chat-app",
      live: "https://chat-demo.com",
      metrics: ["50K+ Concurrent", "70% Cost Reduction", "E2E Encrypted"],
      color: "#ec4899",
      bgGradient: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
      icon: "💬"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'fullstack', label: 'Full-Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { key: 'webapp', label: 'Web Apps', count: projects.filter(p => p.category === 'webapp').length },
    { key: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { key: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

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
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px var(--glow-color); }
          50% { box-shadow: 0 0 30px var(--glow-color), 0 0 40px var(--glow-color); }
        }
        
        .project-card:hover .shimmer {
          animation: shimmer 1.5s ease-in-out;
        }
        
        .project-card:hover .project-icon {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
      
      <section 
        id="projects"
        ref={sectionRef}
        style={{ 
          minHeight: '100vh',
          background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 30%, #1e293b 70%, #334155 100%)',
          position: 'relative',
          overflow: 'hidden',
          padding: isLargeScreen ? '5rem 0' : '3rem 0'
        }}
      >
        {/* Animated background elements */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.08 }}>
          <div style={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            width: '20rem',
            height: '20rem',
            background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 12s ease-in-out infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '5%',
            width: '24rem',
            height: '24rem',
            background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 15s ease-in-out infinite reverse'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '15%',
            right: '20%',
            width: '18rem',
            height: '18rem',
            background: 'radial-gradient(circle, #10b981 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 10s ease-in-out infinite'
          }}></div>
        </div>

        {/* Circuit pattern overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='9' cy='9' r='1'/%3E%3Ccircle cx='51' cy='9' r='1'/%3E%3Ccircle cx='9' cy='51' r='1'/%3E%3Ccircle cx='51' cy='51' r='1'/%3E%3Cpath d='M9 9h42v1H9zM9 51h42v1H9zM9 9v42h1V9zM51 9v42h1V9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
                🚀 Featured Projects
              </span>
            </div>
            
            <h2 style={{ 
              fontSize: isLargeScreen ? '3rem' : '2.5rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '1rem',
              lineHeight: 1.2
            }}>
              Real-World{' '}
              <span style={{
                background: 'linear-gradient(135deg, #a78bfa 0%, #06b6d4 50%, #10b981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Solutions
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
              A selection of projects that demonstrate my ability to solve complex business problems 
              with scalable, maintainable solutions. Each project focuses on delivering measurable impact.
            </p>
          </div>

          {/* Filter Tabs */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '3rem',
            animation: isVisible ? 'fadeInUp 1s ease 0.4s both' : 'none'
          }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              background: 'rgba(30, 41, 59, 0.4)',
              backdropFilter: 'blur(10px)',
              borderRadius: '1rem',
              padding: '0.5rem',
              border: '1px solid rgba(71, 85, 105, 0.3)'
            }}>
              {filters.map((filterItem) => (
                <button
                  key={filterItem.key}
                  onClick={() => setFilter(filterItem.key)}
                  style={{
                    padding: '0.6rem 1.2rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    background: filter === filterItem.key ? 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)' : 'transparent',
                    color: filter === filterItem.key ? '#ffffff' : '#cbd5e1'
                  }}
                  onMouseEnter={(e) => {
                    if (filter !== filterItem.key) {
                      const target = e.target as HTMLButtonElement;
                      target.style.background = 'rgba(71, 85, 105, 0.5)';
                      target.style.color = '#ffffff';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (filter !== filterItem.key) {
                      const target = e.target as HTMLButtonElement;
                      target.style.background = 'transparent';
                      target.style.color = '#cbd5e1';
                    }
                  }}
                >
                  {filterItem.label}
                  <span style={{
                    marginLeft: '0.5rem',
                    padding: '0.1rem 0.4rem',
                    borderRadius: '9999px',
                    fontSize: '0.7rem',
                    background: filter === filterItem.key ? 'rgba(255,255,255,0.2)' : 'rgba(71, 85, 105, 0.5)'
                  }}>
                    {filterItem.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isLargeScreen ? 'repeat(2, 1fr)' : '1fr',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="project-card"
                style={{
                  background: 'rgba(30, 41, 59, 0.4)',
                  backdropFilter: 'blur(15px)',
                  borderRadius: '1.5rem',
                  border: '1px solid rgba(71, 85, 105, 0.3)',
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  animation: isVisible ? `fadeInUp 1s ease ${0.6 + index * 0.1}s both` : 'none',
                  // '--glow-color': `${project.color}40`
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.transform = 'translateY(-8px) scale(1.02)';
                  target.style.background = 'rgba(51, 65, 85, 0.6)';
                  target.style.borderColor = project.color;
                  target.style.boxShadow = `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px ${project.color}40`;
                  setActiveProject(index);
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
                    transform: 'translateX(-100%)',
                    zIndex: 1
                  }}
                ></div>

                {/* Project Header */}
                <div style={{
                  background: project.bgGradient,
                  padding: '2rem',
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
                    backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)'
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
                        fontSize: '1.4rem',
                        fontWeight: 600,
                        color: '#ffffff',
                        marginBottom: '0.5rem'
                      }}>
                        {project.title}
                      </h3>
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem'
                      }}>
                        {project.metrics.map((metric) => (
                          <span
                            key={metric}
                            style={{
                              padding: '0.2rem 0.6rem',
                              background: 'rgba(255,255,255,0.2)',
                              backdropFilter: 'blur(10px)',
                              borderRadius: '9999px',
                              fontSize: '0.7rem',
                              color: '#ffffff',
                              fontWeight: 500
                            }}
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div 
                      className="project-icon"
                      style={{
                        fontSize: '2.5rem',
                        opacity: 0.9
                      }}
                    >
                      {project.icon}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div style={{ padding: '2rem' }}>
                  <p style={{
                    fontSize: '0.95rem',
                    color: '#cbd5e1',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem'
                  }}>
                    {project.description}
                  </p>

                  {/* Problem, Solution, Impact */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    marginBottom: '1.5rem'
                  }}>
                    <div>
                      <h4 style={{
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: '#ef4444',
                        marginBottom: '0.3rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        Problem
                      </h4>
                      <p style={{
                        fontSize: '0.8rem',
                        color: '#94a3b8',
                        lineHeight: 1.5
                      }}>
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h4 style={{
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: '#10b981',
                        marginBottom: '0.3rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        Solution
                      </h4>
                      <p style={{
                        fontSize: '0.8rem',
                        color: '#94a3b8',
                        lineHeight: 1.5
                      }}>
                        {project.solution}
                      </p>
                    </div>
                    <div>
                      <h4 style={{
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: '#06b6d4',
                        marginBottom: '0.3rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        Impact
                      </h4>
                      <p style={{
                        fontSize: '0.8rem',
                        color: '#94a3b8',
                        lineHeight: 1.5
                      }}>
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      marginBottom: '0.8rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Tech Stack
                    </h4>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.4rem'
                    }}>
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            padding: '0.3rem 0.8rem',
                            background: 'rgba(71, 85, 105, 0.5)',
                            borderRadius: '0.4rem',
                            fontSize: '0.75rem',
                            color: '#cbd5e1',
                            border: '1px solid rgba(100, 116, 139, 0.5)',
                            fontWeight: 500
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{
                    display: 'flex',
                    gap: '0.8rem'
                  }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        padding: '0.8rem 1rem',
                        background: 'rgba(71, 85, 105, 0.5)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '0.6rem',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        color: '#cbd5e1',
                        textDecoration: 'none',
                        textAlign: 'center',
                        border: '1px solid rgba(100, 116, 139, 0.5)',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      onMouseEnter={(e) => {
                        const target = e.target as HTMLAnchorElement;
                        target.style.background = 'rgba(100, 116, 139, 0.7)';
                        target.style.color = '#ffffff';
                        target.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        const target = e.target as HTMLAnchorElement;
                        target.style.background = 'rgba(71, 85, 105, 0.5)';
                        target.style.color = '#cbd5e1';
                        target.style.transform = 'scale(1)';
                      }}
                    >
                      <svg style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        padding: '0.8rem 1rem',
                        background: project.bgGradient,
                        borderRadius: '0.6rem',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        color: '#ffffff',
                        textDecoration: 'none',
                        textAlign: 'center',
                        border: 'none',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 4px 15px ${project.color}40`
                      }}
                      onMouseEnter={(e) => {
                        const target = e.target as HTMLAnchorElement;
                        target.style.transform = 'scale(1.05)';
                        target.style.boxShadow = `0 8px 25px ${project.color}60`;
                      }}
                      onMouseLeave={(e) => {
                        const target = e.target as HTMLAnchorElement;
                        target.style.transform = 'scale(1)';
                        target.style.boxShadow = `0 4px 15px ${project.color}40`;
                      }}
                    >
                      <svg style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
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
              maxWidth: '600px'
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
                fontSize: '2rem',
                marginBottom: '1rem'
              }}>
                🚀
              </div>
              
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '1rem'
              }}>
                Want to see more?
              </h3>
              
              <p style={{
                fontSize: '1rem',
                color: '#cbd5e1',
                lineHeight: 1.6,
                marginBottom: '2rem'
              }}>
                Check out my GitHub for additional projects, open-source contributions, and code samples. 
                I'm always working on something new!
              </p>
              
              <div style={{
                display: 'flex',
                flexDirection: isLargeScreen ? 'row' : 'column',
                gap: '1rem',
                justifyContent: 'center'
              }}>
                <a
                  href="https://github.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.8rem 1.5rem',
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                    borderRadius: '0.75rem',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    textDecoration: 'none',
                    border: 'none',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLAnchorElement;
                    target.style.transform = 'scale(1.05)';
                    target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLAnchorElement;
                    target.style.transform = 'scale(1)';
                    target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
                  }}
                >
                  <svg style={{ width: '1.1rem', height: '1.1rem', marginRight: '0.5rem' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View GitHub Profile
                </a>
                
                <a
                  href="#contact"
                  style={{
                    padding: '0.8rem 1.5rem',
                    background: 'rgba(71, 85, 105, 0.5)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '0.75rem',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#cbd5e1',
                    textDecoration: 'none',
                    border: '1px solid rgba(100, 116, 139, 0.5)',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLAnchorElement;
                    target.style.background = 'rgba(100, 116, 139, 0.7)';
                    target.style.color = '#ffffff';
                    target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLAnchorElement;
                    target.style.background = 'rgba(71, 85, 105, 0.5)';
                    target.style.color = '#cbd5e1';
                    target.style.transform = 'scale(1)';
                  }}
                >
                  <svg style={{ width: '1.1rem', height: '1.1rem', marginRight: '0.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Let's Discuss a Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}