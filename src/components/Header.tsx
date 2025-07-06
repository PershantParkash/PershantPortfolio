"use client";

import React, { useState, useEffect } from 'react';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setMounted(true);
    
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    handleResize();
    handleScroll();
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    // { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string, sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setActiveSection(sectionId);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .mobile-menu {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
      
      <header 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: isScrolled 
            ? 'rgba(15, 23, 42, 0.95)' 
            : 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(15px)',
          borderBottom: '1px solid rgba(71, 85, 105, 0.3)',
          transition: 'all 0.3s ease',
          animation: mounted ? 'fadeInDown 0.8s ease both' : 'none'
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          position: 'relative'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '70px'
          }}>
            
            {/* Logo/Brand */}
            <button
              onClick={() => handleNavClick('#home', 'home')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0
              }}
            >
              <h1 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#ffffff',
                margin: 0,
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLHeadingElement;
                target.style.background = 'linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)';
                // target.style.WebkitBackgroundClip = 'text';
                // target.style.WebkitTextFillColor = 'transparent';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLHeadingElement;
                target.style.background = 'none';
                // target.style.WebkitBackgroundClip = 'unset';
                // target.style.WebkitTextFillColor = 'unset';
                target.style.color = '#ffffff';
              }}
              >
                Pershant Parkash
              </h1>
            </button>

            {/* Desktop Navigation */}
            {isLargeScreen && (
              <nav style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem'
              }}>
                {navItems.map((item) => {
                  const sectionId = item.href.substring(1);
                  const isActive = activeSection === sectionId;
                  
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href, sectionId)}
                      style={{
                        background: 'none',
                        border: 'none',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        color: isActive ? '#ffffff' : '#cbd5e1',
                        position: 'relative',
                        padding: '0.5rem 0'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          const target = e.target as HTMLButtonElement;
                          target.style.color = '#ffffff';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          const target = e.target as HTMLButtonElement;
                          target.style.color = '#cbd5e1';
                        }
                      }}
                    >
                      {item.name}
                      
                      {/* Active indicator */}
                      {isActive && (
                        <div style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '2px',
                          background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                          borderRadius: '1px'
                        }}></div>
                      )}
                    </button>
                  );
                })}
              </nav>
            )}

            {/* Desktop CTA Button */}
            {isLargeScreen && (
              <button
                onClick={() => handleNavClick('#contact', 'contact')}
                style={{
                  padding: '0.6rem 1.5rem',
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                  borderRadius: '0.5rem',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.transform = 'translateY(-2px)';
                  target.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.3)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.transform = 'translateY(0)';
                  target.style.boxShadow = 'none';
                }}
              >
                Get In Touch
              </button>
            )}

            {/* Mobile Menu Button */}
            {!isLargeScreen && (
              <button
                onClick={toggleMobileMenu}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '0.5rem',
                  background: 'rgba(71, 85, 105, 0.5)',
                  border: 'none',
                  color: '#cbd5e1',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '3px'
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.background = 'rgba(100, 116, 139, 0.7)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.background = 'rgba(71, 85, 105, 0.5)';
                }}
              >
                {!isMobileMenuOpen ? (
                  <>
                    <div style={{
                      width: '20px',
                      height: '2px',
                      background: 'currentColor',
                      borderRadius: '1px',
                      transition: 'all 0.3s ease'
                    }}></div>
                    <div style={{
                      width: '20px',
                      height: '2px',
                      background: 'currentColor',
                      borderRadius: '1px',
                      transition: 'all 0.3s ease'
                    }}></div>
                    <div style={{
                      width: '20px',
                      height: '2px',
                      background: 'currentColor',
                      borderRadius: '1px',
                      transition: 'all 0.3s ease'
                    }}></div>
                  </>
                ) : (
                  <>
                    <div style={{
                      width: '20px',
                      height: '2px',
                      background: 'currentColor',
                      borderRadius: '1px',
                      transform: 'rotate(45deg) translateY(5px)',
                      transition: 'all 0.3s ease'
                    }}></div>
                    <div style={{
                      width: '20px',
                      height: '2px',
                      background: 'currentColor',
                      borderRadius: '1px',
                      opacity: 0,
                      transition: 'all 0.3s ease'
                    }}></div>
                    <div style={{
                      width: '20px',
                      height: '2px',
                      background: 'currentColor',
                      borderRadius: '1px',
                      transform: 'rotate(-45deg) translateY(-5px)',
                      transition: 'all 0.3s ease'
                    }}></div>
                  </>
                )}
              </button>
            )}
          </div>

          {/* Mobile Menu */}
          {!isLargeScreen && isMobileMenuOpen && (
            <div 
              className="mobile-menu"
              style={{
                position: 'absolute',
                top: '100%',
                left: '1.5rem',
                right: '1.5rem',
                background: 'rgba(15, 23, 42, 0.95)',
                backdropFilter: 'blur(15px)',
                borderRadius: '0.75rem',
                border: '1px solid rgba(71, 85, 105, 0.5)',
                padding: '1.5rem',
                marginTop: '0.5rem',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Mobile Navigation */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                {navItems.map((item) => {
                  const sectionId = item.href.substring(1);
                  const isActive = activeSection === sectionId;
                  
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href, sectionId)}
                      style={{
                        padding: '0.75rem 1rem',
                        borderRadius: '0.5rem',
                        fontSize: '1rem',
                        fontWeight: 500,
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        background: isActive 
                          ? 'rgba(139, 92, 246, 0.2)' 
                          : 'transparent',
                        color: isActive ? '#ffffff' : '#cbd5e1',
                        textAlign: 'left',
                        borderLeft: isActive ? '3px solid #8b5cf6' : '3px solid transparent'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          const target = e.target as HTMLButtonElement;
                          target.style.background = 'rgba(71, 85, 105, 0.3)';
                          target.style.color = '#ffffff';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          const target = e.target as HTMLButtonElement;
                          target.style.background = 'transparent';
                          target.style.color = '#cbd5e1';
                        }
                      }}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>

              {/* Mobile CTA Button */}
              <button
                onClick={() => handleNavClick('#contact', 'contact')}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.transform = 'translateY(-1px)';
                  target.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.3)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.transform = 'translateY(0)';
                  target.style.boxShadow = 'none';
                }}
              >
                Get In Touch
              </button>
            </div>
          )}
        </div>
      </header>
      
      {/* Spacer to prevent content overlap */}
      <div style={{ height: '70px' }}></div>
    </>
  );
}