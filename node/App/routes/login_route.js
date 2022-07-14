const express = require("express");
const app = express();

const login = require("../controllers/login.controllers");

// router.post('/logout',login.logout);
app.post('/login',login.login);
module.exports = app;