var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var rabbitConn = require('./rabbitmq');


var chat = {
	start: function(){
		server.listen(8000);
		io.set("origins", "*:*");

		io.on('connection', function (socket) {

			console.log('Socket connected');
      socket.on('disconnect', socketDisconnect);
      //socket.on('message', socketMessage);
			socket.on('message', chat);
      socket.on('login', login);
		});

    function socketDisconnect(e){
      console.log('Socket Disconnected ', e);
    }

    //TODO remove
    function socketMessage(msg){
      // emit sends messages from the server to the connected sockes
      // the broadcast.emit function is a good idea for the channels
      var message =  {username: msg.sender, message: msg.message , channel: msg.channel, creationDate: msg.creationDate};
      io.emit('message', message);
    }

		//on chat message publish to queue
		function chat(msg){
      rabbitConn.sendMessage(msg, false);
		 	console.log("Nachricht wurde gesendet");
		}

    function login(msg){
      //setup rabbitmq
      var user = msg.user;
      rabbitConn.setupUser(user._username, processMessage, this);
    }

		function processMessage(message){
      msgAck = JSON.parse(message.content);
      if(msgAck.status != "read" && !msgAck.isPublic){
        rabbitConn.sendMessage(msgAck, true);
      }
      msg = message.content.toString('utf8');
      console.log("Message was recieved now :D wuhuuuuu");
			io.emit('message', JSON.parse(msg));
		}

	}
};

module.exports = chat;
