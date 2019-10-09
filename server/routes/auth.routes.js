const express = require('express');
const router = express.Router();
const authController = require('../controller/auth.controller');

// FROM REACT_GOOGLE
router.post('/login/google', authController.loginUser);

module.exports = router;
