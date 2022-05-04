const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: 'string',
        required: true,
    },
    email: {
        type: 'string',
        required: true,
    },
    password: {
        type: 'string',
        required: true,
    },
    isAdmin: {
        type: 'boolean',
        default: false,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)