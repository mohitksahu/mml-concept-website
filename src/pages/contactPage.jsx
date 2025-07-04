import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ContactForm from '../components/contactForm';

const ContactPage = () => {
    const handleFormSubmit = (formData) => {
        console.log('Contact form submitted:', formData);

        // Here you can implement your custom form submission logic
        // For example: send to email service, save to localStorage, etc.

        // For now, we'll just show a success message
        alert('Thank you for your message! We will get back to you soon.');
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
