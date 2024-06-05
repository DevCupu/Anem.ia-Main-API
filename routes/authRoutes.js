const express = require('express');
const { UsersRegister, UsersLogin } = require('../controllers/authController');

const router = express.Router();

router.post('/register', UsersRegister);
router.post('/login', UsersLogin);

module.exports = router;
