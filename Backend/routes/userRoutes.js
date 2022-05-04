const express = require('express');
const router = express.Router();
const { createUser, loginUser, updateUser, deleteUser, createAdmin } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware')

router.route('/')
    .post(createUser)

router.route('/admin')
    .post(protect, createAdmin)

router.route('/login')
    .post(loginUser)

router.route('/:id')
    .put(protect, updateUser)
    .delete(protect, deleteUser)

module.exports = router;