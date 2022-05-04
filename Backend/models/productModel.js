const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: 'string',
        required: true,
    },
    description: {
        type: 'string',
        required: true,
    },
    price: {
        type: 'string',
        required: true,
    },
    imgURL: {
        type: 'string',
        required: true,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema)