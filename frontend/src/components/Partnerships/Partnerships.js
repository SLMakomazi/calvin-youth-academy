import React, { useEffect, useRef } from 'react';
import './Partnerships.css';

const partnerships = [
  { id: 1, name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { id: 2, name: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' },
  { id: 3, name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { id: 4, name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { id: 5, name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
  { id: 6, name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
  { id: 7, name: 'SAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
  { id: 8, name: 'VMware', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg' },
];

const Partnerships = () => {
  const sliderRef = useRef(null);
  const sliderContentRef = useRef(null);
  const animationRef = useRef(null);
  const isPausedRef = useRef(false);
  
  useEffect(() => {
    const slider = sliderRef.current;
    const sliderContent = sliderContentRef.current;
    
    // Clone the items for infinite scrolling
    const items = Array.from(sliderContent.children);
    items.forEach(item => {
      const clone = item.cloneNode(true);
      sliderContent.appendChild(clone);
    });
    
    let position = 0;
    const speed = 0.5; // pixels per frame
    const itemWidth = items[0].offsetWidth + 40; // 20px margin on each side
    
    const animate = () => {
      if (isPausedRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      position -= speed;
      
      // Reset position when scrolled one full width
      if (position < -itemWidth * items.length) {
        position = 0;
      }
      
      sliderContent.style.transform = `translateX(${position}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    // Pause on hover
    const handleMouseEnter = () => {
      isPausedRef.current = true;
      sliderContent.style.transition = 'transform 0.3s ease';
    };
    
    const handleMouseLeave = () => {
      isPausedRef.current = false;
      sliderContent.style.transition = 'none';
      // Reset position to prevent jump
      sliderContent.style.transform = `translateX(${Math.floor(position)}px)`;
      setTimeout(() => {
        sliderContent.style.transition = 'transform 0.3s linear';
      }, 50);
    };
    
    slider.addEventListener('mouseenter', handleMouseEnter);
    slider.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      cancelAnimationFrame(animationRef.current);
      slider.removeEventListener('mouseenter', handleMouseEnter);
      slider.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <section className="partnerships-section">
      <div className="section-header">
      <h2 className="section-title">Our Valued Partners</h2>
      <span className="section-subtitle">Empowering Youth through Technology</span>
      </div>
      
      <div className="partnerships-slider" ref={sliderRef}>
        <div className="partnerships-slider-content" ref={sliderContentRef}>
          {[...partnerships, ...partnerships].map((partner, index) => (
            <div key={`${partner.id}-${index}`} className="partner-item">
              <div className="partner-logo">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  loading="lazy"
                />
              </div>
              <span className="partner-name">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnerships;