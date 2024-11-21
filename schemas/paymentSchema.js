const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    alternativePhone: {
        type: String,
    },
    note: {
        type: String,
    },
    orderDetails: {
        total: {
            type: Number,
            required: true,
        },
        shipping: {
            type: Number,
            required: true,
        },
        payable: {
            type: Number,
            required: true,
        },
        products: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                }
            }
        ]
    }
});

module.exports = paymentSchema;