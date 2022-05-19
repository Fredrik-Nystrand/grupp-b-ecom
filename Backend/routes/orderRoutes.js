const express = require('express');
const router = express.Router();
const { createOrder, getOrders, getSingleOrder, updateOrder, deleteOrder, getOrdersById } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware')

router.route('/')
    .post(protect, createOrder)
    .get(protect, getOrders)

router.route('/user/:id')
.get(protect, getOrdersById)


router.route('/:id')
    .get(protect, getSingleOrder)
    .put(protect, updateOrder)
    .delete(protect, deleteOrder)

module.exports = router;