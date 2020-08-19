const express = require("express");
const router = express.Router();

const Ingredients = require("../models/ingredients_models");

router.get("/", (req,res) => {
    Ingredients.prototype.getUser()
    .then(ingredients => {
        res.send(ingredients);
    })
    .catch(err => {
        res.send(err);
    })
});

router.get("/:id", (req,res) => {
    Ingredients.prototype.getFavoriteByID(req.params.id)
    .then(JSONobj => {
        res.send(JSONobj);
    })
    .catch(err => {
        res.send(err);
    })
});

router.post("/", (req,res) => {
    Ingredients.prototype.createFavorite(req.body)
    .then(JSONobj => {
        res.send(JSONobj);
    })
    .catch(err => {
        res.send(err);
    })
});

router.post("/update", (req,res) => {
    Ingredients.prototype.updateFavorite(req.body)
    .then(JSONobj => {
        res.send(JSONobj);
    })
    .catch(err => {
        res.send(err);
    })
});

router.get("/delete/:id", (req,res) => {
    Ingredients.prototype.deleteFavoriteByID(req.params.id)
    .then(JSONobj => {
        res.send(JSONobj);
    })
    .catch(err => {
        res.send(err);
    })
});

module.exports = router;