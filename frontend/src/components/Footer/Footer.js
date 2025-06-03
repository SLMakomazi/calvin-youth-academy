import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';
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