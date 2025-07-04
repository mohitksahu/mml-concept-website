import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import HeroSection from './home';
import TeamSection from './teamSection';
import ProjectShowcase from './projectShowcase';
import ContactForm from './contactForm';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main>
        <HeroSection />
        <TeamSection />
        <ProjectShowcase />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;