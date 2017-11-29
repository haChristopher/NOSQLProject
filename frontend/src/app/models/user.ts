export class User {

    private _imageHref: string;

    constructor(private _username: string, private _password: string) {
        this._imageHref = "C:/Entwicklung/SVN/nosql/chatapp/src/assets/images/usericon.png";
    }

    public get username(): string {
        return this._username;
    }

    public get password(): string {
        return this._password;
    }

    public get imageHref() : string {
        return this._imageHref;
    }

    public set imageHref(imageHref: string) {
        this._imageHref = imageHref;
    }
}
