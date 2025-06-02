import React from 'react';
import { FaLaptopCode, FaDatabase, FaSearch, FaChartLine, FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
  const courses = {
    level5: [
      {
        id: 1,
        title: 'National Certificate: Information Technology: Systems Support',
        description: 'IT infrastructure, hardware/software support, and user assistance.',
        outcome: 'Helpdesk, desktop support, IT technician roles.',
        icon: <FaLaptopCode className="course-icon" />,
      },
      {
        id: 2,
        title: 'National Certificate: Information Technology: Systems Development',
        description: 'Application development, programming, software design.',
        outcome: 'Junior developer, software engineer assistant.',
        icon: <FaLaptopCode className="course-icon" />,
      },
      {
        id: 3,
        title: 'National Certificate: ICT: Software Testing',
        description: 'Software quality assurance, testing life cycles, bug tracking.',
        outcome: 'QA tester, software tester, test analyst.',
        icon: <FaSearch className="course-icon" />,
      },
      {
        id: 4,
        title: 'National Certificate: Business Analysis Support Practice',
        description: 'Foundational business analysis tools and IT project support.',
        outcome: 'Junior business analyst, IT project support.',
        icon: <FaChartLine className="course-icon" />,
      },
    ],
    level6: [
      {
        id: 5,
        title: 'National Certificate: Business Analysis',
        description: 'Advanced business analysis, process improvement, IT solution design.',
        outcome: 'Business analyst, systems analyst.',
        icon: <FaChartLine className="course-icon" />,
      },
      {
        id: 6,
        title: 'Certificate: Information Technology: Database Administration',
        description: 'Database design, administration, security, and performance tuning.',
        outcome: 'Database administrator (DBA), data support roles.',
        icon: <FaDatabase className="course-icon" />,
      },
    ],
  };

  return (
    <section className="courses-section" id="courses">
      <div className="container">
        <div className="section-header">
          <h2>Our Courses</h2>
          <div className="divider"></div>
          <p className="section-subtitle">MICT SETA Accredited Qualifications</p>
        </div>

        <div className="courses-grid">
          <div className="course-level">
            <h3 className="level-title">
              <FaGraduationCap className="level-icon" />
              NQF Level 5 Qualifications
            </h3>
            <div className="courses-container">
              {courses.level5.map((course) => (
                <div className="course-card" key={course.id}>
                  <div className="course-icon-container">
                    {course.icon}
                  </div>
                  <h4>{course.title}</h4>
                  <p className="course-description">{course.description}</p>
                  <p className="course-outcome">
                    <strong>Career Path:</strong> {course.outcome}
                  </p>
                  <Link to="/courses" className="course-link">
                    Learn More <span>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="course-level">
            <h3 className="level-title">
              <FaGraduationCap className="level-icon" />
              NQF Level 6 Qualifications
            </h3>
            <div className="courses-container">
              {courses.level6.map((course) => (
                <div className="course-card" key={course.id}>
                  <div className="course-icon-container">
                    {course.icon}
                  </div>
                  <h4>{course.title}</h4>
                  <p className="course-description">{course.description}</p>
                  <p className="course-outcome">
                    <strong>Career Path:</strong> {course.outcome}
                  </p>
                  <Link to="/courses" className="course-link">
                    Learn More <span>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="courses-note">
          <p>More qualifications will be introduced in phases as we expand our accreditation footprint and lab infrastructure.</p>
        </div>
      </div>
    </section>
  );
};

export default Courses;