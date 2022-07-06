
//modules
require('dotenv').config;
const express = require('express');
const app = express();

const cors = require('cors')                                    //initialising cors 
const bodyParser = require('body-parser');

const dbConnect = require('../node/controllers/productController');                // connecting to database database

const port = process.env.PORT || 4201;                                  // the port

app.use( express.json() )

app.use( express.urlencoded({ extended: true }) )                     //  sending data (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body 

//==================================== calling the routes======================= 
app.use('/', require('./routes/product_route'))                   

  //================================== using cors ===============================
// app.use( cors({                                                   
//    origin: 'http://localhost:4200'
// }) )     
     
// //=====================================using cors for all =======================
// app.use( cors({                                                     // using cors 
//    origin: '*'
// }) ) 

app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "http://localhost:4200D"); // update to match the domain you will make the request from
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });
 
// app.get('/', (req, res) =>{
//    res.send("welcome");
// })



//catch all errors that are not handled

// process.on('uncaughtException', (error)  => {
//     console.log('Alert! ERROR : ',  error);
//     process.exit(1);                                                       // Exit your app 
//  })

//  process.on('unhandledRejection', (error, promise)  => {
//     console.log('Alert! ERROR : ',  error);
//     process.exit(1); 
//  })


 
app.listen(port, () => 
   console.log(`API running on localhost:${port}`)
);

