import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, BookOpen, Rocket, Award, TrendingUp, CheckCircle, ArrowRight, MapPin, Clock, DollarSign } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';

const Programme = () => {
  const programmePhases = [
    {
      phase: "Phase 1",
      title: "Career Awareness & Discovery",
      duration: "4 weeks",
      description: "Comprehensive career exploration and self-discovery process",
      outcomes: [
        "Career assessment and profiling",
        "Industry exposure through workshops",
        "Personal development planning",
        "Digital literacy foundation"
      ],
      impact: "Clarity of career direction and personal goals"
    },
    {
      phase: "Phase 2", 
      title: "Guidance & Mentorship",
      duration: "8 weeks",
      description: "One-on-one mentoring and skills gap analysis",
      outcomes: [
        "Personal mentor matching",
        "Skills gap assessment",
        "Individual development plan",
        "Soft skills training"
      ],
      impact: "Personalized roadmap to career success"
    },
    {
      phase: "Phase 3",
      title: "Skills Development",
      duration: "12-16 weeks",
      description: "Industry-accredited skills training programs",
      outcomes: [
        "Technical skills certification",
        "Practical project experience",
        "Industry-relevant portfolio",
        "Workplace readiness training"
      ],
      impact: "Job-ready skills and qualifications"
    },
    {
      phase: "Phase 4",
      title: "Pathways to Employment",
      duration: "Ongoing",
      description: "Job placement support and career advancement",
      outcomes: [
        "Employer partnerships and placements",
        "Interview preparation and coaching",
        "Career advancement support",
        "Alumni network access"
      ],
      impact: "Sustainable employment and career growth"
    }
  ];

  const targetAudience = [
    {
      title: "Rural Youth",
      description: "Young people from rural communities with limited access to opportunities",
      percentage: "45%"
    },
    {
      title: "Underserved Urban Areas",
      description: "Youth from townships and informal settlements",
      percentage: "35%"
    },
    {
      title: "Women in Tech",
      description: "Young women seeking careers in technology and business",
      percentage: "20%"
    }
  ];

  const outcomes = [
    { metric: "85%", label: "Employment Rate within 6 months" },
    { metric: "92%", label: "Program Completion Rate" },
    { metric: "3.5x", label: "Income Increase" },
    { metric: "78%", label: "Career Retention after 2 years" }
  ];

  const deliveryModel = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Blended Learning",
      description: "Combination of online learning and in-person workshops"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Community Hubs",
      description: "Local centers for training and support services"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Individual Mentoring",
      description: "Personal guidance from industry professionals"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Practical Training",
      description: "Hands-on experience through real projects"
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
            <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
              <Award className="w-5 h-5 mr-2" />
              <span className="font-medium">Funding Opportunity</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Youth Career <span className="gradient-text">Pathways Programme</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              A comprehensive 4-phase system designed to bridge the gap between education 
              and employment for South Africa's underserved youth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Partner With Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                Download Proposal
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programme Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Comprehensive 4-Phase System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each phase builds upon the previous one, creating a complete pathway to sustainable employment
            </p>
          </motion.div>

          <div className="space-y-8">
            {programmePhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="bg-secondary text-white rounded-lg px-3 py-1 text-sm font-medium mr-4">
                          {phase.phase}
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          <span className="text-sm">{phase.duration}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-3">
                        {phase.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {phase.description}
                      </p>
                      <div className="bg-highlight/10 rounded-lg p-4">
                        <p className="font-semibold text-highlight mb-1">Key Impact:</p>
                        <p className="text-gray-700">{phase.impact}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Key Outcomes:</h4>
                      <ul className="space-y-2">
                        {phase.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-highlight mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-soft-bg">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Target Audience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reaching youth who need it most
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {targetAudience.map((audience, index) => (
              <Card key={index} delay={index * 0.1} className="text-center">
                <div className="text-3xl font-bold text-accent mb-4">
                  {audience.percentage}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {audience.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {audience.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Model */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Delivery Model
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible, accessible, and effective approaches
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryModel.map((item, index) => (
              <Card key={index} delay={index * 0.1} className="text-center">
                <div className="text-accent mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Measurable Outcomes */}
      <section className="py-20 bg-soft-bg">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Proven Impact & Outcomes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results that demonstrate program effectiveness
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center card-shadow"
              >
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {outcome.metric}
                </div>
                <div className="text-gray-600 font-medium">
                  {outcome.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding CTA */}
      <section className="py-20 bg-gradient-to-br from-secondary to-accent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <DollarSign className="w-12 h-12 mr-3" />
              <h2 className="text-4xl font-bold">Invest in South Africa's Future</h2>
            </div>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Partner with us to create sustainable change. Your investment transforms lives, 
              strengthens communities, and builds a more equitable South Africa.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold mb-2">Scalable Impact</h4>
                  <p className="text-white/80 text-sm">Proven model that can be expanded to reach thousands more youth</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Sustainable Change</h4>
                  <p className="text-white/80 text-sm">Long-term solutions that create lasting economic transformation</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Measurable ROI</h4>
                  <p className="text-white/80 text-sm">Clear metrics and reporting on social and economic impact</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Become a Funding Partner
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary">
                Download Full Proposal
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programme;
