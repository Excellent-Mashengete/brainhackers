const express = require('express')
const app = express();
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'dam143',
  host: 'localhost',
  database: 'onlineStore',
  password: 'password123',
  port: 5432,
})

pool.connect((err) =>{
  if(err){
      console.log('didnt connect database ')
  }
  else{
      console.log('connected to database ')
  }

})



