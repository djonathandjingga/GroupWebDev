const fs = require("fs");
const express = require("express");
var mysqlConn = require("../database/database");
const { resolve } = require("path");
const { reject } = require("assert");

module.exports = class Ingredients {
    constructor() {}
    getIngredients(){
        return new Promise((resolve, reject) => {
            mysqlConn.query("SELECT * FROM fs_recipe.ingredients;", (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }

    getIngredientsByID(id){
        return new Promise((resolve, reject) => {
            mysqlConn.query("SELECT * FROM fs_recipe.ingredients WHERE ingredients_id = ?", id, (err,res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }

    createIngredients(ingredients){
        return new Promise((resolve, reject) => {
            mysqlConn.query("INSERT INTO fs_recipe.ingredients set ?", ingredients, (err,res) => {
                if (err) {
                    reject(err);
                } else {
                    this.getIngredients()
                    .then(user => {
                        resolve(user);
                    })
                    .catch(err => {
                        reject("Inserted but could not find ingredients database!")
                    });
                }
            });
        });
    }

    updateIngredients(ingredients){
        return new Promise((resolve,reject) => {
            mysqlConn.query('UPDATE fs_recipe.ingredients SET ? WHERE ingredients = ?', [ingredients,ingredients.ingredients_id], (err,res) => {
                if (err) {
                    reject(err);
                } else {
                    this.getIngredients()
                    .then(ingredients => {
                        resolve(ingredients);
                    })
                    .catch(err => {
                        reject("Updated but could not find ingredients database!")
                    });
                }
            })
        })
    }

    deleteIngredientsByID(id) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("DELETE FROM fs_recipe.ingredients WHERE ingredients_id = ?", id, (err,res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve("Ingredients deleted!");
                }
            });
        });
    }
}