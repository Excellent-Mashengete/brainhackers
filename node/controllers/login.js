require('dotenv').config; 
const { request, response } = require("express");  
const poolConnection = require('../configurations/logindb');
const pool = poolConnection;  
                                                          
// getting all from database

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  