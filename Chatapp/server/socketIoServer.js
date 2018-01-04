var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);

var chat = {
	start: function(){
		server.listen(8000);
		io.set("origins", "*:*");

		io.on('connection', function (socket) {         // line 12
      socket.on('disconnect', socketDisconnect);
      socket.on('message', socketMessage);
		});

    function socketDisconnect(e){
      console.log('Disconnect ', e);  
    }

    function socketMessage(msg){
      // emit sends messages from the server to the connected sockes
      // the broadcast.emit function is a good idea for the channels
      var message =  {username: msg.sender, message: msg.message , channel: msg.channel, creationDate: msg.creationDate};
      io.emit('message', message);
    }

	}
};

module.exports = chat;
