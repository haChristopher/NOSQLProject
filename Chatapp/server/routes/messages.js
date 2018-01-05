/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
var rabbitConn = require('../connections/rabbitmq');


router.post('/chat', (req, res) => {
    rabbitConn(function(conn) {
    res._rabbitConn.createChannel(function(err, ch) {
        if (err) {
          throw new Error(err);
        }

        var q = 'chat';
        var msg = JSON.stringify(req.body);

        ch.assertQueue(q, {durable: false});
        ch.sendToQueue(q, new Buffer(msg));
        res.send({success: true, sent: req.body});
    });
  });
});

module.exports = router;
