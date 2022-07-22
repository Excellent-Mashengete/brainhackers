const client = require("../config/database.config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

// /**
//  * verifies existing customer user against DB credentials
//  * @param {Object} req { body.email, body.password , body.userType}
//  * @param {*} res 
//  */

// module.exports.login = async (req, res) => {
//     const {email,password} = req.body;
//     try{
//         if(!(email && password)){
//             res.status(400).send("user input require");
//          }//else {
//         //     res.status(500).json({
//         //         error: "Database has crashed",
//         //     })
//         // }
//         const logData = await client.query(`SELECT * FROM users WHERE email= $1;`,
//         [email]); //Check if user exist
//         arrData = logData.rows;

//         if (arrData.length == 0) {
//             res.status(400).json({
//                 message: "user doesn't exist"
//             })
//         }else{
//             bcrypt.compare(password, arrData[0].password, (err, results) => {
//                 if (err) {
//                     res.status(500).json({
//                         error: "Server error"
//                     })
//                 } else if (results === true) {
//                     const token = jwt.sign({email: email},
//                         process.env.SECRET_KEY
//                     );
//                     logData.rows.token = token
//                     res.status(200).json({
//                         message: "User successfully signed in",
//                         arrData,
//                         token
//                     });
//                 } else {
//                     //define errors
//                     if (results != true) {
//                         res.status(400).json({
//                             error: "incorrect password"
//                         })
//                     }
//                 }
//             })
//         }
//     }
//     catch (error) {
//         console.log(error)
//         res.status(500).json({
//             error: "Database error while logging in!"
//         })
//     }
// }

/**
 * verifies existing customer user against DB credentials
 * @param {Object} req { body.email, body.password , body.userType}
 * @param {*} res 
 */

module.exports.login = async (req, res) => {
    const {email,password} = req.body;
    try{
        if(!(email && password)){
            res.status(400).send("user input require");
        }
        
        const logData = await client.query(`SELECT * FROM users WHERE email= $1;`,
        [email]); //Check if user exist
        arrData = logData.rows;

        if (arrData.length == 0) {
            res.status(400).json({
                message: "user doesn't exist"
            })
        }else{
            bcrypt.compare(password, arrData[0].password, (err, results) => {
                if (err) {
                    res.status(500).json({
                        error: "Server error"
                    })
                } else if (results === true) {
                    const token = jwt.sign({email: email, id:arrData.id},
                        process.env.SECRET_KEY,
                        { expiresIn: '1h' }
                    );
                    logData.rows.token = token
                    res.status(200).json({
                        message: "User successfully signed in",
                        id: arrData[0].id,
                        expiresIn: 3600,
                        token:token,
                        //_id: arrData.id,
                    });
                } else {
                    //define errors
                    if (results != true) {
                        res.status(400).json({
                            error: "incorrect password"
                        })
                    }
                }
            })
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Database error while logging in!"
        })
    }
}

module.exports.userProfile = async (req, res, next) => {
    const id = parseInt(req.params.id);
    try{  
        await client.query(`SELECT * FROM users WHERE id= $1`, [id], (error, results) => {
                if(error){ //checks for errors and return them 
                    // return res.status(400).json({
                    //     next(error)
                    // })//Throw t //Throw the error in the terminal
                    return next(error)
                }
                res.status(200).json({msg: results}) //Return a status 200 if there is no error
            }
        )
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
           error: "Database error while retrieving products", 
        });
    };
}



//     userSchema.findById(req.params.id, (error, data) => {
//         if (error) {
//             return next(error);
//         } else {
//             res.status(200).json({
//                 msg: data
//             })
//         }
//     })
// })
