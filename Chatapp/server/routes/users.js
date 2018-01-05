/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
var mysql = require('mysql');
var config = require('config'); 
var SHA256 = require("crypto-js/sha256");
var crypto = require('crypto');


var connection = mysql.createConnection(config.database.sqldbConfig);

connection.connect();

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};


/* get all users from database */
router.get('/user/all', function (req, res) {
    connection.query('SELECT * FROM user', function (error, results) {
        if (error) {
            throw error;
        } else {
            response.data = results;
            res.json(response);
        }
    });
});

/* check if user exists in database */
router.post('/user', function (req, res) {
    var username = req.body._username;
    var password = crypto.createHash('md5').update(req.body._password).digest('hex');

    connection.query('SELECT username FROM user WHERE user.username = ' + mysql.escape(username) +
        ' AND user.password = ' + mysql.escape(password) + ' LIMIT 1',
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

router.post('/user/new', function (req, res) {
    var username = req.body._username;
    var password = crypto.createHash('md5').update(req.body._password).digest('hex');

    if (!username || username.length == 0 || !password || password.length == 0) {
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
