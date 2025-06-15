import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import TeamSection from './TeamSection';
import PricingSection from './PricingSection';
import ProjectShowcase from './ProjectShowcase';
import ContactForm from './ContactForm';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <main>
        <HeroSection />
        <TeamSection />
        <PricingSection />
        <ProjectShowcase />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;