/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
var mysql = require('mysql');
var config = require('config');
//var SHA256 = require("crypto-js/sha256");


var connection = mysql.createConnection(config.database.sqldbConfig);

connection.connect();


/* get all users from database */
router.get('/users', function (req, res) {
    connection.query('SELECT username FROM user', function (error, results) {
        if (error) {
            throw error;
        } else {
            res.json(results);
        }
    });
});

/* check if user exists in database */
router.post('/user', function (req, res) {
    console.log(req.body)
    connection.query('SELECT username FROM user WHERE user.username = ' + mysql.escape(req.body._username) +
        ' AND user.password = ' + mysql.escape(req.body._password) + ' LIMIT 1',
        function (error, getResult) {
            if (error) {
                throw error;
                res.json(error);
            }

            if (getResult.length > 0) {
                res.json({
                    status: true
                });
            } else {
                res.json({
                    status: false
                });
            }
        });
});

router.post('/user', function (req, res) {
    var username = req.body._username;
    var password = req.body._password;

    console.log("ok");
    console.log(username);
    console.log(password);

    if (!username || username.length == 0 || !password || password.length == 0) {
        console.log("hier")
        res.json({
            status: false,
            message: "Unvollständige Angaben"
        });
    } else {
        connection.query('SELECT * FROM user WHERE user.username = ' + mysql.escape(username), function (error, getResult) {
            if (getResult.length > 0) {
                res.json({
                    status: false,
                    message: "Benutzername ist bereits vergeben"
                });
            } else {
                connection.query('INSERT INTO user SET ?', { "username": username, "password": password }, function (error, writeResult) {
                    if (error) {
                        throw error;
                        res.json(error);
                    }
                    if (writeResult.affectedRows > 0) {
                        res.json({
                            status: true
                        });
                    } else {
                        res.json({
                            status: false
                        })
                    }
                });
            }
        });
    }
});



module.exports = router;
