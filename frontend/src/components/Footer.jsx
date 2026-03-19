import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    'Programme': [
      { name: 'Youth Career Pathways', href: '/programme' },
      { name: 'Skills Development', href: '/skills' },
      { name: 'Apply Now', href: '/apply' }
    ],
    'Organization': [
      { name: 'About Us', href: '/about' },
      { name: 'Our Mission', href: '/about' },
      { name: 'Contact', href: '/contact' }
    ],
    'Get Involved': [
      { name: 'Partner With Us', href: '/contact' },
      { name: 'Volunteer', href: '/contact' },
      { name: 'Donate', href: '/contact' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Instagram, href: '#' }
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/footer.png" 
                alt="Calvin Youth Academy" 
                className="h-24 w-auto"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Bridging the gap between education and employment for underserved youth in South Africa.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-accent" />
              <span className="text-gray-300">info@calvinyouthacademy.org</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-accent" />
              <span className="text-gray-300">+27 12 345 6789</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-gray-300">Johannesburg, South Africa</span>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 pt-8 border-t border-white/20 text-center text-gray-400"
        >
          <p>&copy; 2024 Calvin Youth Academy. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
