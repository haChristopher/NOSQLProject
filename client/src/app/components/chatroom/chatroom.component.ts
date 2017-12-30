import { Component } from '@angular/core';
import { CreateChannelComponent } from '../modals/create-channel.component';
import * as io from "socket.io-client";

@Component({
  moduleId: module.id,
  selector: 'chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['chatroom.component.css']
})
export class ChatroomComponent {
  message = '';
  conversation = [];
  socket = null;

  ngOnInit() {
    this.socket = io('http://localhost:3000');
    this.socket.on('chat message', function(data) {
        this.conversation.push(data);
    }.bind(this));
}

send() {
    this.socket.emit('chat message', {
        'userName': 'chris',
        'text': this.message
    });
    this.message = '';
}

keypressHandler(event) {
    if (event.keyCode === 13){
        this.send();
    }
}

}
