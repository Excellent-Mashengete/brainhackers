
//modules
require('dotenv').config;
const express = require('express');
const app = express();
const cors = require("cors");

const cors = require('cors')                                    //initialising cors 
const bodyParser = require('body-parser');
// const dbConnect = require('../node/configurations/productsconfig');                 // connecting to database database

const dbConnect = require('../node/configurations/dbconn');  
const dbConnect = require('../node/controllers/productController');                // connecting to database database
const port = process.env.PORT || 4201;                                  // the port

var corsOptions = {
   origin: "http://localhost:8081"
 };
 
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

 app.use(cors(corsOptions));
 // parse requests of content-type - application/json

 app.use(express.json());
 // parse requests of content-type - application/x-www-form-urlencoded
 app.use(express.urlencoded({ extended: true }));

app.use( express.json() )

app.use( express.urlencoded({ extended: true }) )                     //  sending data (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body 

app.use('/products', require('./routes/product_route'))                   // calling the routes 

// app.get("/", (req, res) => {
//    res.json({ message: "Welcome to bezkoder application." });
//  });

require('./routes/productsroutes')(app)
 
app.listen(port, () => 
   console.log(`API running on localhost:${port}`)
);

