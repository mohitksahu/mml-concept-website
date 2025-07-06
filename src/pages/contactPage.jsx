import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ContactForm from '../components/contactForm';

const ContactPage = () => {
    const handleFormSubmit = (formData) => {
        console.log('Contact form submitted:', formData);
        // Form submission is now handled by the ContactForm component
        // This is just for any additional logging or processing
    };

    return (
        <div className="min-h-screen bg-primary">
            <Navbar />
            <main>
                <ContactForm
                    showTitle={true}
                    title="Contact Us"
                    onSubmit={handleFormSubmit}
                    showWatermark={false}
                    className="pt-8"
                />
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;
