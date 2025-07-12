import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(''); // Changed from 'services' to empty string
    const [hasAnimated, setHasAnimated] = useState(false);
    const location = useLocation();

    // Trigger navbar entrance animation on component mount
    useEffect(() => {
        const timer = setTimeout(() => {
            setHasAnimated(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    // Clear active section when navigating away from home page
    useEffect(() => {
        if (location.pathname !== '/') {
            setActiveSection('');
        }
    }, [location.pathname]);// Handle click outside to close mobile menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobileMenuOpen && !event.target.closest('.navbar-nav') && !event.target.closest('.mobile-menu-btn')) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobileMenuOpen]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }; 
    
    const handleNavClick = (section) => {
        console.log(`Navigating to ${section}`);
        // Close mobile menu when nav item is clicked
        setIsMobileMenuOpen(false);

        // Set active section
        setActiveSection(section);

        // Only scroll to section if we're on the home page
        if (location.pathname === '/') {
            const sectionMap = {
                'testimonial': 'team-section', // Navigate to the Meet Our Team section
                'services': 'project-showcase', // Services should go to project showcase
                'join-us': 'contact-form' // Join us should go to contact form
            };

            const targetId = sectionMap[section];
            if (targetId) {
                const element = document.getElementById(targetId);
                if (element) {
                    // Adjust scroll offset based on section type
                    let navbarHeight = 100; // Fixed navbar height
                    let additionalOffset = 20; // Default additional offset

                    const offsetTop = element.offsetTop - navbarHeight - additionalOffset;

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                } else {
                    console.warn(`Element with ID '${targetId}' not found`);
                }
            }
        }
    };
    
    return (
        <header
            className={`navbar-container bg-primary ${isMobileMenuOpen ? 'mobile-menu-open' : ''} transition-all duration-1000 ease-out ${hasAnimated ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-full'}`}
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: hasAnimated ? 'translateY(0)' : 'translateY(-100%)',
                transformOrigin: 'top center'
            }}
        >
            <div className="navbar-layout">

                {/* Logo */}
                <div className="navbar-logo-container">
                    <Link to="/">
                        <img
                            src="/images/mmlconcepts_logo.png"
                            alt="Company Logo"
                            className="navbar-logo"
                        />
                    </Link>
                </div>                {/* Mobile Menu Button */}
                <button
                    className={`mobile-menu-btn transition-all duration-500 ${hasAnimated ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-90'} ${isMobileMenuOpen ? 'is-active' : ''}`}
                    onClick={toggleMobileMenu}
                    onFocus={(e) => e.currentTarget.blur()} /* Prevent focus outline */
                    aria-label="Toggle mobile menu"
                    aria-expanded={isMobileMenuOpen}
                    style={{ WebkitTapHighlightColor: 'transparent' }} /* Remove tap highlight on mobile */
                >
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
                </button>

                {/* Navigation */}
                <nav className={`navbar-nav ${isMobileMenuOpen ? 'mobile-open' : ''} transition-all duration-800 delay-600 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                    {location.pathname === '/' ? (
                        <button
                            className={`navbar-btn ${activeSection === 'testimonial' ? 'active' : ''} transition-all duration-600 delay-800 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}
                            onClick={() => handleNavClick('testimonial')}
                        >
                            Testimonial
                        </button>
                    ) : (
                        <Link
                            to="/"
                            className={`navbar-btn transition-all duration-600 delay-800 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                    )}
                    {location.pathname === '/' ? (
                        <button
                            className={`navbar-btn ${activeSection === 'services' ? 'active' : ''} transition-all duration-600 delay-900 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}
                            onClick={() => handleNavClick('services')}
                        >
                            Services
                        </button>
                    ) : (
                        <Link
                            to="/"
                            className={`navbar-btn transition-all duration-600 delay-900 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Services
                        </Link>
                    )}
                    <div className={`join-us-container transition-all duration-600 delay-1000 ${hasAnimated ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-3 scale-95'}`}>
                        <div className="join-us-shadow"></div>
                        {location.pathname === '/' ? (
                            <button
                                className={`join-us-btn ${activeSection === 'join-us' ? 'active' : ''}`}
                                onClick={() => handleNavClick('join-us')}
                            >
                                Join Us
                            </button>
                        ) : (
                            <Link
                                to="/contact"
                                className={`join-us-btn ${location.pathname === '/contact' ? 'active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
