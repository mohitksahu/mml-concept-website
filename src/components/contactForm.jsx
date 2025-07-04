import React, { useState, useEffect } from 'react';

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
        subject: '',
        message: ''
    });

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

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
        console.log('handleSubjectSelect called with:', subject);
        setFormData(prev => ({
            ...prev,
            subject: subject
        }));
        setIsDropdownOpen(false);
        console.log('Dropdown closed, subject set to:', subject);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Add timestamp to the form data
        const formDataWithTimestamp = {
            ...formData,
            timestamp: new Date().toISOString(),
            submissionId: Date.now().toString()
        };

        try {
            // Save to localStorage for persistence
            const existingSubmissions = JSON.parse(localStorage.getItem('contactFormSubmissions') || '[]');
            existingSubmissions.push(formDataWithTimestamp);
            localStorage.setItem('contactFormSubmissions', JSON.stringify(existingSubmissions));

            // Create JSON file for download
            const jsonData = JSON.stringify(formDataWithTimestamp, null, 2);
            const blob = new Blob([jsonData], { type: 'application/json' });

            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `contact-form-${formDataWithTimestamp.submissionId}.json`;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            URL.revokeObjectURL(url);

            // Log success
            console.log('✅ Form submitted successfully!');
            console.log('📋 Data saved to localStorage');
            console.log('📝 Form data:', formDataWithTimestamp);
            console.log('� Total submissions:', existingSubmissions.length);

            // Show success message
            alert('Message sent successfully! Your form data has been saved and downloaded.');

            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

        } catch (error) {
            console.error('❌ Error submitting form:', error);
            alert('There was an error processing your message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }

        // If custom onSubmit is provided, call it
        if (onSubmit) {
            onSubmit(formDataWithTimestamp);
        }
    };

    // Utility function to export all saved submissions from localStorage
    const exportAllSubmissions = () => {
        try {
            const existingSubmissions = JSON.parse(localStorage.getItem('contactFormSubmissions') || '[]');

            if (existingSubmissions.length > 0) {
                const jsonData = JSON.stringify(existingSubmissions, null, 2);
                const blob = new Blob([jsonData], { type: 'application/json' });

                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `all-contact-submissions-${new Date().toISOString().split('T')[0]}.json`;

                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                URL.revokeObjectURL(url);

                console.log('📁 All submissions exported:', `all-contact-submissions-${new Date().toISOString().split('T')[0]}.json`);
                console.log('💾 Total submissions:', existingSubmissions.length);
                alert(`Successfully exported ${existingSubmissions.length} submissions from localStorage.`);
            } else {
                console.log('📭 No submissions found to export');
                alert('No submissions found in localStorage to export.');
            }
        } catch (error) {
            console.error('Error exporting submissions:', error);
            alert('Error exporting submissions. Please try again.');
        }
    };

    // Make exportAllSubmissions available globally for debugging
    window.exportContactSubmissions = exportAllSubmissions;

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

                        {/* Subtle accent overlay */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none z-0" style={{
                            backgroundImage: 'radial-gradient(circle at 30% 40%, var(--bg-gold) 0%, transparent 50%), radial-gradient(circle at 70% 60%, var(--bg-gold) 0%, transparent 50%)',
                            backgroundSize: '60% 60%'
                        }}></div>

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

                            {/* Subject */}
                            <div style={{ position: 'relative', zIndex: 1000 }}>
                                <label className="block text-lg font-inter font-medium text-primary mb-3">
                                    Subject *
                                </label>
                                <div className="relative dropdown-container" style={{ zIndex: 1000, position: 'relative' }}>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            console.log('Dropdown clicked, current state:', isDropdownOpen);
                                            setIsDropdownOpen(!isDropdownOpen);
                                        }}
                                        className="w-full h-12 bg-accent border border-primary/30 rounded-lg px-4 text-primary text-base font-inter text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300 hover:border-gold/50"
                                        aria-expanded={isDropdownOpen}
                                        aria-haspopup="listbox"
                                    >
                                        <span className={formData.subject ? 'text-primary font-medium' : 'text-primary/70 font-normal'}>
                                            {formData.subject || 'Select a Subject'}
                                        </span>
                                        <svg
                                            className={`w-5 h-5 text-gold transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {isDropdownOpen && (
                                        <div
                                            className="absolute top-full left-0 w-full bg-secondary border-2 border-gold rounded-lg mt-2 shadow-2xl"
                                            style={{
                                                zIndex: 99999,
                                                backgroundColor: '#1c1c1c',
                                                border: '2px solid #a28037',
                                                position: 'absolute',
                                                top: '100%',
                                                left: 0,
                                                right: 0,
                                                marginTop: '8px',
                                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(162, 128, 55, 0.3)',
                                                backdropFilter: 'blur(10px)',
                                                isolation: 'isolate'
                                            }}
                                            role="listbox"
                                        >
                                            {['General Inquiry', 'Project Quote', 'Support', 'Partnership', 'Other'].map((subject, index) => (
                                                <button
                                                    key={subject}
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        console.log('Subject selected:', subject);
                                                        handleSubjectSelect(subject);
                                                    }}
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
