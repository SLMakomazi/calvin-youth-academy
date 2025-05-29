import React from 'react';
import heroVideo from '../../assets/videos/heroVideo2.mp4';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="video-container">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
      </div>
      <div className="hero-content">
        <h1>Empowering Youth for a Brighter Future</h1>
        <p>Transforming potential into success through skills training and mentorship</p>
        <div className="cta-buttons">
          <a href="/courses" className="btn btn-primary">
            <span>Explore Courses</span>
            <i className="fas fa-arrow-right"></i>
          </a>
          <a href="/apply" className="btn btn-secondary">
            <span>Apply Now</span>
            <i className="fas fa-user-graduate"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;