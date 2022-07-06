
//modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const dbConnect = require('../node/configurations/dbconn');                 // connecting to database database

const port = process.env.PORT || 4201;                                  // the port

app.use( express.json() )

app.use( express.urlencoded({ extended: false }) )                     //  sending data (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body 

// app.use('/products', require('./routes/product_route'))                   // calling the routes 




//catch all errors that are not handled

// process.on('uncaughtException', (error)  => {
//     console.log('Alert! ERROR : ',  error);
//     process.exit(1);                                                       // Exit your app 
//  })

//  process.on('unhandledRejection', (error, promise)  => {
//     console.log('Alert! ERROR : ',  error);
//     process.exit(1); 
//  })

app.listen(port, (res,err) => {
   console.log(`API running on localhost:${port}`)
});

