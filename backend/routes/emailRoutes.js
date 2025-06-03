const express = require('express');
const router = express.Router();
const { 
  handleContactForm, 
  handleApplicationForm 
} = require('../controllers/emailController');

// Contact form submission
router.post('/contact', handleContactForm);

// Application form submission
router.post('/apply', handleApplicationForm);

module.exports = router;
