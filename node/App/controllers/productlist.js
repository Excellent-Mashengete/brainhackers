const express = require("express");
const app = express.Router();

module.exports.produclist = async (req, res) => {
    client.query
    (`SELECT * FROM products ORDER BY survid ASC`, (error, results) =>{ //returns all products list in the database from product list and ascending order

        if(error){ //checks for errors and return them 
            throw error //Throw the error in the terminal
        }
        res.status(200).json(results.rows) //Return a status 200 if there is no error
    })
}