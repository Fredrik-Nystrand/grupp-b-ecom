const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    cart: {
        type: 'object',
        required: true,
    },
    totalPrice: {
        type: 'string',
        required: true,
    },
    status: {
      type: 'string',
      default: 'Pending'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Order', orderSchema)