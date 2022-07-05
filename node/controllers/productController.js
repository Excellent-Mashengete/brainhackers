require("dotenv").config();
const { request, response } = require("express");
const poolConnection = require('../configurations/dbconn');
const pool = poolConnection;                                                            // initialising a pool connection 



const products = async (request, response) => {
    if (request.treatment == 'on') {
      pool.query('SELECT * FROM  products', (error, results) => {
        response.status(200).json(results.rows);
      });
    } else {
      response.status(200).json(inMemoryHorrors);
    }
};
exports.products = (req, res) => {
    Product.findById(req.params.id)
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    success: false,
                    message: "Product not found with id " + req.params.id
                });
            }
            res.send({
                success: true,
                message: 'Product successfully retrieved',
                data: data
            });
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                success: false,
                message: "Product not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            success: false,
            message: "Error retrieving product with id " + req.params.id
        });
    });
};