import React from 'react';
import ContactForm from '../components/contactForm';

const ContactFormPage = () => {
    const handleFormSubmit = (formData) => {
        console.log('Form submitted:', formData);
        alert('Message sent successfully!');
        // You can add your custom form submission logic here
        // For example: send to email service, save to localStorage, etc.
    };

    return (
        <div id="contact-form">
            <ContactForm
                showTitle={true}
                title="Leave a message"
                onSubmit={handleFormSubmit}
                showWatermark={false}
            />
        </div>
    );
};

export default ContactFormPage;
