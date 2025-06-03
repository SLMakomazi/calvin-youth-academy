import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section - 3 Columns */}
        <div className="footer-top">
          <div className="footer-col">
            <h3 className="footer-logo">Calvin Youth Academy</h3>
            <p className="footer-about">
              Empowering the next generation with quality education and practical skills for a better future.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/admissions">Admissions</Link></li>
              <li><Link to="/faculty">Faculty</Link></li>
              <li><Link to="/events">Events</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Our Courses</h4>
            <ul className="footer-links">
              <li><Link to="/courses/computer-science">Computer Science</Link></li>
              <li><Link to="/courses/business">Business Admin</Link></li>
              <li><Link to="/courses/engineering">Engineering</Link></li>
              <li><Link to="/courses/health">Health Sciences</Link></li>
              <li><Link to="/courses/arts">Arts & Humanities</Link></li>
              <li><Link to="/courses/science">Pure Sciences</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-contact-section">
          <h4 className="footer-title">Contact Us</h4>
          <div className="footer-contact-grid">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>123 Academy Street, Tech City, 10001</span>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
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
          <p>&copy; {new Date().getFullYear()} Calvin Youth Academy. All Rights Reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="divider">|</span>
            <Link to="/terms">Terms of Service</Link>
            <span className="divider">|</span>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;