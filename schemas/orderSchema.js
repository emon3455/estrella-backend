const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
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
        required: true,
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

module.exports = orderSchema;
