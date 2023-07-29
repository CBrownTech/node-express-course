const express = require('express');
const router = express.Router();
const { logon } = require('../controllers/authController');

// POST request for logon
router.post('/logon', logon);

module.exports = router;