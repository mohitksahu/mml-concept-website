import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import HeroSection from './home';
import TeamSection from './teamSection';
import ProjectShowcase from './projectShowcase';
import ComingSoonPage from './comingSoonPage';
import ContactFormPage from './contactFormPage';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main>
        <HeroSection />
        <TeamSection />
        <ProjectShowcase />
        <ComingSoonPage />
        <ContactFormPage />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
