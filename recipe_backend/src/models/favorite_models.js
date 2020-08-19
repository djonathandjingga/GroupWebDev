const fs = require("fs");
const express = require("express");
var mysqlConn = require("../database/database");
const { resolve } = require("path");
const { reject } = require("assert");

module.exports = class Favorite {
    constructor() {}
    getFavorite(){
        return new Promise((resolve, reject) => {
            mysqlConn.query("SELECT * FROM fs_recipe.favorite;", (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }

    getFavoriteByID(id){
        return new Promise((resolve, reject) => {
            mysqlConn.query("SELECT * FROM fs_recipe.favorite WHERE favorite_id = ?", id, (err,res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }

    createFavorite(favorite){
        return new Promise((resolve, reject) => {
            mysqlConn.query("INSERT INTO fs_recipe.favorite set ?", favorite, (err,res) => {
                if (err) {
                    reject(err);
                } else {
                    this.getFavorite()
                    .then(user => {
                        resolve(user);
                    })
                    .catch(err => {
                        reject("Inserted but could not find favorite database!")
                    });
                }
            });
        });
    }

    updateFavorite(favorite){
        return new Promise((resolve,reject) => {
            mysqlConn.query('UPDATE fs_recipe.favorite SET ? WHERE recipe = ?', [favorite,favorite.recipe_id], (err,res) => {
                if (err) {
                    reject(err);
                } else {
                    this.getFavorite()
                    .then(favorite => {
                        resolve(favorite);
                    })
                    .catch(err => {
                        reject("Updated but could not find favorite database!")
                    });
                }
            })
        })
    }

    deleteFavoriteByID(id) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("DELETE FROM fs_recipe.favorite WHERE favorite_id = ?", id, (err,res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve("Recipe deleted from favorite!");
                }
            });
        });
    }
}