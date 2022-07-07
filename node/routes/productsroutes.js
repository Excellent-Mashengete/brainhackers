module.exports = app =>{
    // const dbConnect = require('../node/configurations/productsconfig');                 // connecting to database database


    // app.use('/products', require('./configurations/productsconfig'))    


    const products = require('../controllers/productscontroller')

    app.get('/users', products.getUsers )
}
               
