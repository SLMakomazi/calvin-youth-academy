import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock, Users, Handshake, Building, Award, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    partnershipType: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["info@calvinyouthacademy.org", "applications@calvinyouthacademy.org"],
      action: "Send us an email anytime!"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+27 12 345 6789", "+27 11 234 5678"],
      action: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["123 Main Street, Johannesburg", "South Africa, 2000"],
      action: "By appointment only"
    }
  ];

  const partnershipOpportunities = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Corporate Partnerships",
      description: "Partner with us to provide internships, mentorship, and employment opportunities for our graduates.",
      benefits: [
        "Access to trained talent",
        "CSI/BBBEE contributions",
        "Brand visibility",
        "Employee engagement opportunities"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Funding Partners",
      description: "Support our mission through grants, sponsorships, and program funding.",
      benefits: [
        "Measurable social impact",
        "Regular impact reporting",
        "Recognition and visibility",
        "Tax benefits for donations"
      ]
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Skills Development Partners",
      description: "Collaborate on curriculum development, training delivery, and certification.",
      benefits: [
        "Curriculum input opportunities",
        "Trainer engagement",
        "Industry alignment",
        "Knowledge sharing"
      ]
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
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Whether you're a young person seeking opportunity, a potential partner, 
              or want to support our mission, we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Ways to Reach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the method that works best for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} delay={index * 0.1} className="text-center">
                <div className="text-accent mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {info.title}
                </h3>
                <div className="space-y-2 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  {info.action}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-soft-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have questions about our programmes? Want to get involved as a partner 
                or volunteer? Fill out the form below and we'll get back to you within 48 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="application">Programme Application</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="volunteer">Volunteer Opportunity</option>
                      <option value="donation">Donation Information</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                    placeholder="Tell us more about your inquiry..."
                    required
                  />
                </div>

                <Button type="submit" size="lg">
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <Mail className="w-32 h-32 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    We're Here to Help
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our team is dedicated to supporting young South Africans and building 
                    meaningful partnerships. Reach out and let's create change together.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner With Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
              <Handshake className="w-5 h-5 mr-2" />
              <span className="font-medium">Partnership Opportunities</span>
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4">
              Partner With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us in transforming lives and creating sustainable change in South Africa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipOpportunities.map((opportunity, index) => (
              <Card key={index} delay={index * 0.1}>
                <div className="text-accent mb-4 flex justify-center">
                  {opportunity.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {opportunity.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {opportunity.description}
                </p>
                <div className="space-y-2 mb-6">
                  {opportunity.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start">
                      <Award className="w-4 h-4 text-highlight mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full" size="sm">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-secondary to-accent rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Make a Difference?
              </h3>
              <p className="mb-6 text-white/90">
                Let's discuss how we can work together to create opportunities for South Africa's youth.
              </p>
              <Button variant="secondary">
                Start Partnership Conversation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-20 bg-soft-bg">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-white rounded-2xl p-8 card-shadow">
              <Clock className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-primary mb-4">
                Office Hours
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="font-semibold text-primary mb-3">General Inquiries</h3>
                  <p className="text-gray-600 mb-2">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-3">Application Support</h3>
                  <p className="text-gray-600 mb-2">Monday - Friday: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Closed on weekends</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                Response time: We aim to respond to all inquiries within 48 business hours.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
