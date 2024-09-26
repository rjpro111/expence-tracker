const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST /api/users/register (register new user)
router.post('/register', userController.register);

// POST /api/users/login (user login)
router.post('/login', userController.login);

module.exports = router;
