// Swap Routes
const express = require('express');
const router = express.Router();
const swapController = require('../controllers/swap.controller');

router.get('/', swapController.getSwaps);

module.exports = router; 