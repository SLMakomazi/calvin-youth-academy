import React from 'react';
import { FaLaptopCode, FaGraduationCap, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-header">
          
          <h2 className="section-title">Empowering South Africa's Digital Future</h2>
          <div className="divider"></div>
          <span className="section-subtitle">Who We Are</span>
        </div>
        
        <div className="about-content">
          <p className="about-description">
            At CYA (Calvin Youth Academy), we're transforming lives through cutting-edge IT education. 
            Our accredited programs are designed to bridge the digital divide and create opportunities 
            for South Africa's youth in the fast-growing tech industry.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaGraduationCap />
              </div>
              <h3>Accredited Programs</h3>
              <p>SAQA/MICT SETA-recognized courses in high-demand IT fields</p>
            </div>
            
            <div className="feature-card highlight">
              <div className="feature-icon">
                <FaLaptopCode />
              </div>
              <h3>Hands-on Training</h3>
              <p>Practical skills in Technical Support, Development & Networking</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaUsers />
              </div>
              <h3>Career Focused</h3>
              <p>1-year and 6-month programs designed to make you job-ready</p>
            </div>
          </div>
          
          
          <div className="cta-wrapper">
            <Link to="/about" className="btn btn-primary">
              Discover Our Story
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
