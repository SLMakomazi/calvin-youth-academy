import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    course: 'Software Development',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: "Calvin Youth Academy transformed my career. The hands-on approach and industry-relevant curriculum prepared me for real-world challenges. I landed my dream job within a month of graduation!"
  },
  {
    id: 2,
    name: 'Michael Chen',
    course: 'Data Science',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: "The instructors are top-notch and truly care about student success. The projects were challenging but incredibly rewarding. I now work at a leading tech company thanks to the skills I gained here."
  },
  {
    id: 3,
    name: 'Amina Diallo',
    course: 'Cloud Computing',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: "As a career changer, I was nervous about switching to tech. The supportive learning environment and practical training made all the difference. I'm now a cloud solutions architect!"
  },
  {
    id: 4,
    name: 'David Kim',
    course: 'Cybersecurity',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    text: "The cybersecurity program was comprehensive and up-to-date with industry standards. The hands-on labs and certifications prepared me perfectly for my role as a security analyst."
  },
  {
    id: 5,
    name: 'Elena Rodriguez',
    course: 'UI/UX Design',
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
    text: "The design thinking approach and portfolio-building focus helped me land multiple job offers. The career services team was incredibly supportive throughout my job search."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Handle auto-rotation
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  // Handle touch events for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const diff = touchStart - touchEnd;
    
    // If swipe is more than 50px, change slide
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Get previous, current and next slides
  const getVisibleTestimonials = () => {
    const lastIndex = testimonials.length - 1;
    
    // If at the start, wrap around to the end
    const prevIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
    
    // If at the end, wrap around to the start
    const nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
    
    return [
      testimonials[prevIndex],
      testimonials[currentIndex],
      testimonials[nextIndex]
    ];
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Students Say</h2>
        </div>
        <div 
          className="testimonials-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <button 
            className="nav-button prev" 
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          
          <div className="testimonials-slider">
            {visibleTestimonials.map((testimonial, index) => {
              // Determine the position class (left, center, right)
              let positionClass = '';
              if (index === 0) positionClass = 'left';
              else if (index === 1) positionClass = 'center';
              else positionClass = 'right';
              
              return (
                <div 
                  key={testimonial.id}
                  className={`testimonial-card ${positionClass}`}
                  onClick={() => {
                    if (positionClass === 'left') prevSlide();
                    else if (positionClass === 'right') nextSlide();
                  }}
                >
                  <div className="testimonial-content">
                    <FaQuoteLeft className="quote-icon" />
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-author">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="author-image"
                        loading="lazy"
                      />
                      <div className="author-info">
                        <h4 className="author-name">{testimonial.name}</h4>
                        <p className="author-course">{testimonial.course}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <button 
            className="nav-button next" 
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;