const express = require('express');
const router = express.Router();
const userController = require('../controller/authController');

router.post('/login', userController.logIn);
router.post('/register', userController.register);

module.exports = router;
