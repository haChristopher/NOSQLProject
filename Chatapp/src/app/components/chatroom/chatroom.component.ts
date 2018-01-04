import { Component } from '@angular/core';
import { CreateChannelComponent } from '../modals/create-channel.component';
import * as io from "socket.io-client";
import { Channel } from '../../models/channel';
import { Message } from '../../models/message';
import { User } from '../../models/user';
import { AuthenticationService } from '../../services/authentication.service';
import { RestService } from '../../services/rest-service.service'

@Component({
    moduleId: module.id,
    selector: 'chatroom',
    templateUrl: './chatroom.component.html',
    styleUrls: ['chatroom.component.css']
})
export class ChatroomComponent {
    channels: Channel[];
    activeChannel: Channel;
    message: String = "";
    socket = null;

    constructor(private _authenticationService: AuthenticationService, private _restService: RestService) { }

    ngOnInit() {
        this.socket = io('http://localhost:8000');
        this.socket.on('message', function (data) {
            this.activeChannel.conversation.push(new Message(this.activeChannel.id, this._authenticationService.getUser().username, data.message, "unread"));
        }.bind(this));

        this.channels = new Array();
        this._restService.getChannels().subscribe(data => {
            for (let key in data) {
                let channel = data[key];
                let conversation = [];
                for (let key in channel.conversation) {
                    conversation.push(new Message(channel._id, channel.conversation[key].sender, channel.conversation[key].message, channel.conversation[key].status));
                }
                this.channels.push(new Channel(channel._id, channel.name, conversation, channel.isPublic));
            }
        });
    }

    loadChannel(activeChannel: Channel) {
        this.activeChannel = activeChannel;

        for (let channel of this.channels) {
            document.getElementById(channel.name).style.backgroundColor = "transparent";
        }
        document.getElementById(activeChannel.name).style.backgroundColor = "#373737";
    }

    send() {
        this.socket.emit('message', {
            'sender': this._authenticationService.getUser().username,
            'message': this.message,
            'channel': this.activeChannel.id,
        });

        this._restService.writeMessage(new Message(this.activeChannel.id, this._authenticationService.getUser().username, this.message, "unread")).subscribe(data => console.log(data));

        this.message = "";
    }

    isOwnMessage(message: Message): boolean {
        return this._authenticationService.getUser().username.toLowerCase() == message.sender.toLowerCase();
    }

    // send message on enter
    keypressHandler(event) {
        if (event.keyCode === 13) {
            this.send();
        }
    }

}
