const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    category: {
        type: String,
        enum: ['Men', 'Women', 'Kids', 'Bulk Order'],
        required: true
    },
    subCategory: {
        type: [String],
        required: true,
        enum: [
            // Men's subcategories
            'Short sleeve t-shirt', 'Long sleeve t-shirt', 'Polo shirt', 'Sports jersey', 
            'Dress shirt', 'Casual shirt', 'Katua', 'Panjabi', 'Pajama', 'Trouser', 
            'Cargo pant', 'Under wear', 'Tank top', 'Sweat shirt', 'Hoodie',
            // Women's subcategories
            'Comfy top bottom set', 'Kurti, Tunic, & Tops',
            // Kids' subcategories
            'Top bottom set', 'T-shirt', 'Polo shirt', 'Sleeve less t-shirt', 
            '3quarter shorts', 'Trouser',
            // Bulk Order
            'Bulk Order'
        ]
    },
    price: { type: Number, required: true },
    previousPrice: { type: Number },
    isTopSelling: { type: Boolean, default: false },
    isFreeDelivery: { type: Boolean, default: false },
    generalSize: {
        s: { type: Number, default: 0 },
        m: { type: Number, default: 0 },
        l: { type: Number, default: 0 },
        xl: { type: Number, default: 0 },
        xxl: { type: Number, default: 0 },
        xxxl: { type: Number, default: 0 }
    },
    fabrics: { type: String },
    images: {
        type: [String],
        required: true
    },
    stock: { type: Number, default: 0 }, // Tracks available stock
    createdAt: { type: Date, default: Date.now }, // Timestamp for product creation
    updatedAt: { type: Date, default: Date.now }, // Timestamp for product updates
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

module.exports = productSchema;
