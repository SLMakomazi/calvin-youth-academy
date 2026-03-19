import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
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

  // New motion animation for scroll indicator
  const scrollIndicatorVariants = {
    top: { scaleY: 0 },
    scrolled: { scaleY: 1 }
  };

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
        {/* Scroll Indicator */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent origin-left"
          variants={scrollIndicatorVariants}
          animate={scrolled ? 'scrolled' : 'top'}
          transition={{ duration: 0.3 }}
        />
        
        <div className="container mx-auto px-2 sm:px-4 py-4 overflow-hidden">
          <div className="flex items-center justify-between min-w-0">
            {/* Logo - Left */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center flex-shrink-0 ml-1 sm:ml-4"
            >
              <Link to="/" className="flex items-center">
                <img 
                  src="/logo.png" 
                  alt="Calvin Youth Academy" 
                  className="h-7 sm:h-9 w-auto max-w-[120px]"
                />
              </Link>
            </motion.div>

            {/* Navigation Links - Center */}
            <div className="hidden md:flex items-center justify-center flex-1 mx-1 sm:mx-2 overflow-x-auto">
              <div className="flex space-x-2 sm:space-x-4 lg:space-x-6 whitespace-nowrap">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link
                      to={link.href}
                      className={`font-medium text-xs sm:text-sm lg:text-base transition-colors duration-200 hover:text-secondary whitespace-nowrap ${
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
                <Button size="sm" className="text-xs sm:text-sm px-1 sm:px-3 py-1 sm:py-2">
                  Apply
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex-shrink-0 mr-1 sm:mr-8"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={`w-3 h-3 sm:w-4 sm:h-4 ${scrolled ? 'text-text' : 'text-white'}`} />
              ) : (
                <Menu className={`w-3 h-3 sm:w-4 sm:h-4 ${scrolled ? 'text-text' : 'text-white'}`} />
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
                    <Link to="/apply">
                      Apply
                    </Link>
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
