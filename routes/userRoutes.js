const express = require('express');
const { getAllUsers, getUserById } = require('../controllers/userController');
const { accessValidation, tokenExpirationCheck } = require('../middlewares/authMiddlewares');

const router = express.Router();

router.use(accessValidation, tokenExpirationCheck);

router.get('/', getAllUsers);
router.get('/:id', getUserById)

module.exports = router;
