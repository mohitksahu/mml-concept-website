import React, { useState, useEffect } from 'react';
import { submitContactForm } from '../services/contactService';

const ContactForm = ({
    showTitle = true,
    title = 'Leave a message',
    onSubmit = null,
    className = '',
    showWatermark = false
}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry', // Default subject
        message: ''
    });

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState({
        success: false,
        error: null,
        message: ''
    });

    // Trigger animations on component mount
    useEffect(() => {
        const timer = setTimeout(() => {
            setHasAnimated(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    // Handle click outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isDropdownOpen && !event.target.closest('.dropdown-container')) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isDropdownOpen]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubjectSelect = (subject) => {
        setFormData(prev => ({
            ...prev,
            subject: subject
        }));
        setIsDropdownOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus({
            success: false,
            error: null,
            message: ''
        });

        try {
            // Submit to MongoDB via API
            const result = await submitContactForm(formData);
            
            setFormStatus({
                success: true,
                error: null,
                message: 'Thank you! Your message has been sent successfully.'
            });
            
            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: 'General Inquiry',
                message: ''
            });
            
            // If custom onSubmit handler is provided, call it
            if (onSubmit) {
                onSubmit(formData);
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setFormStatus({
                success: false,
                error: error,
                message: error.message || error.error || 'An error occurred. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className={`contact-form-container relative bg-secondary py-16 md:py-24 ${className}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Section Title */}
                {showTitle && (
                    <div className={`text-center mb-12 md:mb-16 transition-all duration-1500 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="relative inline-block">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold leading-tight mb-4">
                                {title}
                            </h2>
                            <p className="text-primary/80 text-lg md:text-xl max-w-2xl mx-auto">
                                Get in touch with us for professional video editing and multimedia solutions
                            </p>
                        </div>
                    </div>
                )}

                {/* Form Container */}
                <div className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-300 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="relative rounded-xl p-8 md:p-12 shadow-2xl bg-card border border-primary/20" style={{ overflow: 'visible' }}>
                        {/* Logo as decorative element in corner */}
                        {showWatermark && (
                            <div className="absolute top-4 right-4 pointer-events-none z-10">
                                <img
                                    src="/images/watermarkLogo.png"
                                    alt="Company Logo"
                                    className="w-16 h-16 object-contain opacity-40"
                                    style={{
                                        filter: 'brightness(0.8) contrast(1.1)',
                                        transform: 'translateZ(0)'
                                    }}
                                />
                            </div>
                        )}

                        {/* Subtle accent overlay */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none z-0" style={{
                            backgroundImage: 'radial-gradient(circle at 30% 40%, var(--bg-gold) 0%, transparent 50%), radial-gradient(circle at 70% 60%, var(--bg-gold) 0%, transparent 50%)',
                            backgroundSize: '60% 60%'
                        }}></div>

                        {/* Form Status Message */}
                        {formStatus.message && (
                            <div className={`mb-6 p-4 rounded-lg text-center ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {formStatus.message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                            {/* Name and Email Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-lg font-inter font-medium text-primary mb-3">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full h-12 bg-accent border border-primary/30 rounded-lg px-4 text-primary text-base font-inter placeholder-primary/60 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300"
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-lg font-inter font-medium text-primary mb-3">
                                        Your Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full h-12 bg-accent border border-primary/30 rounded-lg px-4 text-primary text-base font-inter placeholder-primary/60 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300"
                                        placeholder="Enter your email address"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Phone and Subject Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-lg font-inter font-medium text-primary mb-3">
                                        Phone Number (Optional)
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full h-12 bg-accent border border-primary/30 rounded-lg px-4 text-primary text-base font-inter placeholder-primary/60 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                
                                {/* Subject Dropdown */}
                                <div className="relative dropdown-container">
                                    <label className="block text-lg font-inter font-medium text-primary mb-3">
                                        Subject *
                                    </label>
                                    <button
                                        type="button"
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="w-full h-12 bg-accent border border-primary/30 rounded-lg px-4 text-primary text-base font-inter focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300 flex items-center justify-between"
                                    >
                                        <span>{formData.subject || 'Select a subject'}</span>
                                        <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>
                                    
                                    {isDropdownOpen && (
                                        <div 
                                            className="absolute w-full bg-accent/95 backdrop-blur-md rounded-lg mt-2 shadow-xl z-50 border border-gold/30"
                                            style={{
                                                top: '100%',
                                                left: 0,
                                                right: 0,
                                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(162, 128, 55, 0.3)'
                                            }}
                                            role="listbox"
                                        >
                                            {['General Inquiry', 'Project Quote', 'Support', 'Partnership', 'Other'].map((subject, index) => (
                                                <button
                                                    key={subject}
                                                    type="button"
                                                    onClick={() => handleSubjectSelect(subject)}
                                                    className="w-full px-4 py-4 text-left text-white font-medium text-base border-b border-gold/30 last:border-b-0 hover:bg-gold hover:text-black transition-all duration-200"
                                                    style={{
                                                        backgroundColor: 'transparent',
                                                        borderBottom: index < 4 ? '1px solid rgba(162, 128, 55, 0.3)' : 'none',
                                                        borderRadius: index === 0 ? '0.375rem 0.375rem 0 0' : index === 4 ? '0 0 0.375rem 0.375rem' : '0'
                                                    }}
                                                    role="option"
                                                >
                                                    {subject}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-lg font-inter font-medium text-primary mb-3">
                                    Your Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Tell us about your project or inquiry..."
                                    rows={6}
                                    className="w-full bg-accent border border-primary/30 rounded-lg px-4 py-3 text-primary text-base font-inter placeholder-primary/60 resize-none focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="text-center pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`inline-flex items-center justify-center px-8 py-4 font-inter font-semibold text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all duration-300 transform ${isSubmitting
                                        ? 'bg-gold/50 text-secondary/70 cursor-not-allowed'
                                        : 'bg-gold text-secondary hover:bg-gold/90 hover:scale-[1.02]'
                                        }`}
                                    style={{ minWidth: '200px' }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
