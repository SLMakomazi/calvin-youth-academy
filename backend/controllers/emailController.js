const nodemailer = require('nodemailer');

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Handle contact form submission
exports.handleContactForm = async (req, res) => {
  try {
    const { name, email, subject, message, department = 'General Inquiry' } = req.body;
    
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required'
      });
    }

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_FROM}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `[Contact Form] ${subject} (${department})`,
      text: `You received a new message from the contact form:\n\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Department: ${department}\n\n` +
            `Message:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Department:</strong> ${department}</p>
          <h3>Message:</h3>
          <p style="white-space: pre-line;">${message}</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    
    res.json({ 
      success: true,
      message: 'Your message has been sent successfully! We will get back to you soon.'
    });
  } catch (error) {
    console.error('Error sending contact form:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to send message. Please try again later.' 
    });
  }
};

// Handle application form submission
exports.handleApplicationForm = async (req, res) => {
  try {
    const formData = req.body;
    
    if (!formData.fullName || !formData.email) {
      return res.status(400).json({
        success: false,
        error: 'Name and email are required fields'
      });
    }

    // Format the email content
    let emailText = 'NEW APPLICATION RECEIVED\n\n';
    let emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Application Received</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
    `;
    
    // Add form data to email
    for (const [key, value] of Object.entries(formData)) {
      if (value && value !== '') {
        const label = key
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, str => str.toUpperCase())
          .replace(/([a-z])([A-Z])/g, '$1 $2');
        
        emailText += `${label}: ${value}\n`;
        emailHtml += `
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 30%;">${label}</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${value}</td>
          </tr>
        `;
      }
    }
    
    emailHtml += `
        </table>
      </div>
    `;

    await transporter.sendMail({
      from: `"Calvin Youth Academy Applications" <${process.env.EMAIL_FROM}>`,
      to: process.env.ADMISSIONS_EMAIL || process.env.ADMIN_EMAIL,
      replyTo: formData.email,
      subject: `New Application: ${formData.fullName || 'New Applicant'}`,
      text: emailText,
      html: emailHtml,
      // For file attachments, add them here if needed
      // attachments: [ ... ]
    });


    res.json({ 
      success: true,
      message: 'Your application has been submitted successfully! We will review it and contact you soon.'
    });
  } catch (error) {
    console.error('Error processing application:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to submit application. Please try again later.' 
    });
  }
};
