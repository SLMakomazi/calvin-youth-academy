import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section - 3 Columns */}
        <div className="footer-top">
          <div className="footer-col about-col">
            <h3 className="footer-logo">Calvin Youth Academy</h3>
            <p className="footer-about">
              Empowering the next generation with quality education and practical skills for a better future in the digital age.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/courses">Our Courses</Link></li>
              <li><Link to="/admissions">Admissions</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Our Courses</h4>
            <ul className="footer-links">
              <li><Link to="/courses/web-development">Web Development</Link></li>
              <li><Link to="/courses/software-development">Software Development</Link></li>
              <li><Link to="/courses/database-administration">Database Administration</Link></li>
              <li><Link to="/courses/network-engineering">Network Engineering</Link></li>
              <li><Link to="/courses/cyber-security">Cyber Security</Link></li>
              <li><Link to="/courses/data-science">Data Science</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Section - Full Width */}
        <div className="footer-contact-section">
          <h4 className="footer-title">Contact Us</h4>
          <div className="footer-contact-grid">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>123 Academy Street, Tech City, 10001</span>
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <div className="phone-numbers">
                <a href="tel:+1234567890">+1 (234) 567-890</a>
                <a href="tel:+1987654321">+1 (987) 654-321</a>
              </div>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href="mailto:info@calvinyouthacademy.com">info@calvinyouthacademy.com</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Calvin Youth Academy. All Rights Reserved.</p>
            <div className="footer-legal">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <span className="divider">|</span>
              <Link to="/terms">Terms of Service</Link>
              <span className="divider">|</span>
              <Link to="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;