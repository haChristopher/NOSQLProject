import { User } from './user';

export class Message { 

    constructor(private _sender: User, private _message: String, private _status: String) {}

    public get sender(): User {
        return this._sender;
    }

    public get message(): String {
        return this._message;
    }

    public get status() : String {
        return this._status;
    }
}