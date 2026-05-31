import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-black border-t border-gold-500/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Brief */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="text-gold-500 w-6 h-6" />
            <span className="font-serif text-xl tracking-widest text-gold-gradient font-semibold">
              ELITE DRIVE
            </span>
          </Link>
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            Curators of ultimate driving privilege. We offer an uncompromising fleet of the world's most desired motorcars, delivered directly to your runway.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4">
            {[
              { 
                icon: (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                ), 
                url: '#' 
              },
              { 
                icon: (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                ), 
                url: '#' 
              },
              { 
                icon: (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                ), 
                url: '#' 
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="w-8 h-8 rounded-full border border-gold-500/20 text-gold-500 hover:text-gold-300 hover:border-gold-500/50 flex items-center justify-center transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-base uppercase tracking-widest text-gold-500 mb-6">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              { name: 'Home', path: '/' },
              { name: 'Fleet', path: '/fleet' },
              { name: 'About Us', path: '/about' },
              { name: 'Contact', path: '/contact' },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-sm text-gray-400 hover:text-gold-300 font-light transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Fleet */}
        <div>
          <h4 className="font-serif text-base uppercase tracking-widest text-gold-500 mb-6">
            The Fleet
          </h4>
          <ul className="space-y-3">
            {[
              'Rolls Royce Phantom',
              'Lamborghini Urus',
              'Ferrari SF90',
              'Mercedes G Wagon',
              'Bentley Bentayga',
            ].map((car) => (
              <li key={car}>
                <Link
                  to="/fleet"
                  className="text-sm text-gray-400 hover:text-gold-300 font-light transition-colors duration-300"
                >
                  {car}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-serif text-base uppercase tracking-widest text-gold-500 mb-6">
            Concierge Desk
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3 text-sm text-gray-400 font-light">
              <MapPin size={18} className="text-gold-500 flex-shrink-0 mt-0.5" />
              <span>71 Mayfair St, London,<br />W1J 8DJ, United Kingdom</span>
            </li>
            <li className="flex items-center space-x-3 text-sm text-gray-400 font-light">
              <Phone size={18} className="text-gold-500 flex-shrink-0" />
              <span>+1 (555) 0199</span>
            </li>
            <li className="flex items-center space-x-3 text-sm text-gray-400 font-light">
              <Mail size={18} className="text-gold-500 flex-shrink-0" />
              <span>concierge@elitedrive.luxury</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light space-y-4 md:space-y-0">
        <div>
          &copy; {currentYear} Elite Drive. All Rights Reserved.
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold-500 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-gold-500 transition-colors">Concierge Agreement</a>
        </div>
      </div>
    </footer>
  );
};
