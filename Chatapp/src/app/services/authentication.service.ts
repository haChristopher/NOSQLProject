import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable()
export class AuthenticationService {

    private users = [
        new User("admin", "admin"),
        new User("hamid", "hamid"),
        new User("chris", "hamid"),
        new User("thaer", "hamid"),
    ];

    public getUsers(): User[]{
        return this.users;
    }

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

    public getUser(): User {
        let user = JSON.parse(localStorage.getItem("user"));
        return new User(user._username, user._password);
    }

    public isLoggedIn(): boolean {
        return localStorage.getItem("user") != undefined || localStorage.getItem("user") != null;
    }
}