var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', websocketConnect);

function websocketConnect(socket){

  console.log('New connection');

  socket.on('disconnect', socketDisconnect);
  socket.on('message', socketMessage);

  function socketDisconnect(e){
    console.log('Disconnect ', e);
  }

  function socketMessage(msg){
    // emit sends messages from the server to the connected sockes
    // the broadcast.emit function is a good idea for the channels
    var message =  {userName: msg.userName, text: msg.text ,time: new Date()};
    io.emit('message', message);
  }
}

// TODO do i need this ?
http.listen(3000, function(){
  console.log('listening on *:3000');
});
