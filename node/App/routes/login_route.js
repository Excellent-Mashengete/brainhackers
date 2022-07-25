const express = require("express");
const app = express();

const login = require("../controllers/login.controllers");


app.post('/login',login.login);

module.exports = app;