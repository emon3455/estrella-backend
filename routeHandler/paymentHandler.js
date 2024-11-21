const express = require("express");
const mongoose = require("mongoose");
const paymentSchema = require("../schemas/paymentSchema");
const router = express.Router();

const payment = new mongoose.model("Payment", paymentSchema);

//get all order:
router.get("/", async (req, res) => {
    try {
        res.status(200).json({
            message: "success"
        });
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ message: "Error fetching orders", error });
    }
});

// payment success
router.post('/success/:id', async (req, res) => {
    try {
        res.status(200).json({
            message: "success"
        });
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ message: "Error fetching orders", error });
    }
});

// payment failed
router.post('/failed/:id', async (req, res) => {
    try {
        res.status(200).json({
            message: "failed"
        });
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ message: "Error fetching orders", error });
    }
});

// payment cancel
router.post('/cancel/:id', async (req, res) => {
    try {
        res.status(200).json({
            message: "cancel"
        });
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ message: "Error fetching orders", error });
    }
});

module.exports = router;
