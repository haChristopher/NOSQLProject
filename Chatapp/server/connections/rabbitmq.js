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

        socket.on('disconnect',function(){
          console.log("Rabbitmq connection was closed");
          conn.close();
        });

        console.log("User " + username + " was completly setup!");
      });
    });
  },

  sendMessage: function(msg, isConsumed){

    amqp.connect(url, function(err, conn) {

      conn.createChannel(function(err, ch) {

        var reply = {sender: msg.sender, message: msg.message , channel: msg.channel, creationDate: msg.creationDate, isPublic: msg.isPublic};
        var topic = null;

        if(isConsumed){
          reply.status = "read";
          topic = msg.sender;
          console.log(reply);
          console.log("TO" + topic);
        }else{
          reply.status = "unread";
          topic = msg.recipient;
        }
        var ex = 'basic';

        ch.assertExchange(ex, 'direct', {durable: false});
        ch.publish(ex, topic, new Buffer(JSON.stringify(reply)));

        /*
        //send to yourself
        if(!msg.isPublic){
          ch.publish(ex, msg.sender, new Buffer(JSON.stringify(reply)));
        }
        */
        console.log("Message was send");
      });

      setTimeout(function() {
        conn.close();
      },500);
    });
  }

};

module.exports = rabbit;
