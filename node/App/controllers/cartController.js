//Initializing a pool connection
const { request, response } = require("express");
const poolConnection = require('../configurations/dbconn');
const pool = poolConnection; 

// Get all users and order by id
const createUser = (request, response) => {
    const { name, email } = request.body
  
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
  }

 