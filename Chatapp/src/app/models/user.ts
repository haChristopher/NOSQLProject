export class User {

    private _imageHref: String;

    constructor(private _username: String, private _password: String) {
        this._imageHref = "C:/Entwicklung/SVN/nosql/chatapp/src/assets/images/usericon.png";
    }

    public get username(): String {
        return this._username;
    }

    public get password(): String {
        return this._password;
    }

    public get imageHref() : String {
        return this._imageHref;
    }

    public set imageHref(imageHref: String) {
        this._imageHref = imageHref;
    }
}
