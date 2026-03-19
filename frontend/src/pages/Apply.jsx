import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, FileText, Users, ArrowRight, Clock, MapPin, Phone, Mail, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';

const Apply = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    location: '',
    education: '',
    interests: '',
    motivation: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const applicationSteps = [
    {
      step: 1,
      title: "Personal Information",
      description: "Tell us about yourself",
      icon: <Users className="w-6 h-6" />
    },
    {
      step: 2,
      title: "Contact Details",
      description: "How can we reach you?",
      icon: <Phone className="w-6 h-6" />
    },
    {
      step: 3,
      title: "Education Background",
      description: "Your educational journey",
      icon: <FileText className="w-6 h-6" />
    },
    {
      step: 4,
      title: "Motivation & Goals",
      description: "Why do you want to join?",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const requirements = [
    {
      icon: <Users className="w-5 h-5" />,
      text: "Age 18-35 years old"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "Based in South Africa"
    },
    {
      icon: <FileText className="w-5 h-5" />,
      text: "Matric certificate or equivalent"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      text: "Valid email address"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: "Access to smartphone/computer"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Commitment to complete programme"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Application submitted:', formData);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

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
              <Send className="w-5 h-5 mr-2" />
              <span className="font-medium">Applications Open</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Apply to <span className="gradient-text">Transform Your Future</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Join our Youth Career Pathways Programme and take the first step 
              toward a meaningful career and brighter future.
            </p>
            <div className="flex items-center justify-center space-x-8 text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-accent" />
                <span>Applications close: 30 April 2024</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-accent" />
                <span>Limited spots available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Application Requirements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make sure you meet these criteria before applying
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-soft-bg rounded-2xl p-6 flex items-center space-x-4"
              >
                <div className="text-accent flex-shrink-0">
                  {req.icon}
                </div>
                <span className="text-gray-700 font-medium">{req.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-soft-bg">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {applicationSteps.map((step, index) => (
                  <div key={step.step} className="flex items-center">
                    <motion.div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        currentStep >= step.step
                          ? 'bg-accent text-white'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.icon}
                    </motion.div>
                    {index < applicationSteps.length - 1 && (
                      <div
                        className={`flex-1 h-1 mx-4 ${
                          currentStep > step.step ? 'bg-accent' : 'bg-gray-200'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                {applicationSteps.map((step) => (
                  <div key={step.step} className="text-center">
                    <div className="font-medium">{step.title}</div>
                    <div className="text-xs">{step.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <Card className="p-8">
              <form onSubmit={handleSubmit}>
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-primary mb-6">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Age</label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                        min="18"
                        max="35"
                        required
                      />
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-primary mb-6">Contact Details</h3>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Location (City/Town)</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                        required
                      />
                    </div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-primary mb-6">Education Background</h3>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Highest Education Level</label>
                      <select
                        name="education"
                        value={formData.education}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                        required
                      >
                        <option value="">Select education level</option>
                        <option value="matric">Matric / Grade 12</option>
                        <option value="diploma">Diploma</option>
                        <option value="degree">Bachelor's Degree</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Areas of Interest</label>
                      <textarea
                        name="interests"
                        value={formData.interests}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                        placeholder="Tell us about your career interests and what fields excite you..."
                      />
                    </div>
                  </motion.div>
                )}

                {currentStep === 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-primary mb-6">Motivation & Goals</h3>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Why do you want to join the Youth Career Pathways Programme?
                      </label>
                      <textarea
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                        placeholder="Share your story and tell us what you hope to achieve through this programme..."
                        required
                      />
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}
                  >
                    Previous
                  </Button>
                  
                  {currentStep < totalSteps ? (
                    <Button onClick={nextStep}>
                      Next Step
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  ) : (
                    <Button type="submit">
                      Submit Application
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  )}
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              What Happens Next?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our application review process and timeline
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Application Review", time: "1-2 weeks", description: "We review your application for eligibility" },
              { title: "Initial Interview", time: "Week 3", description: "Online interview to discuss your goals" },
              { title: "Final Selection", time: "Week 4", description: "Successful applicants are notified" },
              { title: "Programme Start", time: "May 2024", description: "Begin your career pathway journey" }
            ].map((item, index) => (
              <Card key={index} delay={index * 0.1} className="text-center">
                <div className="bg-accent/10 rounded-lg p-3 inline-block mb-4">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-accent font-medium mb-2">{item.time}</p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apply;
