const express = require("express");
const router = express.Router();

const orders = require('../controllers/orders');

//Get all orders
router.get("/oders", orders.oderList)
router.get("/order_list/:id", orders.getAllOrders);
router.post("/add_list/:id", orders.addorder);
router.post("/add_items/:orderid", orders.addIterms);

module.exports = router;
