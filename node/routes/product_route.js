// const express = require("express");
// const app = express.Router();

// const productCont = require('../controllers/productController');



// app.get('/:id', productCont.product_details);                                     // get Product by id 



// module.exports = app;

// The shopping cart route
const cart = require("../controllers/cartController")
const express = require('express')
const server = express()

server.post("/add-to-cart", cart.addToCart)

module.exports = router

module.exports =  app => {


   
    const productCont = require('../controllers/productController');

    var router =  require("express").Router();


    router.get('/',productCont.getAllProducts)
    router.get('/:id', productCont.getProductById);  

    // app.use('/api/products', router)
}


