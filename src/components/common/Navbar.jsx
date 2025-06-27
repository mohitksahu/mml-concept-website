import React, { useState, useEffect } from 'react';
import '../../styles/Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState('');

    // Handle scroll effect, visibility, and active section detection
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Update scrolled state
            setIsScrolled(currentScrollY > 50);

            // Smart visibility based on scroll direction
            if (currentScrollY < 10) {
                // Always show navbar at top
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down - hide navbar
                setIsVisible(false);
                // Close mobile menu if open while scrolling down
                if (isMobileMenuOpen) {
                    setIsMobileMenuOpen(false);
                }
            } else if (currentScrollY < lastScrollY) {
                // Scrolling up - show navbar
                setIsVisible(true);
            }

            // Active section detection
            const sections = [
                { id: 'hero-section', name: 'services' },
                { id: 'team-section', name: 'testimonial' },
                { id: 'pricing-section', name: 'pricing' },
                { id: 'contact-form', name: 'join-us' }
            ];

            const navbarHeight = isScrolled ? 52 : 60;
            const scrollPosition = currentScrollY + navbarHeight + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const element = document.getElementById(sections[i].id);
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i].name);
                    break;
                }
            }

            // Default to first section if at very top
            if (currentScrollY < 100) {
                setActiveSection('services');
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY, isMobileMenuOpen, isScrolled]);

    // Handle click outside to close mobile menu
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
        };

        const targetId = sectionMap[section];
        if (targetId) {
            const element = document.getElementById(targetId);
            if (element) {
                const navbarHeight = isScrolled ? 80 : 137;
                const offsetTop = element.offsetTop - navbarHeight - 20;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    }; return (
        <header
            className={`navbar-container bg-primary ${isScrolled ? 'navbar-scrolled' : ''} ${isVisible ? 'navbar-visible' : 'navbar-hidden'} ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="navbar-layout">                {/* Logo */}
                <div className="navbar-logo-container">
                    <img
                        src="/images/_61d44619-0afc-4863-a3a6-e228820af569.jpeg.png"
                        alt="Company Logo"
                        className="navbar-logo"
                    />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
                </button>                {/* Navigation */}
                <nav className={`navbar-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                    <button
                        className={`navbar-btn ${activeSection === 'testimonial' ? 'active' : ''}`}
                        onClick={() => handleNavClick('testimonial')}
                    >
                        Testimonial
                    </button>
                    <button
                        className={`navbar-btn ${activeSection === 'services' ? 'active' : ''}`}
                        onClick={() => handleNavClick('services')}
                    >
                        Services
                    </button>
                    <button
                        className={`navbar-btn ${activeSection === 'pricing' ? 'active' : ''}`}
                        onClick={() => handleNavClick('pricing')}
                    >
                        Pricing
                    </button>

                    <div className="join-us-container">
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
