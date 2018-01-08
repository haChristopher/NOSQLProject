var amqp = require('amqplib/callback_api');
var url = process.env.AMQP_URL || 'amqp://guest:guest@localhost:5672';


var rabbit = {

  setupUser: function(username, newMessageFunction, socket){
    amqp.connect(url, function(err, conn) {
      conn.createChannel(function(err, ch) {
        var q = username;
        var ex = "basic";

        //create an exchange if not existing already
        ch.assertExchange(ex, 'direct', {durable: false});
        //create q for using if not existing already
        ch.assertQueue(q, {durable: false});

        // user is interested in all public channels
        ch.bindQueue(q, ex, "General");
        ch.bindQueue(q, ex, "Default");
        // and messages directed to himself
        ch.bindQueue(q, ex, q);
        //subscribe to own queue
        ch.consume(q, newMessageFunction, {noAck: true});

        console.log("User " + username + " was completly setup!");
      });
    });
  },

  sendMessage: function(msg){

    amqp.connect(url, function(err, conn) {

      conn.createChannel(function(err, ch) {

        var reply = {username: msg.sender, message: msg.message , channel: msg.channel, creationDate: msg.creationDate};
  			var topic = "hamid";
        var ex = 'basic';

        ch.assertExchange(ex, 'direct', {durable: false});
        ch.publish(ex, topic, new Buffer(JSON.stringify(reply)));
        console.log("Message was send");
      });

      setTimeout(function() {
        conn.close();
      },500);
    });
  }

};

module.exports = rabbit;
