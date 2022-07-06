
//modules
require('dotenv').config;
const express = require('express');
const app = express();


const bodyParser = require('body-parser');
// const dbConnect = require('../node/configurations/productsconfig');                 // connecting to database database


const port = process.env.PORT || 3000;                                  // the port

app.use( express.json() )

app.use( express.urlencoded({ extended: true }) )                     //  sending data (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body 


require('./routes/productsroutes')(app)

 
app.listen(port, () => 
   console.log(`API running on localhost:${port}`)
);

