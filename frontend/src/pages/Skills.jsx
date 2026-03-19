import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Target, TrendingUp, Users, Clock, Star, ArrowRight, Monitor, Palette, BarChart, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';

const Skills = () => {
  const courses = [
    {
      title: "Business Management",
      level: "Level 5",
      duration: "6 months",
      format: "Online",
      description: "Comprehensive business management skills including leadership, strategy, and operations.",
      outcomes: [
        "Strategic planning and execution",
        "Team leadership and management",
        "Financial management basics",
        "Business communication"
      ],
      careers: ["Business Manager", "Team Lead", "Operations Coordinator", "Project Assistant"],
      icon: <Target className="w-6 h-6" />,
      color: "secondary"
    },
    {
      title: "Project Management",
      level: "Level 6",
      duration: "8 months", 
      format: "Online",
      description: "Advanced project management methodologies and practical implementation skills.",
      outcomes: [
        "Project planning and scheduling",
        "Risk management and mitigation",
        "Stakeholder management",
        "Agile and Scrum methodologies"
      ],
      careers: ["Project Manager", "Program Coordinator", "Scrum Master", "Project Analyst"],
      icon: <Award className="w-6 h-6" />,
      color: "accent"
    },
    {
      title: "Digital Marketing",
      level: "Level 5",
      duration: "4 months",
      format: "Online",
      description: "Modern digital marketing strategies including social media, content, and analytics.",
      outcomes: [
        "Social media marketing",
        "Content creation and strategy",
        "SEO and SEM fundamentals",
        "Marketing analytics"
      ],
      careers: ["Digital Marketer", "Social Media Manager", "Content Creator", "Marketing Analyst"],
      icon: <TrendingUp className="w-6 h-6" />,
      color: "highlight"
    },
    {
      title: "Data Analytics",
      level: "Level 6",
      duration: "8 months",
      format: "Online",
      description: "Data analysis, visualization, and interpretation skills for business decision-making.",
      outcomes: [
        "Data collection and cleaning",
        "Statistical analysis",
        "Data visualization",
        "Business intelligence reporting"
      ],
      careers: ["Data Analyst", "Business Intelligence Analyst", "Research Analyst", "Data Coordinator"],
      icon: <BarChart className="w-6 h-6" />,
      color: "secondary"
    },
    {
      title: "Web Development",
      level: "Level 5",
      duration: "6 months",
      format: "Online",
      description: "Full-stack web development with modern frameworks and deployment practices.",
      outcomes: [
        "HTML/CSS/JavaScript fundamentals",
        "React and modern frameworks",
        "Backend development basics",
        "Version control and deployment"
      ],
      careers: ["Frontend Developer", "Web Developer", "Junior Full-Stack Developer", "UI Developer"],
      icon: <Monitor className="w-6 h-6" />,
      color: "accent"
    },
    {
      title: "UI/UX Design",
      level: "Level 5",
      duration: "5 months",
      format: "Online",
      description: "User interface and experience design principles with practical application.",
      outcomes: [
        "Design thinking methodology",
        "User research and personas",
        "Wireframing and prototyping",
        "Design tools and software"
      ],
      careers: ["UI Designer", "UX Designer", "Product Designer", "Design Researcher"],
      icon: <Palette className="w-6 h-6" />,
      color: "highlight"
    }
  ];

  const features = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "100% Online Learning",
      description: "Study from anywhere with flexible schedules that work for you"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with real-world experience"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Accredited Certification",
      description: "Nationally recognized qualifications that employers value"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Career Support",
      description: "Job placement assistance and career guidance throughout your journey"
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
            <div className="inline-flex items-center bg-highlight/10 text-highlight px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-5 h-5 mr-2" />
              <span className="font-medium">Skills Development Programme</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Industry-Relevant <span className="gradient-text">Skills Training</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Accredited online courses designed to prepare you for real-world opportunities. 
              Part of our comprehensive Youth Career Pathways Programme.
            </p>
            <Button size="lg">
              Apply for Skills Training
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} delay={index * 0.1} className="text-center">
                <div className="text-accent mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-soft-bg">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Available Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of accredited Level 5 and 6 qualifications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`text-${course.color}`}>
                      {course.icon}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-highlight bg-highlight/10 px-2 py-1 rounded">
                        {course.level}
                      </span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {course.format}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {course.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-500 mb-4">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-2">What You'll Learn:</h4>
                    <ul className="space-y-1">
                      {course.outcomes.slice(0, 3).map((outcome, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <Star className="w-3 h-3 text-highlight mr-2 flex-shrink-0 mt-1" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-2">Career Paths:</h4>
                    <div className="flex flex-wrap gap-1">
                      {course.careers.slice(0, 2).map((career, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {career}
                        </span>
                      ))}
                      <span className="text-xs text-gray-400">+{course.careers.length - 2} more</span>
                    </div>
                  </div>
                  
                  <Button className="w-full" size="sm">
                    Learn More
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary mb-6">
                Modern Learning Approach
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our skills development programme combines cutting-edge online learning 
                  with personalized support to ensure your success. We understand that 
                  every learner has unique needs and schedules.
                </p>
                <p>
                  Through our partnership with leading educational institutions and 
                  industry experts, we deliver curriculum that's current, relevant, 
                  and aligned with market demands.
                </p>
                <p>
                  Best of all, these courses are integrated into our comprehensive 
                  Youth Career Pathways Programme, meaning you don't just get skills— 
                  you get a complete pathway to employment.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                    <div className="text-gray-600 text-sm">Active Learners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">95%</div>
                    <div className="text-gray-600 text-sm">Completion Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-highlight mb-2">85%</div>
                    <div className="text-gray-600 text-sm">Job Placement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">4.8/5</div>
                    <div className="text-gray-600 text-sm">Student Rating</div>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Start Your Skills Journey Today
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Join hundreds of young people who are transforming their careers through 
              our accredited skills development programme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary">
                Download Course Catalog
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Skills;
