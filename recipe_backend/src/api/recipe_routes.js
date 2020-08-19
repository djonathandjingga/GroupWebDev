const express = require("express");
const router = express.Router();

const Recipe = require("../models/recipe_models");

router.get("/", (req,res) => {
    Recipe.prototype.getRecipe()
    .then(recipe => {
        res.send(recipe);
    })
    .catch(err => {
        res.send(err);
    })
});

router.get("/:id", (req,res) => {
    Recipe.prototype.getRecipeByID(req.params.id)
    .then(JSONobj => {
        res.send(JSONobj);
    })
    .catch(err => {
        res.send(err);
    })
});

router.post("/", (req,res) => {
    Recipe.prototype.createRecipe(req.body)
    .then(JSONobj => {
        res.send(JSONobj);
    })
    .catch(err => {
        res.send(err);
    })
});

router.post("/update", (req,res) => {
    Recipe.prototype.updateRecipe(req.body)
    .then(JSONobj => {
        res.send(JSONobj);
    })
    .catch(err => {
        res.send(err);
    })
});

router.get("/delete/:id", (req,res) => {
    Recipe.prototype.deleteRecipeByID(req.params.id)
    .then(JSONobj => {
        res.send(JSONobj);
    })
    .catch(err => {
        res.send(err);
    })
});

module.exports = router;