const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// express app initialization:
const app = express();

// middle ware
app.use(express.json());
app.use(cors());

// ---handler---
const userHandler = require("./routeHandler/usersHandler");
const productHandler = require("./routeHandler/productHandler");
const orderHandler = require("./routeHandler/orderHandler");
const paymentHandler = require("./routeHandler/paymentHandler");

// database connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zyyhzcl.mongodb.net/estrellaDB?retryWrites=true&w=majority`;
const options = {
};

// connection
const DBConnection = (module.exports = () => {
  try {
    mongoose.connect(uri, options);
    console.log("Connection Successfull");
  } catch (err) {
    console.log(err);
  }
});
DBConnection();

// --------all routes---------

// user routes
app.use("/user", userHandler);
app.use("/product", productHandler);
app.use("/order", orderHandler);
app.use("/payment", paymentHandler);

// basic error handeling
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: "Internal Server Error...!!" });
}
app.use(errorHandler);

app.get("/", async (req, res) => {
  res.send("Estrella Server is running....");
});

app.listen(5000, () => {
  console.log("app listening at port 5000");
});
