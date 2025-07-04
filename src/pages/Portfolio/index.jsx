import React from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import TeamSection from './TeamSection';
import ProjectShowcase from './ProjectShowcase';
import ContactForm from './ContactForm';

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