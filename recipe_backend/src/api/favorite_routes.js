const express = require("express");
const router = express.Router();

const Favorite = require('../models/favorite_models');

router.get("/", (req,res) => {
    Favorite.prototype.getUser()
    .then(favorite => {
        res.send(favorite);
    })
    .catch(err => {
        res.send(err);
    })
});

router.get("/:id", (req,res) => {
    Favorite.prototype.getFavoriteByID(req.params.id)
    .then(JSONobj => {
        res.send(JSONobj);
    })
    .catch(err => {
        res.send(err);
    })
});

router.post("/", (req,res) => {
    Favorite.prototype.createFavorite(req.body)
    .then(JSONobj => {
        res.send(JSONobj);
    })
    .catch(err => {
        res.send(err);
    })
});

router.post("/update", (req,res) => {
    Favorite.prototype.updateFavorite(req.body)
    .then(JSONobj => {
        res.send(JSONobj);
    })
    .catch(err => {
        res.send(err);
    })
});

router.get("/delete/:id", (req,res) => {
    Favorite.prototype.deleteFavoriteByID(req.params.id)
    .then(JSONobj => {
        res.send(JSONobj);
    })
    .catch(err => {
        res.send(err);
    })
});

module.exports = router;