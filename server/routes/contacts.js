const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   POST /api/contacts
// @desc    Submit a new contact form
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    
    // Create new contact
    const contact = new Contact({
      name,
      email,
      phone,
      subject,
      message
    });
    
    // Save to database
    await contact.save();
    
    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    
    // Validation error
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        error: messages
      });
    }
    
    res.status(500).json({
      success: false,
      error: 'Server error'
    });
  }
});

// @route   GET /api/contacts
// @desc    Get all contacts (protected in production)
// @access  Private (should be protected in production)
router.get('/', async (req, res) => {
  try {
    // In production, you should add authentication middleware
    // to protect this route
    
    const contacts = await Contact.find().sort({ submittedAt: -1 });
    
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      error: 'Server error'
    });
  }
});

module.exports = router;
