import React from 'react';
import { FaGraduationCap, FaUsers, FaHandsHelping } from 'react-icons/fa';
import aboutImage from '../../assets/images/about-image.jpg'; // You'll need to add this image
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">About Calvin Youth Academy</h2>
            <p className="about-description">
              At Calvin Youth Academy, we are dedicated to empowering the next generation through quality education and practical skills training. 
              Our mission is to bridge the gap between education and employment, creating opportunities for young people to thrive in today's 
              competitive world.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <FaGraduationCap />
                </div>
                <div className="feature-content">
                  <h3>Quality Education</h3>
                  <p>Industry-relevant courses designed by experts to meet current market demands.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <FaUsers />
                </div>
                <div className="feature-content">
                  <h3>Experienced Mentors</h3>
                  <p>Learn from professionals with real-world experience in their respective fields.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <FaHandsHelping />
                </div>
                <div className="feature-content">
                  <h3>Career Support</h3>
                  <p>Comprehensive career guidance and job placement assistance for our graduates.</p>
                </div>
              </div>
            </div>
            
            <a href="/about" className="btn btn-outline">Learn More</a>
          </div>
          
          <div className="about-image">
            <img src={aboutImage} alt="Students learning at Calvin Youth Academy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
