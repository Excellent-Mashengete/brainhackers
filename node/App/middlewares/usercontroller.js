const jwt_decode = require("jwt-decode");

module.exports = (req, res) => {
   var token =  req.headers("token")
    try {
        var decode = jwt_decode(token);
        res.status(401).json({ decode });

    } catch (error) {
        res.status(401).json({ message: "No token provided" });
    }
};
