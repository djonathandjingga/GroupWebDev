const express = require("express");
const router = express.Router();

const User = require('../models/user_models');

router.get("/", (req,res) => {
    User.prototype.getUser()
    .then(users => {
        res.send(users);
    })
    .catch(err => {
        res.send(err);
    })
});

router.get("/:id", (req,res) => {
    User.prototype.getUserByID(req.params.id)
    .then(JSONobj => {
        res.send(JSONobj);
    })
    .catch(err => {
        res.send(err);
    })
});

router.post("/", (req,res) => {
    User.prototype.createUser(req.body)
    .then(JSONobj => {
        res.send(JSONobj);
    })
    .catch(err => {
        res.send(err);
    })
});

router.post("/update", (req,res) => {
    User.prototype.updateUser(req.body)
    .then(JSONobj => {
        res.send(JSONobj);
    })
    .catch(err => {
        res.send(err);
    })
});

router.get("/delete/:id", (req,res) => {
    User.prototype.deleteByID(req.params.id)
    .then(JSONobj => {
        res.send(JSONobj);
    })
    .catch(err => {
        res.send(err);
    })
});

module.exports = router;