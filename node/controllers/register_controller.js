require("dotenv").config(); //
const { request, response } = require("express");
const poolConnection = require('../configurations/dbregisterconn');
const pool = poolConnection;


//creating the users

const createUser = (request, response) => {
  const { name, email,password } = request.body

  pool.query('INSERT INTO users (name, email,password,) VALUES ($1, $2,$3,) RETURNING *', [name, email,password], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.rows[0].id}`)
  })
}

module.exports ={
  createUser,
}

