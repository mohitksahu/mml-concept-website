import React, { useState, useEffect } from 'react';
import '../../styles/Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
    };

    return (<header
        className={`navbar-container bg-primary ${isScrolled ? 'navbar-scrolled' : ''}`}
        style={{
            backgroundImage: "url('/images/img_image_3.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
    >
        <div className="navbar-layout">
            {/* Logo */}
            <div className="navbar-logo-container">
                <img
                    src="/images/img_61d446190afc4863a3a6e228820af569jpegremovebgpreview_2.png"
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
            </button>            {/* Navigation */}
            <nav className={`navbar-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                <button
                    className="navbar-btn"
                    onClick={() => handleNavClick('testimonial')}
                >
                    Testimonial
                </button>
                <button
                    className="navbar-btn"
                    onClick={() => handleNavClick('services')}
                >
                    Services
                </button>
                <button
                    className="navbar-btn"
                    onClick={() => handleNavClick('pricing')}
                >
                    Pricing
                </button>                <div className="join-us-container">
                    <div className="join-us-shadow"></div>
                    <button
                        className="join-us-btn"
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
