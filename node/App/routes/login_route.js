const express = require("express");
const app = express();

const login = require("../controllers/login.controllers");
const usercontroller = require('../middlewares/usercontroller')

app.post('/login',login.login);
app.get('/profile/:id', login.userProfile);
module.exports = app;