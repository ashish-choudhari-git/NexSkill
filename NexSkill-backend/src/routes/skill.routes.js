// Skill Routes
const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skill.controller');

router.get('/', skillController.getSkills);

module.exports = router; 