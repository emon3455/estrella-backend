const express = require("express");
const mongoose = require("mongoose");
const orderSchema = require("../schemas/orderSchema");
const router = express.Router();

const Order = new mongoose.model("Order", orderSchema);

//get all order:
router.get("/", async (req, res) => {
    const { email } = req.query;
    try {
        let orders;
        if (email) {
            orders = await Order.find({ email })
                .populate({
                    path: 'orderDetails.products.product',
                    select: 'title price'
                });
        } else {
            orders = await Order.find()
                .populate({
                    path: 'orderDetails.products.product',
                    select: 'title price'
                });
        }

        res.status(200).json({
            result : orders.length,
            orders: orders,
            message: "success"
        });
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ message: "Error fetching orders", error });
    }
});

// POST route to create a new order
router.post("/", async (req, res) => {
    
    const newOrder = new Order(req.body);

    try {
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({ message: "Error creating order", error });
    }
});

module.exports = router;
