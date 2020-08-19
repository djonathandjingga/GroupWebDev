const express = require("express");
const router = express.Router();

const User = require('../models/user_models');

router.post("/register", (req,res) => {
    User.prototype.createUser(req.body)
    .then(newUser => {
        res.send(newUser);
    })
    .catch(err => {
        res.send(err);
    })
});