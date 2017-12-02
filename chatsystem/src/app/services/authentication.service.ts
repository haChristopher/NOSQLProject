import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable()
export class AuthenticationService {

    private users = [
        new User("admin", "admin")
    ];

    public constructor(private _router: Router) { 

    }

    public logout() {
        localStorage.removeItem("user");
    }

    public login(user) {
        let authenticatedUser = this.users.find(u => u.username === user.username);
        if (authenticatedUser && authenticatedUser.password === user.password) {
            localStorage.setItem("user", JSON.stringify(authenticatedUser));
            return true;
        }
        return false;
    }

    public isLoggedIn(): boolean {
        return localStorage.getItem("user") != undefined || localStorage.getItem("user") != null;
    }
}