// routes/twilioRoutes.js

const express = require('express');
const router = express.Router();
const twilioController = require('../controllers/twilioController');

// Define a POST route for sending SMS
router.post('/send-sms', twilioController.sendSms); // Changed sendSMS to sendSms

module.exports = router;
