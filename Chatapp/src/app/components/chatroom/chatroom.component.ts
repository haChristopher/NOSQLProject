import { Component } from '@angular/core';
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
    selectedUser: User;
    users: User[] = new Array<User>();
    newUsers: User[] = new Array<User>();
    channels: Channel[];
    activeChannel: Channel;
    message: String = "";
    newUserBoxOpened: Boolean = false;
    socket = null;

    constructor(private _authenticationService: AuthenticationService, private _restService: RestService) { }

    ngOnInit() {
        this.socket = io('http://localhost:8000');
        this.socket.on('message', function (message) {
            this.activeChannel.conversation.push(new Message(message.channel, message.username, message.message, message.status, message.creationDate));
        }.bind(this));

        this.getChannels();
    }

    getChannels() {
        this.channels = new Array();
        this._restService.getChannels(this._authenticationService.getUser().username).subscribe(data => {
            for (let key in data) {
                let channel = data[key];
                let conversation = [];
                for (let key in channel.conversation) {
                    conversation.push(new Message(channel._id, channel.conversation[key].sender, channel.conversation[key].message, channel.conversation[key].status, channel.conversation[key].creationDate));
                }

                if (!channel.isPublic && !channel.name) {
                    for (let participant of channel.participants) {
                        if (participant != this._authenticationService.getUser().username) {
                            channel.name = participant;
                        }
                    }
                }

                this.channels.push(new Channel(channel._id, channel.name, channel.participants, conversation, channel.isPublic));
                this.filterUsers();
            }
        });
    }

    getUsers() {
        this._restService.getUsers().subscribe(
            data => {
                this.users = data;
                this.newUsers = data.slice(0);
                this.filterUsers();
            }
        );
    }

    filterUsers() {
        for (let i = 0; i < this.newUsers.length; i++) {
            for (let channel of this.channels) {
                if (channel.name == this.newUsers[i].username || this._authenticationService.getUser().username == this.newUsers[i].username) {
                    this.newUsers.splice(i, 1);
                }
            }
        }

        this.selectedUser = this.newUsers[0];
    }

    loadChannel(activeChannel: Channel) {
        this.activeChannel = activeChannel;

        for (let channel of this.channels) {
            document.getElementById(channel.name).style.backgroundColor = "transparent";
        }
        document.getElementById(activeChannel.name).style.backgroundColor = "#373737";
    }

    createChannel() {
        let participants = [];
        participants.push(this.selectedUser.username);
        participants.push(this._authenticationService.getUser().username);
        let channel = new Channel("", "", participants, [], false);

        this._restService.createChannel(channel).subscribe(
            data => { 
                this.getChannels() ;
                this.getUsers();
            });
    }

    send() {
        let message = new Message(this.activeChannel.id, this._authenticationService.getUser().username, this.message, "unread", new Date());

        this.socket.emit('message', {
            'sender': message.sender,
            'message': message.message,
            'channel': message.channel,
            'status': message.status,
            'creationDate': message.creationDate
        });

        this._restService.writeMessage(message).subscribe(data => console.log(data));

        this.message = "";
    }

    openNewUserBox() {
        this.getUsers();
        this.newUserBoxOpened = true;
    }

    closeNewUserBox() {
        this.newUserBoxOpened = false;
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
