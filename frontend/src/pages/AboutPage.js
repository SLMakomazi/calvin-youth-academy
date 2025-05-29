import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaLaptopCode, FaUsers, FaLightbulb, FaHandsHelping, FaGlobeAfrica } from 'react-icons/fa';
import './AboutPage.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>Empowering South Africa's Digital Future</h1>
          <p className="subtitle">Transforming lives through accessible, accredited IT education and skills development</p>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="executive-summary">
        <div className="container">
          <div className="section-header">
            <h2>Welcome to Calvin Youth Academy</h2>
            <div className="divider"></div>
            <span className="section-subtitle">Our Story</span>
          </div>
          
          <div className="content-grid">
            <div className="content-text">
              <p>
                Established with a vision to bridge the digital divide in South Africa, Calvin Youth Academy (CYA) has been at the forefront of IT education since our founding. 
                We believe that access to quality technical education should be a right, not a privilege.
              </p>
              <p>
                Our academy specializes in providing hands-on, industry-relevant training in various IT disciplines, equipping our students with the skills needed to thrive in the rapidly evolving digital landscape. 
                With a focus on both technical excellence and personal development, we prepare our graduates for successful careers in the tech industry.
              </p>
              <p>
                At CYA, we're more than just an educational institution – we're a community of innovators, problem-solvers, and future leaders. 
                Our commitment to excellence and innovation has made us a trusted name in IT education across South Africa.
              </p>
            </div>
            <div className="content-image">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="CYA Students Learning" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission">
        <div className="container">
          <div className="section-header">
            <h2>Vision & Mission</h2>
            <div className="divider"></div>
            <span className="section-subtitle">Our Foundation</span>
          </div>
          
          <div className="vm-grid">
            <div className="vm-card">
              <div className="vm-icon">
                <FaLightbulb />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the leading catalyst for digital transformation in South Africa by nurturing a generation of skilled IT professionals who will drive innovation and economic growth across the continent.
              </p>
            </div>
            
            <div className="vm-card highlight">
              <div className="vm-icon">
                <FaGraduationCap />
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide accessible, high-quality IT education that empowers individuals from all backgrounds with the technical skills, practical experience, and professional mindset needed to excel in the digital economy.
              </p>
            </div>
          </div>
          
          {/* Core Values */}
          <div className="core-values">
            <h3>Our Core Values</h3>
            <p className="values-intro">These principles guide everything we do at CYA</p>
            
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <FaLightbulb />
                </div>
                <h4>Innovation</h4>
                <p>We embrace creativity and forward-thinking to stay at the forefront of technology education.</p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">
                  <FaHandsHelping />
                </div>
                <h4>Empowerment</h4>
                <p>We believe in equipping students with the tools and confidence to shape their own futures.</p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">
                  <FaGlobeAfrica />
                </div>
                <h4>Community Impact</h4>
                <p>We're committed to making a positive difference in the communities we serve.</p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">
                  <FaGraduationCap />
                </div>
                <h4>Excellence</h4>
                <p>We maintain the highest standards in education and professional development.</p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">
                  <FaUsers />
                </div>
                <h4>Inclusivity</h4>
                <p>We provide equal opportunities for all, regardless of background or circumstance.</p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">
                  <FaLaptopCode />
                </div>
                <h4>Practical Learning</h4>
                <p>We emphasize hands-on experience to ensure real-world readiness.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join Calvin Youth Academy and take the first step towards a successful career in IT.</p>
          <div className="cta-buttons">
            <Link to="/courses" className="btn btn-primary">Explore Our Courses</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;