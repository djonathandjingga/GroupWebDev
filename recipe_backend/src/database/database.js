"use strict";

const mysql = require("mysql");

const config = {
  host: `${process.env.DB_HOST}`,
  port: process.env.DB_PORT,
  user: `${process.env.DB_USER}`,
  password: `${process.env.DB_PASS}`,
  database: `${process.env.DB_DATABASE}`,
};

var connection = mysql.createConnection(config);
connection.connect(function(err) {
  if (err) console.log(err);
  console.log("Database Connected: " + config.host + ":" + config.port);
});

module.exports = connection;
