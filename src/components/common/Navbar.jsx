import React, { useState, useEffect } from 'react';
import '../../styles/Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('services');
    const [hasAnimated, setHasAnimated] = useState(false);

    // Trigger navbar entrance animation on component mount
    useEffect(() => {
        const timer = setTimeout(() => {
            setHasAnimated(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);// Handle click outside to close mobile menu
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
    }; const handleNavClick = (section) => {
        console.log(`Navigating to ${section}`);
        // Close mobile menu when nav item is clicked
        setIsMobileMenuOpen(false);

        // Scroll to section functionality
        const sectionMap = {
            'testimonial': 'team-section', // Assuming testimonials are in team section
            'services': 'hero-section',
            'pricing': 'pricing-section',
            'join-us': 'contact-form'
        }; const targetId = sectionMap[section];
        if (targetId) {
            const element = document.getElementById(targetId);
            if (element) {
                const navbarHeight = 100; // Fixed navbar height since no scrolled state
                const offsetTop = element.offsetTop - navbarHeight - 20;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    }; return (
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
                    <img
                        src="/images/_61d44619-0afc-4863-a3a6-e228820af569.jpeg.png"
                        alt="Company Logo"
                        className="navbar-logo"
                    />
                </div>                {/* Mobile Menu Button */}
                <button
                    className={`mobile-menu-btn transition-all duration-800 delay-700 ${hasAnimated ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-90'}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
                </button>

                {/* Navigation */}
                <nav className={`navbar-nav ${isMobileMenuOpen ? 'mobile-open' : ''} transition-all duration-800 delay-600 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                    <button
                        className={`navbar-btn ${activeSection === 'testimonial' ? 'active' : ''} transition-all duration-600 delay-800 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}
                        onClick={() => handleNavClick('testimonial')}
                    >
                        Testimonial
                    </button>
                    <button
                        className={`navbar-btn ${activeSection === 'services' ? 'active' : ''} transition-all duration-600 delay-900 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}
                        onClick={() => handleNavClick('services')}
                    >
                        Services
                    </button>
                    <button
                        className={`navbar-btn ${activeSection === 'pricing' ? 'active' : ''} transition-all duration-600 delay-1000 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}
                        onClick={() => handleNavClick('pricing')}
                    >
                        Pricing
                    </button>                    <div className={`join-us-container transition-all duration-600 delay-1100 ${hasAnimated ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-3 scale-95'}`}>
                        <div className="join-us-shadow"></div>
                        <button
                            className={`join-us-btn ${activeSection === 'join-us' ? 'active' : ''}`}
                            onClick={() => handleNavClick('join-us')}
                        >
                            Join Us
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
