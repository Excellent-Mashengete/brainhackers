const express = require("express");
const app = express();

const login = require("../controllers/login.controllers");
const authorize = require('../middlewares/usercontroller')

app.post('/login',login.login);
app.get('/profile/:id', authorize, login.userProfile);
module.exports = app;