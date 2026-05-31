import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useModal();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Fleet', path: '/fleet' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'py-4 bg-luxury-black/85 backdrop-blur-md border-b border-gold-500/10 shadow-lg'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <Shield className="text-gold-500 w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
          <span className="font-serif text-2xl tracking-widest text-gold-gradient font-semibold">
            ELITE DRIVE
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative font-sans text-xs uppercase tracking-widest transition-colors duration-300 hover:text-gold-300 font-medium ${
                isActive(link.path) ? 'text-gold-500' : 'text-gray-300'
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-[1.5px] bg-gradient-to-r from-gold-300 to-gold-600 rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop Book CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => openModal('')}
            className="bg-transparent hover:bg-gold-btn-gradient text-gold-500 hover:text-black font-sans text-xs uppercase tracking-widest font-semibold px-6 py-2.5 border border-gold-500/50 hover:border-gold-500 rounded transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] cursor-pointer glow-gold-btn animate-none"
          >
            Book A Drive
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gold-500 hover:text-gold-300 transition-colors p-1"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-luxury-black border-l border-gold-500/10 shadow-2xl p-8 flex flex-col justify-between transform transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex justify-between items-center mb-10">
            <span className="font-serif text-xl tracking-widest text-gold-gradient font-bold">
              ELITE DRIVE
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gold-500 hover:text-gold-300 p-1"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`font-sans text-sm uppercase tracking-widest transition-colors font-medium ${
                  isActive(link.path) ? 'text-gold-500' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="h-[1px] bg-white/5" />
          <button
            onClick={() => {
              setIsOpen(false);
              openModal('');
            }}
            className="w-full bg-gold-btn-gradient text-black font-sans text-xs uppercase tracking-widest font-semibold py-3.5 rounded text-center transition-transform hover:scale-[1.02] cursor-pointer glow-gold-btn animate-none"
          >
            Book A Drive
          </button>
        </div>
      </div>
    </nav>
  );
};
