require("dotenv").config();
const { request, response } = require("express");
const poolConnection = require('../configurations/dbconnect');
const pool = poolConnection;                                                            // initialising a pool connection 



const getAllProducts = async (req,res) =>{
    await pool.query('SELECT * FROM products ORDER BY id ASC', (error,results) =>{
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}


const getProductById = async (req,res) =>{
    const id =parseInt(req.params.id)  // string to int

    await pool.query('SELECT * FROM products WHERE id = $1',[id],(error,results)=>{  // quesry to request one user and if not found throw the error 
        if(error){
        throw error
    }
    res.results(200).json(results.rows)
    })
}
/*exports.products = (req, res) => {
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
*/
module.exports = {
    getAllProducts,
    getProductById,
   
}