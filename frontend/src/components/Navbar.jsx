import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programme', href: '/programme' },
    { name: 'Skills', href: '/skills' },
    { name: 'Partner', href: '/contact' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Left */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center flex-shrink-0"
            >
              <Link to="/" className="flex items-center">
                <img 
                  src="/logo.png" 
                  alt="Calvin Youth Academy" 
                  className="h-10 sm:h-12 w-auto"
                />
              </Link>
            </motion.div>

            {/* Navigation Links - Center */}
            <div className="hidden md:flex items-center justify-center flex-1 mx-4">
              <div className="flex space-x-4 sm:space-x-6 lg:space-x-8">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link
                      to={link.href}
                      className={`font-medium text-sm sm:text-base transition-colors duration-200 hover:text-secondary whitespace-nowrap ${
                        scrolled ? 'text-text' : 'text-white'
                      } ${location.pathname === link.href ? 'text-secondary' : ''}`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button - Right */}
            <div className="hidden md:block flex-shrink-0">
              <Link to="/apply">
                <Button size="sm" className="text-sm px-3 py-2 sm:px-4 sm:py-3">
                  Apply
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex-shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={`w-5 h-5 sm:w-6 sm:h-6 ${scrolled ? 'text-text' : 'text-white'}`} />
              ) : (
                <Menu className={`w-5 h-5 sm:w-6 sm:h-6 ${scrolled ? 'text-text' : 'text-white'}`} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pb-4"
              >
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`font-medium transition-colors duration-200 hover:text-secondary ${
                        scrolled ? 'text-text' : 'text-white'
                      } ${location.pathname === link.href ? 'text-secondary' : ''}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button size="sm">
                    Partner With Us
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
