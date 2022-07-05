<<<<<<< HEAD

//modules
require('dotenv').config;
const express = require('express');
const app = express();


const bodyParser = require('body-parser');

const dbConnect = require('../node/configurations/dbconn');                 // connecting to database database

const port = process.env.PORT || 4201;                                  // the port

app.use( express.json() )

app.use( express.urlencoded({ extended: true }) )                     //  sending data (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body 

app.use('/products', require('./routes/product_route'))                   // calling the routes 


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

=======
const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
>>>>>>> c0246b01b112b6ef0680ee028db662f037bbe08e
