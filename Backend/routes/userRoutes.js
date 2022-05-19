const express = require('express');
const router = express.Router();
const { createUser, loginUser, updateUser, deleteUser, createAdmin, getUserInfo, checkAdmin, getUsers } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware')

router.route('/')
    .post(createUser)
    .get(protect, getUsers)

router.route('/admin')
    .post(protect, createAdmin)

router.route('/admin/:id')
    .get(protect, checkAdmin)

router.route('/login')
    .post(loginUser)

router.route('/:id')
    .put(protect, updateUser)
    .delete(protect, deleteUser)
    .get(protect, getUserInfo)

module.exports = router;