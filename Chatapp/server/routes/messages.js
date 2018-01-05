/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
var rabbitConn = require('../connections/rabbitmq');


router.post('/chat', function(req, res) {
    rabbitConn(function(conn) {
      conn.createChannel(function(err, ch) {
        if (err) {
          throw new Error(err);
        }
        var ex = 'chat_ex';
        var msg = JSON.stringify(req.body);

        ch.assertExchange(ex, 'fanout', {durable: false});
        ch.publish(ex, '', new Buffer(msg), {persistent: false});
        ch.close(function() {
          conn.close();
        });
      });
    });
  });

module.exports = router;
