import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaBook, FaClock, FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './CoursesPage.css';

const CoursesPage = () => {
  const [expandedCourse, setExpandedCourse] = useState(null);

  const toggleCourse = (id) => {
    setExpandedCourse(expandedCourse === id ? null : id);
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
          <h1>Our Courses</h1>
          <p>MICT SETA Accredited Qualifications</p>
        </div>
      </section>

      <section className="courses-section">
        <div className="container">
          <div className="courses-container">
            {/* NQF Level 5 Section */}
            <div className="level-section">
              <h2>NQF Level 5 Qualifications</h2>
              <p>These qualifications are designed to provide students with the knowledge and skills required to enter the workforce or continue their education at the next level.</p>
              <div className="course-cards-container">
                {courses
                  .filter(course => course.level === 5)
                  .map(course => (
                    <CourseCard 
                      key={course.id}
                      course={course}
                      isExpanded={expandedCourse === course.id}
                      onToggle={() => toggleCourse(course.id)}
                    />
                  ))}
              </div>
            </div>

            {/* NQF Level 6 Section */}
            <div className="level-section">
              <h2>NQF Level 6 Qualifications</h2>
              <p>Advanced qualifications for those looking to specialize further in their IT career paths.</p>
              <div className="course-cards-container">
                {courses
                  .filter(course => course.level === 6)
                  .map(course => (
                    <CourseCard 
                      key={course.id}
                      course={course}
                      isExpanded={expandedCourse === course.id}
                      onToggle={() => toggleCourse(course.id)}
                    />
                  ))}
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
  return (
    <div className={`course-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="course-header" onClick={onToggle}>
        <h3>National Certificate: {course.title}</h3>
        <span className="toggle-icon">
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      
      <div className="course-details">
        <div className="course-meta">
          <span><FaBook /> {course.saqaId}</span>
          <span><FaGraduationCap /> {course.credits}</span>
          <span><FaClock /> {course.duration}</span>
        </div>
        
        <div className="course-content">
          <div className="info-row">
            <h4>Prerequisites:</h4>
            <p>{course.prerequisites}</p>
          </div>
          
          <div className="info-row">
            <h4>Modules:</h4>
            <ul>
              {course.modules.map((module, idx) => (
                <li key={idx}>{module}</li>
              ))}
            </ul>
          </div>
          
          <div className="info-row">
            <h4>Delivery:</h4>
            <p>{course.delivery}</p>
          </div>
          
          <div className="info-row">
            <h4>Assessment:</h4>
            <p>{course.assessment}</p>
          </div>
          
          <div className="course-actions">
            <Link to="/apply" className="btn btn-primary">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;