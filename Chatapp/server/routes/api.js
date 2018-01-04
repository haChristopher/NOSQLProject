/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/chat', (err, client) => {
        if (err) return console.log(err);

        let db = client.db('chat');
        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get Channels
router.get('/channels', (req, res) => {
    connection((db) => {
        db.collection('channels')
            .find()
            .toArray()
            .then((channels) => {
                response.data = channels;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

// Post Message
router.post('/message', (req, res) => {
    console.log(req.body)
    connection((db) => {
        db.collection('channels')
            .update({ "_id": ObjectID(req.body._channel) },
            {
                "$push":
                {
                    "conversation":
                    {
                        "sender": req.body._sender,
                        "message": req.body._message,
                        "status": "unread"
                    }
                }
            }
            )
            .then((channels) => {
                response.data = channels;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

module.exports = router;
