// const express = require("express");
// const app = express.Router();

// const productCont = require('../controllers/productController');



// app.get('/:id', productCont.product_details);                                     // get Product by id 



// module.exports = app;


module.exports = app =>{
    const productCont = require('../controllers/productController');

    router.get('/',productCont.getAllProducts)
    router.get('/:id', productCont.getProductById);  

    app.use('api/products', router)
}


