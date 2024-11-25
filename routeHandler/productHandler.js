const express = require("express");
const mongoose = require("mongoose");
const productSchema = require("../schemas/productSchema");
const router = express.Router();

const Product = new mongoose.model("Product", productSchema);

// filter product
router.get("/filter", async (req, res) => {
  try {
    const { category, subCategory } = req.query;

    const query = {};

    if (category) query.category = category; 
    if (subCategory) query.subCategory = { $in: subCategory.split(",") }; 

    const products = await Product.find(query);

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found." });
    }

    res.status(200).json({ count: products.length, products });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();

    if (!products.length) {
      return res.status(404).json({ message: "No products found." });
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Get a single product
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});


// Add a new product
router.post("/add", async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      subCategory,
      price,
      previousPrice,
      isTopSelling,
      isFreeDelivery,
      generalSize,
      fabrics,
      images,
      stock,
    } = req.body;

    // Create a new product
    const newProduct = new Product({
      title,
      description,
      category,
      subCategory,
      price,
      previousPrice,
      isTopSelling,
      isFreeDelivery,
      generalSize,
      fabrics,
      images,
      stock,
    });

    const savedProduct = await newProduct.save();
    res
      .status(201)
      .json({ message: "Product added successfully.", product: savedProduct });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Update a product
router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body.productData;

    // Ensure subCategory is an array if provided
    if (updates.subCategory && !Array.isArray(updates.subCategory)) {
      return res.status(400).json({ message: "subCategory must be an array." });
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.status(200).json({
      message: "Product updated successfully.",
      product: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Delete a product
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.status(200).json({ message: "Product deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
