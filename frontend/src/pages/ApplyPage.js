import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './ApplyPage.css';

const ApplyPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [filePreviews, setFilePreviews] = useState({});
  const [fileErrors, setFileErrors] = useState({});
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const provinces = [
    'Eastern Cape', 'Free State', 'Gauteng', 'KwaZulu-Natal', 
    'Limpopo', 'Mpumalanga', 'North West', 'Northern Cape', 'Western Cape'
  ];

  const qualifications = [
    'Grade 10', 'Grade 11', 'Matric', 'Certificate', 'Diploma', 'Degree'
  ];

  const courses = [
    'IT Systems Support (NQF 5)',
    'Systems Development (NQF 5)',
    'Software Testing (NQF 5)',
    'Business Analysis Support (NQF 5)',
    'Business Analysis (NQF 6)',
    'Database Administration (NQF 6)'
  ];

  const referralSources = [
    'Social Media', 'Referral', 'School Visit', 'Website', 'Other'
  ];

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type and size
    const validTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    const maxSize = 3 * 1024 * 1024; // 3MB

    if (!validTypes.includes(file.type)) {
      setFileErrors(prev => ({
        ...prev,
        [fieldName]: 'Please upload a PDF, JPG, or PNG file'
      }));
      return;
    }

    if (file.size > maxSize) {
      setFileErrors(prev => ({
        ...prev,
        [fieldName]: 'File size should be less than 3MB'
      }));
      return;
    }

    setFileErrors(prev => ({
      ...prev,
      [fieldName]: null
    }));

    // Create preview for images
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreviews(prev => ({
          ...prev,
          [fieldName]: reader.result
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setFilePreviews(prev => ({
        ...prev,
        [fieldName]: 'PDF Document'
      }));
    }
  };

  const onSubmit = (data) => {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', data);
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="apply-page">
        <div className="container">
          <div className="thank-you-message">
            <h2>Thank You for Your Application</h2>
            <p>We've received your application and will review it shortly.</p>
            <p>We'll contact you via email or phone regarding the next steps.</p>
            <a href="/" className="home-btn">Return to Home</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="apply-page">
      <div className="container">
        <h1>Application Form</h1>
        <p className="form-subtitle">Please fill in all required fields (*)</p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="application-form">
          {/* Section 1: Personal Details */}
          <section className="form-section">
            <h2>1. Personal Details</h2>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  id="fullName"
                  type="text"
                  {...register('fullName', { required: 'Full name is required' })}
                  className={errors.fullName ? 'error' : ''}
                />
                {errors.fullName && <span className="error-message">{errors.fullName.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="idNumber">ID / Passport Number *</label>
                <input
                  id="idNumber"
                  type="text"
                  {...register('idNumber', { required: 'ID/Passport number is required' })}
                  className={errors.idNumber ? 'error' : ''}
                />
                {errors.idNumber && <span className="error-message">{errors.idNumber.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="dob">Date of Birth *</label>
                <input
                  id="dob"
                  type="date"
                  {...register('dob', { required: 'Date of birth is required' })}
                  className={errors.dob ? 'error' : ''}
                />
                {errors.dob && <span className="error-message">{errors.dob.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="gender">Gender *</label>
                <select
                  id="gender"
                  {...register('gender', { required: 'Gender is required' })}
                  className={errors.gender ? 'error' : ''}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
                {errors.gender && <span className="error-message">{errors.gender.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="contactNumber">Contact Number *</label>
                <input
                  id="contactNumber"
                  type="tel"
                  {...register('contactNumber', { 
                    required: 'Contact number is required',
                    pattern: {
                      value: /^[0-9+\s-]+$/,
                      message: 'Please enter a valid phone number'
                    }
                  })}
                  className={errors.contactNumber ? 'error' : ''}
                />
                {errors.contactNumber && <span className="error-message">{errors.contactNumber.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email.message}</span>}
              </div>

              <div className="form-group full-width">
                <label htmlFor="address">Home Address *</label>
                <textarea
                  id="address"
                  rows="3"
                  {...register('address', { required: 'Home address is required' })}
                  className={errors.address ? 'error' : ''}
                ></textarea>
                {errors.address && <span className="error-message">{errors.address.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="province">Province *</label>
                <select
                  id="province"
                  {...register('province', { required: 'Province is required' })}
                  className={errors.province ? 'error' : ''}
                >
                  <option value="">Select Province</option>
                  {provinces.map(province => (
                    <option key={province} value={province}>{province}</option>
                  ))}
                </select>
                {errors.province && <span className="error-message">{errors.province.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="citizenship">Citizenship *</label>
                <select
                  id="citizenship"
                  {...register('citizenship', { required: 'Citizenship is required' })}
                  className={errors.citizenship ? 'error' : ''}
                >
                  <option value="">Select Citizenship</option>
                  <option value="south-african">South African</option>
                  <option value="other">Other</option>
                </select>
                {errors.citizenship && <span className="error-message">{errors.citizenship.message}</span>}
              </div>
            </div>
          </section>

          {/* Section 2: Educational Background */}
          <section className="form-section">
            <h2>2. Educational Background</h2>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="highestQualification">Highest Qualification *</label>
                <select
                  id="highestQualification"
                  {...register('highestQualification', { required: 'Highest qualification is required' })}
                  className={errors.highestQualification ? 'error' : ''}
                >
                  <option value="">Select Qualification</option>
                  {qualifications.map(qualification => (
                    <option key={qualification} value={qualification}>{qualification}</option>
                  ))}
                </select>
                {errors.highestQualification && <span className="error-message">{errors.highestQualification.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="institution">Institution Last Attended *</label>
                <input
                  id="institution"
                  type="text"
                  {...register('institution', { required: 'Institution name is required' })}
                  className={errors.institution ? 'error' : ''}
                />
                {errors.institution && <span className="error-message">{errors.institution.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="yearCompleted">Year Completed / Last Attended *</label>
                <input
                  id="yearCompleted"
                  type="number"
                  min="1900"
                  max={new Date().getFullYear()}
                  {...register('yearCompleted', { 
                    required: 'Year is required',
                    min: {
                      value: 1900,
                      message: 'Please enter a valid year'
                    },
                    max: {
                      value: new Date().getFullYear(),
                      message: 'Year cannot be in the future'
                    }
                  })}
                  className={errors.yearCompleted ? 'error' : ''}
                />
                {errors.yearCompleted && <span className="error-message">{errors.yearCompleted.message}</span>}
              </div>

              <div className="form-group full-width">
                <label htmlFor="academicRecord">Upload Academic Record / Last School Report *</label>
                <input
                  id="academicRecord"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileChange(e, 'academicRecord')}
                  className={fileErrors.academicRecord ? 'error' : ''}
                />
                {filePreviews.academicRecord && (
                  <div className="file-preview">
                    {filePreviews.academicRecord.startsWith('data:image') ? (
                      <img src={filePreviews.academicRecord} alt="Preview" className="file-thumbnail" />
                    ) : (
                      <span>{filePreviews.academicRecord}</span>
                    )}
                  </div>
                )}
                {fileErrors.academicRecord && (
                  <span className="error-message">{fileErrors.academicRecord}</span>
                )}
              </div>
            </div>
          </section>

          {/* Section 3: Course Selection */}
          <section className="form-section">
            <h2>3. Course Selection</h2>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="course">Course Applying For *</label>
                <select
                  id="course"
                  {...register('course', { required: 'Please select a course' })}
                  className={errors.course ? 'error' : ''}
                >
                  <option value="">Select Course</option>
                  {courses.map(course => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
                {errors.course && <span className="error-message">{errors.course.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="hearAbout">How did you hear about CYA? *</label>
                <select
                  id="hearAbout"
                  {...register('hearAbout', { required: 'This field is required' })}
                  className={errors.hearAbout ? 'error' : ''}
                >
                  <option value="">Select an option</option>
                  {referralSources.map(source => (
                    <option key={source} value={source}>{source}</option>
                  ))}
                </select>
                {errors.hearAbout && <span className="error-message">{errors.hearAbout.message}</span>}
              </div>
            </div>
          </section>

          {/* Section 4: Device Access */}
          <section className="form-section">
            <h2>4. Device Access</h2>
            <div className="form-group">
              <label className="toggle-label">
                <span>Do you have access to a computer at home? *</span>
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    id="hasComputer"
                    {...register('hasComputer')}
                  />
                  <span className="slider"></span>
                </div>
                <span className="toggle-status">
                  {watch('hasComputer') ? 'Yes' : 'No'}
                </span>
              </label>
            </div>
          </section>

          {/* Section 5: Document Uploads */}
          <section className="form-section">
            <h2>5. Document Uploads</h2>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="idCopy">Upload Certified ID Copy *</label>
                <input
                  id="idCopy"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileChange(e, 'idCopy')}
                  className={fileErrors.idCopy ? 'error' : ''}
                />
                {filePreviews.idCopy && (
                  <div className="file-preview">
                    {filePreviews.idCopy.startsWith('data:image') ? (
                      <img src={filePreviews.idCopy} alt="ID Preview" className="file-thumbnail" />
                    ) : (
                      <span>{filePreviews.idCopy}</span>
                    )}
                  </div>
                )}
                {fileErrors.idCopy && (
                  <span className="error-message">{fileErrors.idCopy}</span>
                )}
                <p className="file-hint">(PDF, JPG, or PNG, max 3MB)</p>
              </div>

              <div className="form-group">
                <label htmlFor="proofOfResidence">Upload Proof of Residence *</label>
                <input
                  id="proofOfResidence"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileChange(e, 'proofOfResidence')}
                  className={fileErrors.proofOfResidence ? 'error' : ''}
                />
                {filePreviews.proofOfResidence && (
                  <div className="file-preview">
                    {filePreviews.proofOfResidence.startsWith('data:image') ? (
                      <img src={filePreviews.proofOfResidence} alt="Residence Proof Preview" className="file-thumbnail" />
                    ) : (
                      <span>{filePreviews.proofOfResidence}</span>
                    )}
                  </div>
                )}
                {fileErrors.proofOfResidence && (
                  <span className="error-message">{fileErrors.proofOfResidence}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="affidavit">Upload Affidavit (if applicable)</label>
                <input
                  id="affidavit"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileChange(e, 'affidavit')}
                  className={fileErrors.affidavit ? 'error' : ''}
                />
                {filePreviews.affidavit && (
                  <div className="file-preview">
                    {filePreviews.affidavit.startsWith('data:image') ? (
                      <img src={filePreviews.affidavit} alt="Affidavit Preview" className="file-thumbnail" />
                    ) : (
                      <span>{filePreviews.affidavit}</span>
                    )}
                  </div>
                )}
                {fileErrors.affidavit && (
                  <span className="error-message">{fileErrors.affidavit}</span>
                )}
                <p className="file-hint">(For unemployed/financial need)</p>
              </div>
            </div>
          </section>

          {/* Section 6: Declaration & Consent */}
          <section className="form-section">
            <h2>6. Declaration & Consent</h2>
            <div className="declaration-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  {...register('declaration', { required: 'You must accept the declaration' })}
                  className={errors.declaration ? 'error' : ''}
                />
                <span>I hereby declare that the information provided is true and complete to the best of my knowledge. *</span>
              </label>
              {errors.declaration && <span className="error-message">{errors.declaration.message}</span>}
            </div>

            <div className="declaration-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  {...register('consent', { required: 'You must give consent' })}
                  className={errors.consent ? 'error' : ''}
                />
                <span>I agree to the processing of my personal data for application and record purposes. *</span>
              </label>
              {errors.consent && <span className="error-message">{errors.consent.message}</span>}
            </div>
          </section>

          {/* Section 7: Submit */}
          <section className="form-section submit-section">
            <div className="application-notice">
              <p>We are currently not accepting applications at this time. Please check back later for updates.</p>
            </div>
            <button 
              type="submit" 
              className="submit-btn" 
              disabled={true}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default ApplyPage;