// Feedback Routes
const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedback.controller');

router.get('/', feedbackController.getFeedback);

module.exports = router; 