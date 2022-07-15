const express = require("express");
const client = require("../config/database.config");
const app = express.Router();

module.exports.getAllOrders = async (req, res) => {
    const id = parseInt(req.params.id); 
    try{
        client.query
        (`SELECT user_id,product_id,quantity,address,city,town,zip,order_date,prod_name,image,delivery_price, totalCost 
        FROM orders 
        INNER JOIN users ON orders.user_id=users.id
        INNER JOIN products ON orders.product_id=products.prod_id
        WHERE users.id = $1 ORDER BY order_ID ASC`,[id], (error, results) =>{ //returns all orders  in the database from product list and ascending order

            if(error){ //checks for errors and return them 
                return res.status(400).json({
                    error: "Database error"
                })//Throw t //Throw the error in the terminal
            }
            res.status(200).json(results.rows) //Return a status 200 if there is no error
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
           error: "Database error while retrieving products", 
        });
     };
}

module.exports.addorder = async (req, res) => {
    const id = parseInt(req.params.id); 
    const {prod_id, quantity, address, city, town, zip, delivery_price, totalcost} = req.body
    try{
        client.query
        (`INSERT INTO orders (user_id, product_id, quantity, address, city, town, zip, delivery_price, totalcost)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)`,[id, prod_id, quantity, address, city, town, zip, delivery_price, totalcost], (error, results) =>{ //returns all orders  in the database from product list and ascending order

            if(error){ //checks for errors and return them 
                return res.status(400).json({
                    error: "Database error"
                })//Throw t //Throw the error in the terminal
            }
            res.status(200).json(results.rows) //Return a status 200 if there is no error
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
           error: "Database error while retrieving products", 
        });
     };
}
