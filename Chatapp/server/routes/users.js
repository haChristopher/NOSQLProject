/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
var mysql = require('mysql');
var config = require('config');
//var SHA256 = require("crypto-js/sha256");


var connection = mysql.createConnection(config.database.sqldbConfig);

connection.connect();


/* GET users listing. */
router.get('/users', function (req, res) {

    connection.query('SELECT username FROM user', function (error, results, fields) {
        if (error) {
            throw error;
        } else {
            res.json(results);
        }
    });
});


module.exports = router;
