const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    category: {
        type: String,
        enum: ['men', 'women', 'kids', 'bulk_order'],
        required: true
    },
    subCategory: {
        type: [String],
        required: true,
        enum: [
            // Men's subcategories
            'short_sleeve_t_shirt', 'long_sleeve_t_shirt', 'polo_shirt', 'sports_jersey', 
            'dress_shirt', 'casual_shirt', 'katua', 'panjabi', 'pajama', 'trouser', 
            'cargo_pant', 'under_wear', 'tank_top', 'sweat_shirt', 'hoodie',
            // Women's subcategories
            'comfy_top_bottom_set', 'kurti_tunic_tops',
            // Kids' subcategories
            'top_bottom_set', 't_shirt', 'polo_shirt', 'sleeve_less_t_shirt', 
            '3_quarter_shorts', 'trouser',
            // Bulk Order
            'bulk_order'
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
