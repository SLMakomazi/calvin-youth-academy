import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Courses from '../components/Courses/Courses';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact/Contact';
import Partnerships from '../components/Partnerships/Partnerships';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <ScrollToTop />
      <main>
        <Hero />
        <About />
        <Courses />
        <Testimonials />
        <Contact />
        <Partnerships />
      </main>
      <Footer />
    </div>
  );
};

export default Home;