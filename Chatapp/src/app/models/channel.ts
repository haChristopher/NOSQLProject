import {Message} from './message'

export class Channel {

    constructor(private _id: number, private _name: string, private _conversation: Message[], private _isPublic: boolean) {}

    public get id() {
        return this._id;
    }

    public get name() {
        return this._name;
    }

    public get conversation() {
        return this._conversation;
    }

    public get isPublic(){
        return this._isPublic;
    }
}
    