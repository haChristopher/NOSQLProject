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

      rabbitConn.setupUser("chris", processMessage);

			console.log('Socket connected');
      socket.on('disconnect', socketDisconnect);
      //socket.on('message', socketMessage);
			socket.on('message', chat);
		});

    function socketDisconnect(e){
      console.log('Socket Disconnected ', e);
    }

    function socketMessage(msg){
      // emit sends messages from the server to the connected sockes
      // the broadcast.emit function is a good idea for the channels
      var message =  {username: msg.sender, message: msg.message , channel: msg.channel, creationDate: msg.creationDate};
      io.emit('message', message);
    }

		//on chat message publish to queue
		function chat(msg){
      rabbitConn.sendMessage(msg);
		 	console.log("Nachricht wurde gesendet");
		}

		function processMessage(message){
			msg = message.content.toString('utf8');
			io.emit('message', JSON.parse(msg));
		}

	}
};

module.exports = chat;
