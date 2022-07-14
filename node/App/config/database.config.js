const {Client} = require("pg");
//const client = new Client(process.env.DB_URL);

 const client = new Client({
     connectionString: process.env.DB_URL,
     ssl:{
         rejectUnauthorized: false //allows external access to database when using nodejs
     }
 });

module.exports = client;