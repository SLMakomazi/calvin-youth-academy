import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Eye, Users, Award, Lightbulb } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Empathy First",
      description: "We understand the challenges our youth face and approach every interaction with compassion and understanding."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Impact Driven",
      description: "Every program and decision is measured by its ability to create real, lasting change in young lives."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We continuously evolve our approaches to meet the changing needs of the modern workforce."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "We believe in the power of collective action and building strong support networks."
    }
  ];

  const pillars = [
    {
      title: "Career Awareness",
      description: "Helping youth discover their potential and understand available opportunities"
    },
    {
      title: "Skills Development",
      description: "Providing industry-relevant training that meets current market demands"
    },
    {
      title: "Mentorship",
      description: "Connecting young people with experienced professionals who guide their journey"
    },
    {
      title: "Employment Pathways",
      description: "Creating direct links to employers and real job opportunities"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              About <span className="gradient-text">Calvin Youth Academy</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transforming lives through education, mentorship, and opportunity. 
              We're building a bridge between potential and possibility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Calvin Youth Academy was born from a simple observation: while South Africa has 
                  talented, ambitious young people in every community, the pathways to meaningful 
                  employment remain elusive for many, particularly those in rural and underserved areas.
                </p>
                <p>
                  What started as a small mentoring initiative has grown into a comprehensive youth 
                  development organization that has touched hundreds of lives. We've learned that 
                  success isn't just about skills training—it's about understanding the complete 
                  journey from education to employment.
                </p>
                <p>
                  Today, we continue to evolve and expand our programs, always staying true to our 
                  core belief: every young person deserves the opportunity to build a dignified, 
                  prosperous future.
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
                <Heart className="w-32 h-32 text-primary" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-soft-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-8 card-shadow h-full">
                <Target className="w-16 h-16 text-secondary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To bridge education and opportunity gaps by providing comprehensive career pathways 
                  that empower underserved youth with the skills, guidance, and support needed to 
                  access meaningful employment opportunities.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-8 card-shadow h-full">
                <Eye className="w-16 h-16 text-accent mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  A future where every young person in South Africa has access to economic opportunity, 
                  regardless of their background or location, creating a more equitable and prosperous 
                  society for all.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} delay={index * 0.1} className="text-center">
                <div className="text-accent mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-soft-bg">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four pillars that form the foundation of our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-6 card-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary/10 rounded-lg p-3 flex-shrink-0">
                      <Award className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-secondary to-accent">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Whether you're a young person seeking opportunity, a partner organization, 
              or a supporter of youth development, there's a place for you in our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary">
                Get Involved
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
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

export default About;
