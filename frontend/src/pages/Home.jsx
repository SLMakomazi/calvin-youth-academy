import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, BookOpen, Target, TrendingUp, Award, Lightbulb, Rocket } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';
import AbstractShapes from '../components/AbstractShapes';

const Home = () => {
  const programmePhases = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Career Awareness",
      description: "Discover potential career paths and opportunities aligned with your interests and skills."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Guidance & Mentorship",
      description: "Personalized mentoring from industry professionals who understand your journey."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Skills Development",
      description: "Acquire industry-relevant skills through our accredited training programs."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Pathways to Employment",
      description: "Connect with employers and access real job opportunities in your field."
    }
  ];

  const impactStats = [
    { number: "500+", label: "Learners Reached", color: "secondary" },
    { number: "200+", label: "Learners Supported", color: "accent" },
    { number: "50+", label: "Skills Training Delivered", color: "highlight" },
    { number: "100+", label: "Opportunities Accessed", color: "secondary" }
  ];

  const skillsPreview = [
    { title: "Business Management", level: "Level 5", icon: <Target className="w-6 h-6" /> },
    { title: "Project Management", level: "Level 6", icon: <Award className="w-6 h-6" /> },
    { title: "Digital Marketing", level: "Level 5", icon: <TrendingUp className="w-6 h-6" /> },
    { title: "Data Analytics", level: "Level 6", icon: <BookOpen className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-16 md:-mt-20">
        {/* Video Background - Bottom Layer */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            playbackRate: 0.5,
            zIndex: 0
          }}
          onError={(e) => console.error('Video error:', e)}
        >
          <source src="/videos/heroVideo2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay Gradient - Above Video */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white/50 to-orange-50/60"
          style={{ zIndex: 1 }}
        />
        
        {/* Abstract Shapes - Above Gradient */}
        <div 
          className="absolute inset-0"
          style={{ zIndex: 2 }}
        >
          <AbstractShapes />
        </div>
        
        {/* Content - Top Layer */}
        <div 
          className="container mx-auto px-6 relative z-10"
          style={{ zIndex: 3 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight"
            >
              Unlocking Potential.
              <br />
              <span className="gradient-text">Creating Pathways.</span>
              <br />
              Transforming Futures.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              We empower young people from underserved communities with the guidance, skills, and support needed to access real opportunities.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg">
                Partner With Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                Apply Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Programme Overview */}
      <section id="programme" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Youth Career Pathways Programme
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive four-phase approach designed to transform young lives through structured development and real opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programmePhases.map((phase, index) => (
              <Card key={index} delay={index * 0.1} className="text-center">
                <div className="text-accent mb-4 flex justify-center">
                  {phase.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {phase.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-soft-bg">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every number represents a life transformed and a future reimagined.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-8 text-center card-shadow border-2 border-${stat.color}-10`}
              >
                <div className={`text-4xl md:text-5xl font-bold text-${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Development Preview */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Skills Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Accredited courses designed for real-world success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {skillsPreview.map((skill, index) => (
              <Card key={index} delay={index * 0.1}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-accent">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-highlight bg-highlight/10 px-3 py-1 rounded-full">
                    {skill.level}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-gray-500">
                  Part of our pathway programme
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="secondary">
              View All Courses
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-soft-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Why This Matters
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  In South Africa, millions of young people face the daunting gap between education and employment. Rural and underserved communities bear the brunt of this challenge, with limited access to opportunities that could transform their futures.
                </p>
                <p>
                  Calvin Youth Academy exists to bridge this divide. We don't just provide training—we create comprehensive pathways that connect talent with opportunity, guidance with growth, and potential with realization.
                </p>
                <p>
                  Every young person deserves the chance to build a meaningful career and contribute to their community. Through our systematic approach, we're making this vision a reality, one life at a time.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl h-96 flex items-center justify-center">
                <Users className="w-32 h-32 text-primary" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-accent relative overflow-hidden">
        <AbstractShapes />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Partner with us to create real change
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
              Join us in our mission to transform young lives and build a more equitable future for South Africa's youth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Become a Partner
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
