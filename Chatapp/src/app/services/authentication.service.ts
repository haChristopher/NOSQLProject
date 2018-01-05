import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { RestService } from '../services/rest-service.service'


@Injectable()
export class AuthenticationService {

    public constructor(private _router: Router, private _restService: RestService) { }

    public logout() {
        localStorage.removeItem("user");
    }

    public login(user: User) {
        let authenticatedUser;

        this._restService.checkIfUserExists(user).subscribe(
            data => {
                console.log(data)
                if (data.status) {
                    authenticatedUser = user;

                    localStorage.setItem("user", JSON.stringify(authenticatedUser));
                    this._router.navigate(["/chatroom"]);
                    return true;
                } else {
                    return false;
                }
            }
        );
    }

    public getUser(): User {
        let user = JSON.parse(localStorage.getItem("user"));
        return new User(user._username, user._password);
    }

    public isLoggedIn(): boolean {
        return localStorage.getItem("user") != undefined || localStorage.getItem("user") != null;
    }
}