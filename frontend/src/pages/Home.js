import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Courses from '../components/Courses/Courses';
import Partnerships from '../components/Partnerships/Partnerships';
import Testimonials from '../components/Testimonials/Testimonials';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Testimonials />
        <Partnerships />
      </main>
    </div>
  );
};

export default Home;