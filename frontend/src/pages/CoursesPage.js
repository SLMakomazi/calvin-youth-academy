import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp, FaBook, FaClock, FaGraduationCap, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './CoursesPage.css';

const CoursesPage = () => {
  const [expandedCourses, setExpandedCourses] = useState({});

  const toggleCourse = (index, level) => {
    setExpandedCourses(prev => ({
      ...prev,
      [level]: prev[level] === index ? null : index
    }));

    // If we're expanding a course on mobile, scroll to it
    if (window.innerWidth <= 768 && expandedCourses[level] !== index) {
      // Use setTimeout to ensure the DOM has updated with the expanded content
      setTimeout(() => {
        const element = document.getElementById(`course-${level}-${index}`);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'nearest'
          });
          
          // For iOS devices, we need an additional scroll adjustment
          if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
            window.scrollBy(0, -80); // Adjust this value based on your header height
          }
        }
      }, 100); // Small delay to allow the content to expand
    }
  };

  const courses = [
    {
      id: 1,
      level: 5,
      title: 'Information Technology: Systems Support',
      saqaId: 'SAQA ID: 48573',
      credits: '147 Credits',
      duration: '12 months',
      prerequisites: 'NQF Level 4 qualification in IT Technical Support or equivalent',
      modules: [
        'Personal Development (40 Credits)',
        'Network Concepts, Architecture, and Standards (24 Credits)',
        'Client-Server Networking (11 Credits)',
        'LAN Design for Developmental Office and Enterprise Development (16 Credits)'
      ],
      delivery: 'Blended learning combining instructor-led sessions and online resources',
      assessment: 'Portfolio of Evidence (PoE) including practical assignments and summative assessments'
    },
    {
      id: 2,
      level: 5,
      title: 'Information Technology: Systems Development',
      saqaId: 'SAQA ID: 48872',
      credits: '131 Credits',
      duration: '12 months',
      prerequisites: 'NQF Level 4 qualification in IT or equivalent',
      modules: [
        'Programming Fundamentals',
        'Database Development',
        'Web Development',
        'Systems Analysis and Design'
      ],
      delivery: 'Classroom-based instruction with practical lab sessions',
      assessment: 'PoE comprising coding projects, assignments, and examinations'
    },
    {
      id: 3,
      level: 5,
      title: 'Information and Communication Technology (ICT): Software Testing',
      saqaId: 'SAQA ID: 83026',
      credits: '138 Credits',
      duration: '12 months',
      prerequisites: 'Communication at NQF Level 4, Mathematical Literacy at NQF Level 4, Computer Literacy at NQF Level 3',
      modules: [
        'Software Testing Fundamentals',
        'Test Planning and Design',
        'Test Execution and Defect Management',
        'Tools and Automation in Testing'
      ],
      delivery: 'Blended learning with emphasis on practical exercises',
      assessment: 'PoE including test cases, reports, and practical evaluations'
    },
    {
      id: 4,
      level: 5,
      title: 'Business Analysis Support Practice',
      saqaId: 'SAQA ID: 63769',
      credits: '138 Credits',
      duration: '12 months',
      prerequisites: 'Communication at NQF Level 4, Computer Literacy at NQF Level 4',
      modules: [
        'Introduction to Business Analysis',
        'Requirements Elicitation and Documentation',
        'Business Process Modeling',
        'Stakeholder Communication'
      ],
      delivery: 'Instructor-led sessions with case studies and group discussions',
      assessment: 'PoE including business case studies, process models, and presentations'
    },
    {
      id: 5,
      level: 6,
      title: 'Business Analysis',
      saqaId: 'SAQA ID: 63909',
      credits: '149 Credits',
      duration: '12 months',
      prerequisites: 'NQF Level 5 qualification in Business Analysis or related field',
      modules: [
        'Advanced Business Analysis Techniques',
        'Solution Assessment and Validation',
        'Business Process Improvement',
        'Change Management'
      ],
      delivery: 'Blended learning with real-world project integration',
      assessment: 'PoE including comprehensive business analysis reports and stakeholder presentations'
    },
    {
      id: 6,
      level: 6,
      title: 'Information Technology: Database Administration',
      saqaId: 'SAQA ID: 71869',
      credits: '120 Credits',
      duration: '12 months',
      prerequisites: 'NQF Level 5 qualification in IT or related field',
      modules: [
        'Database Design and Implementation',
        'SQL and PL/SQL Programming',
        'Database Security and Backup',
        'Performance Tuning and Optimization'
      ],
      delivery: 'Hands-on lab sessions complemented by theoretical instruction',
      assessment: 'PoE including database projects, scripts, and performance reports'
    }
  ];

  const teachingMethodology = [
    {
      title: 'Blended Learning',
      description: 'Combination of face-to-face instruction and online resources to accommodate diverse learning styles.'
    },
    {
      title: 'Practical Application',
      description: 'Emphasis on real-world projects and simulations to enhance employability skills.'
    },
    {
      title: 'Continuous Assessment',
      description: 'Regular formative assessments to monitor progress and provide feedback.'
    },
    {
      title: 'Mentorship',
      description: 'Access to industry professionals for guidance and career advice.'
    },
    {
      title: 'Resource Accessibility',
      description: 'Provision of necessary hardware and software tools to facilitate effective learning.'
    }
  ];

  return (
    <div className="courses-page">
      <section className="page-header">
        <div className="container">
          <div className="header-content">
            <div className="header-text">
              <h1>Our Courses</h1>
              <p>MICT SETA Accredited Qualifications</p>
            </div>
            <nav className="section-nav">
              <a href="/" className="home-btn">
                <FaHome /> Home
              </a>
              <a href="#nqf5">NQF Level 5</a>
              <a href="#nqf6">NQF Level 6</a>
              <a href="#certifications">Certifications</a>
            </nav>
          </div>
        </div>
      </section>

      <section className="courses-section">
        <div className="container">
          <div className="courses-container">
            {/* NQF Level 5 Section */}
            <div id="nqf5" className="level-section">
              <h2>NQF Level 5 Qualifications</h2>
              <p>These qualifications are designed to provide students with the knowledge and skills required to enter the workforce or continue their education at the next level.</p>
              <div className="course-cards-container">
                {courses
                  .filter(course => course.level === 5)
                  .map((course, index) => (
                    <CourseCard 
                      key={index}
                      course={course}
                      isExpanded={expandedCourses[course.level] === index}
                      onToggle={() => toggleCourse(index, course.level)}
                    />
                  ))}
              </div>
            </div>

            {/* NQF Level 6 Section */}
            <div id="nqf6" className="level-section">
              <h2>NQF Level 6 Qualifications</h2>
              <p>Advanced qualifications for those looking to specialize further in their IT career paths.</p>
              <div className="course-cards-container">
                {courses
                  .filter(course => course.level === 6)
                  .map((course, index) => (
                    <CourseCard 
                      key={index}
                      course={course}
                      isExpanded={expandedCourses[course.level] === index}
                      onToggle={() => toggleCourse(index, course.level)}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="certifications-section">
        <div className="container">
          <h2>Additional Certifications</h2>
          <p>Enhance your qualifications with these industry-recognized certifications</p>
          
          <div className="certification-categories">
            {/* Systems Support / Technical Support */}
            <div className="certification-category">
              <h3>🔵 For Systems Support / Technical Support (NQF 5)</h3>
              <div className="certification-grid">
                <div className="certification-card">
                  <h4>Microsoft Certified: Azure Fundamentals</h4>
                  <p>Learn basics of cloud services and how they are provided with Microsoft Azure.</p>
                  <span className="cert-source">Microsoft Learn</span>
                </div>
                <div className="certification-card">
                  <h4>CompTIA A+</h4>
                  <p>Covers hardware, networking, troubleshooting, and security.</p>
                  <span className="cert-source">Globally recognized IT support certification</span>
                </div>
                <div className="certification-card">
                  <h4>Cisco Networking Basics</h4>
                  <p>Great for foundational networking knowledge (can lead to CCNA track).</p>
                  <span className="cert-source">Cisco NetAcad</span>
                </div>
              </div>
            </div>

            {/* Systems Development */}
            <div className="certification-category">
              <h3>🔵 For Systems Development (NQF 5/6)</h3>
              <div className="certification-grid">
                <div className="certification-card">
                  <h4>Microsoft Power Platform Fundamentals</h4>
                  <p>Learn app development, automation, and reporting using Power Apps and Power BI.</p>
                  <span className="cert-source">Microsoft Learn</span>
                </div>
                <div className="certification-card">
                  <h4>Meta Front-End Developer Certificate</h4>
                  <p>Learn React, JavaScript, Git, and design principles.</p>
                  <span className="cert-source">Coursera</span>
                </div>
                <div className="certification-card">
                  <h4>AWS Cloud Practitioner Essentials</h4>
                  <p>Teaches cloud computing and AWS core services.</p>
                  <span className="cert-source">AWS Skill Builder</span>
                </div>
              </div>
            </div>

            {/* Software Testing */}
            <div className="certification-category">
              <h3>🔵 For Software Testing (NQF 5)</h3>
              <div className="certification-grid">
                <div className="certification-card">
                  <h4>ISTQB Certified Tester Foundation Level</h4>
                  <p>Internationally recognized certificate in software testing.</p>
                  <span className="cert-source">ISTQB</span>
                </div>
                <div className="certification-card">
                  <h4>Test Automation with Selenium WebDriver</h4>
                  <p>Useful for introducing automation testing with Selenium, JavaScript, Python, etc.</p>
                  <span className="cert-source">Udemy/Coursera</span>
                </div>
              </div>
            </div>

            {/* Business Analysis & Database Admin */}
            <div className="certification-category">
              <h3>🔵 For Business Analysis & Database Administration (NQF 5/6)</h3>
              <div className="certification-grid">
                <div className="certification-card">
                  <h4>Microsoft Power BI Data Analyst Associate</h4>
                  <p>Learn how to analyze data and create dashboards.</p>
                  <span className="cert-source">Microsoft Learn</span>
                </div>
                <div className="certification-card">
                  <h4>IBM Data Analyst Professional Certificate</h4>
                  <p>SQL, Excel, Python for data handling and reporting.</p>
                  <span className="cert-source">Coursera</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="teaching-methodology">
        <div className="container">
          <h2 className="section-title">Teaching Methodology at CYA</h2>
          <div className="methodology-grid">
            {teachingMethodology.map((item, index) => (
              <div key={index} className="methodology-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const CourseCard = ({ course, isExpanded, onToggle }) => {
  useEffect(() => {
    if (isExpanded && window.innerWidth <= 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isExpanded]);

  return (
    <div 
      id={`course-${course.level}-${course.id}`}
      className={`course-card ${isExpanded ? 'expanded' : ''}`}
    >
      <div className="course-header" onClick={onToggle}>
        <h3>National Certificate: {course.title}</h3>
        <span className="toggle-icon">
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      
      {isExpanded && (
        <button 
          className="close-expanded" 
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          aria-label="Close expanded view"
        >
          ✕
        </button>
      )}

      <div className="course-content">
        <div className="course-meta">
          <div className="info-row">
            <span className="info-label"><FaBook /> SAQA ID:</span>
            <span className="info-value">{course.saqaId}</span>
          </div>
          <div className="info-row">
            <span className="info-label"><FaClock /> Credits:</span>
            <span className="info-value">{course.credits}</span>
          </div>
          <div className="info-row">
            <span className="info-label"><FaGraduationCap /> NQF Level:</span>
            <span className="info-value">{course.level}</span>
          </div>
        </div>

        <div className="course-details">
          <div className="info-section">
            <h4>Duration</h4>
            <p>{course.duration}</p>
          </div>
          
          <div className="info-section">
            <h4>Prerequisites</h4>
            <p>{course.prerequisites}</p>
          </div>
          
          <div className="info-section">
            <h4>Modules</h4>
            <ul>
              {course.modules.map((module, idx) => (
                <li key={idx}>{module}</li>
              ))}
            </ul>
          </div>
          
          <div className="info-section">
            <h4>Delivery Method</h4>
            <p>{course.delivery}</p>
          </div>
          
          <div className="info-section">
            <h4>Assessment</h4>
            <p>{course.assessment}</p>
          </div>
          
          <div className="course-actions">
            <Link to="/apply" className="apply-btn">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;