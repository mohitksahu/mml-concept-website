import React from 'react';
import ContactForm from '../components/contactForm';

const ContactFormPage = () => {
    const handleFormSubmit = (formData) => {
        console.log('Form submitted:', formData);
        // Form submission is handled within the ContactForm component
        // This is just for any additional logging or processing you may need
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
