import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaWhatsapp, FaTelegram, FaFacebookMessenger } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoMdSend } from 'react-icons/io';
import { FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './ContactPage.css';

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    department: 'general'
  });

  const departments = [
    { id: 'general', name: 'General Inquiries' },
    { id: 'admissions', name: 'Admissions' },
    { id: 'support', name: 'Technical Support' },
    { id: 'partnerships', name: 'Partnerships' },
    { id: 'careers', name: 'Careers' }
  ];

  const contactInfo = {
    address: '123 Academy Street, Tech City, 10001',
    email: 'info@calvinyouthacademy.com',
    phone: '+1 234 567 8900',
    whatsapp: '+1 234 567 8901',
    telegram: '@calvinyouth',
    messenger: 'm.me/calvinyouthacademy',
    hours: [
      'Monday - Friday: 8:00 AM - 6:00 PM',
      'Saturday: 9:00 AM - 2:00 PM',
      'Sunday: Closed'
    ]
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        department: 'general'
      });
    }, 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Contact Us</h1>
            <p>We're here to help and answer any questions you might have. We look forward to hearing from you.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="container">
          <motion.div 
            className="contact-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="contact-card" variants={itemVariants}>
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Our Location</h3>
              <p>{contactInfo.address}</p>
              <button 
                className="map-link"
                onClick={() => {
                  // Add your map URL here
                  window.open('https://www.google.com/maps', '_blank', 'noopener,noreferrer');
                }}
              >
                View on Map
              </button>
            </motion.div>

            <motion.div className="contact-card" variants={itemVariants}>
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>
              <h3>Phone</h3>
              <p>{contactInfo.phone}</p>
              <div className="contact-methods">
                <a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`} className="contact-method">
                  <FaPhoneAlt /> Call Us
                </a>
                <a href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`} className="contact-method">
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div className="contact-card" variants={itemVariants}>
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <p>{contactInfo.email}</p>
              <div className="contact-methods">
                <a href={`mailto:${contactInfo.email}`} className="contact-method">
                  <MdEmail /> Email Us
                </a>
                <a href={`https://t.me/${contactInfo.telegram}`} className="contact-method">
                  <FaTelegram /> Telegram
                </a>
              </div>
            </motion.div>

            <motion.div className="contact-card" variants={itemVariants}>
              <div className="contact-icon">
                <FaClock />
              </div>
              <h3>Working Hours</h3>
              <ul className="hours-list">
                {contactInfo.hours.map((hour, index) => (
                  <li key={index}>{hour}</li>
                ))}
              </ul>
              <button 
                className="contact-method"
                onClick={() => {
                  // Add your Messenger URL here
                  window.open('https://m.me/calvinyouthacademy', '_blank', 'noopener,noreferrer');
                }}
              >
                <FaFacebookMessenger /> Chat with us
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="section-header">
            <h2>Send Us a Message</h2>
            <p>Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>
          
          <div className="form-container">
            <div className="tabs">
              {departments.map(dept => (
                <button
                  key={dept.id}
                  className={`tab ${activeTab === dept.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(dept.id)}
                >
                  {dept.name}
                </button>
              ))}
            </div>
            
            {isSubmitted ? (
              <motion.div 
                className="success-message"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <FiCheckCircle className="success-icon" />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for contacting us. We've received your message and will get back to you within 24-48 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <div className="form-actions">
                  <button type="submit" className="submit-btn">
                    <span>Send Message</span>
                    <IoMdSend className="send-icon" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-container">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2152091263273!2d-73.98784472401065!3d40.74844097139075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Find quick answers to common questions about our programs and services.</p>
          </div>
          
          <div className="faq-container">
            <div className="faq-item">
              <button className="faq-question">
                What are your admission requirements?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>Our admission requirements vary by program. Generally, we require a high school diploma or equivalent, and some programs may have additional prerequisites. Please visit our Admissions page for specific requirements.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <button className="faq-question">
                Do you offer financial aid or scholarships?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>Yes, we offer various financial aid options including scholarships, grants, and payment plans. Contact our financial aid office for more information about eligibility and application processes.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <button className="faq-question">
                Can I schedule a campus tour?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>Absolutely! We encourage prospective students to visit our campus. You can schedule a tour through our website or by contacting our admissions office.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <button className="faq-question">
                What support services do you offer to students?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>We provide comprehensive support services including academic advising, career counseling, tutoring, and mental health resources to ensure our students' success.</p>
              </div>
            </div>
          </div>
          
          <div className="cta-box">
            <h3>Still have questions?</h3>
            <p>Can't find what you're looking for? Our team is here to help!</p>
            <a href="#contact-form" className="cta-button">Contact Us Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;