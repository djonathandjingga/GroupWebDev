const fs = require("fs");
const express = require("express");
var mysqlConn = require("../database/database");
const { resolve } = require("path");
const { reject } = require("assert");

module.exports = class Recipe {
    constructor() {}
    getRecipe(){
        return new Promise((resolve, reject) => {
            mysqlConn.query("SELECT * FROM fs_recipe.recipe;", (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }

    getRecipeByID(id){
        return new Promise((resolve, reject) => {
            mysqlConn.query("SELECT * FROM fs_recipe.recipe WHERE recipe_id = ?", id, (err,res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }

    createRecipe(recipe){
        return new Promise((resolve, reject) => {
            mysqlConn.query("INSERT INTO fs_recipe.recipe set ?", recipe, (err,res) => {
                if (err) {
                    reject(err);
                } else {
                    this.getRecipe()
                    .then(user => {
                        resolve(user);
                    })
                    .catch(err => {
                        reject("Inserted but could not find recipe database!")
                    });
                }
            });
        });
    }

    updateRecipe(recipe){
        return new Promise((resolve,reject) => {
            mysqlConn.query('UPDATE fs_recipe.recipe SET ? WHERE recipe = ?', [recipe,recipe.recipe_id], (err,res) => {
                if (err) {
                    reject(err);
                } else {
                    this.getRecipe()
                    .then(recipe => {
                        resolve(recipe);
                    })
                    .catch(err => {
                        reject("Updated but could not find recipe database!")
                    });
                }
            })
        })
    }

    deleteRecipeByID(id) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("DELETE FROM fs_recipe.recipe WHERE recipe_id = ?", id, (err,res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve("Recipe deleted!");
                }
            });
        });
    }
}