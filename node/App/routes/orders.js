const express = require("express");
const router = express.Router();

const orders = require('../controllers/productlist');

//Get all orders
router.get("/orderitems", orders.produclist);
module.exports = router;
