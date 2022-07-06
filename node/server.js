
//modules
require('dotenv').config;
const express = require('express');
const app = express();
               // connecting to database database
const dbConnect = require('../node/configurations/dbregisterconn');
const port = process.env.PORT || 4208;                                  // the port

app.use( express.json() )

app.use( express.urlencoded({ extended: true }) )                     //  sending data (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body 

app.use('/', require('./routes/product_route'))  
require('./routes/register.route')(app)  // calling the routes 


 
app.listen(port, () => 
   console.log(`API running on localhost:${port}`)
);



