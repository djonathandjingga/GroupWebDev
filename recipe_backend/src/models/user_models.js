const fs = require("fs");
const express = require("express");
var mysqlConn = require("../database/database");
const { resolve } = require("path");
const { reject } = require("assert");

module.exports = class User {
    constructor() {}
    getUser(){
        return new Promise((resolve, reject) => {
            mysqlConn.query("SELECT * FROM fs_recipe.user;", (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }

    getUserByID(id){
        return new Promise((resolve, reject) => {
            mysqlConn.query("SELECT * FROM fs_recipe.user WHERE user_id = ?", id, (err,res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }

    createUser(user){
        return new Promise((resolve, reject) => {
            mysqlConn.query("INSERT INTO fs_recipe.user set ?", user, (err,res) => {
                if (err) {
                    reject(err);
                } else {
                    this.getUser()
                    .then(user => {
                        resolve(user);
                    })
                    .catch(err => {
                        reject("Inserted but could not find user database!")
                    });
                }
            });
        });
    }

    updateUser(user){
        return new Promise((resolve,reject) => {
            mysqlConn.query('UPDATE fs_recipe.user SET ? WHERE email = ?', [user,user.email], (err,res) => {
                if (err) {
                    reject(err);
                } else {
                    this.getUser()
                    .then(user => {
                        resolve(user);
                    })
                    .catch(err => {
                        reject("Updated but could not find user database!")
                    });
                }
            })
        })
    }

    deleteByID(id) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("DELETE FROM fs_recipe.user WHERE user_id = ?", id, (err,res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve("User deleted!");
                }
            });
        });
    }
}