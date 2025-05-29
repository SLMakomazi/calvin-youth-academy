import React, { useState, useEffect } from 'react';
import heroVideo from '../../assets/videos/heroVideo2.mp4';
import './Hero.css';

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isVideoLoaded) {
        setShowFallback(true);
      }
    }, 2000); 

    return () => clearTimeout(timer);
  }, [isVideoLoaded]);

  return (
    <section className="hero">
      <div className="video-container">
        {!showFallback ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className={`hero-video ${isVideoLoaded ? 'loaded' : 'loading'}`}
            onLoadedData={() => setIsVideoLoaded(true)}
            onError={() => setShowFallback(true)}
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="fallback-background"></div>
        )}
        <div className="overlay"></div>
      </div>
      <div className="hero-content">
        <h1>Calvin Youth Academy </h1>
        <h2>Transforming potential into success through skills training and mentorship</h2>
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