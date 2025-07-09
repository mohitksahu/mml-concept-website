import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './pages';
import ContactPage from './pages/contactPage';

/**
 * Main application routes using React Router v6
 * Uses Routes component with Route elements for navigation
 */
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Home page - Portfolio showcase */}
        <Route path="/" element={<Portfolio />} />
        
        {/* Contact page - Standalone contact form */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;