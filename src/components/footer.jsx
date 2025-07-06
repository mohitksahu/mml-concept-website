import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-5xl mx-auto px-8">
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 justify-items-center text-center">
          {/* Learn More Column */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold font-k2d underline mb-4">Learn More</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xl font-k2d font-light hover:text-gold transition-colors">
                  About MML
                </a>
              </li>
              <li>
                <a href="#" className="text-xl font-k2d font-light hover:text-gold transition-colors">
                  Team Organization
                </a>
              </li>
            </ul>
          </div>

          {/* Get Involved Column */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold font-k2d underline mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xl font-k2d hover:text-gold transition-colors">
                  Join MML Concepts
                </a>
              </li>
              <li>
                <a href="#" className="text-xl font-k2d hover:text-gold transition-colors">
                  Contribute Us
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold font-k2d underline mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.instagram.com/mml.concepts/" className="text-xl font-k2d hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer">
                  Linkedin
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/mml.concepts/" className="text-xl font-k2d hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@mml.concepts" className="text-xl font-k2d hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-700 max-w-3xl mx-auto">
          <p className="text-base font-k2d">
            © 2025 MML Concepts - Made with ❤️ from Concepts Tech Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;