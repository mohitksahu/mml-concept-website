import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-8">
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Learn More Column */}
          <div>
            <h3 className="text-xl font-bold font-k2d underline mb-4">Learn More</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xl font-k2d font-light hover:text-gold transition-colors">
                  About [name]
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
          <div>
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
          <div>
            <h3 className="text-xl font-bold font-k2d underline mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xl font-k2d hover:text-gold transition-colors">
                  Linkedin
                </a>
              </li>
              <li>
                <a href="#" className="text-xl font-k2d hover:text-gold transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-xl font-k2d hover:text-gold transition-colors">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-700">
          <p className="text-base font-k2d">
            © 2025 MML Concepts - Made with ❤️ from Concepts Tech Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;