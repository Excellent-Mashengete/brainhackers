const express = require("express");
const client = require("../config/database.config");
const app = express.Router();

module.exports.getAllOrders = async (req, res) => {
     client.query
    (`SELECT * FROM orders ORDER BY order_ID ASC`, (error, results) =>{ //returns all orders  in the database from product list and ascending order

        if(error){ //checks for errors and return them 
            throw error //Throw the error in the terminal
        }
        res.status(200).json(results.rows) //Return a status 200 if there is no error
    })
}