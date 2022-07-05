module.exports = app =>{
    const productCont = require('../controllers/productController');

    var router =  require("express").Router();


    router.get('/',productCont.getAllProducts)
    router.get('/:id', productCont.getProductById);  

    // app.use('/api/products', router)
}