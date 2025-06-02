import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Courses from '../components/Courses/Courses';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        {/* Other sections will go here */}
      </main>
    </div>
  );
};

export default Home;