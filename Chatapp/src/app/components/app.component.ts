import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { RestService } from '../services/rest-service.service';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit{

  username: String = "";

  public constructor(private _authenticationService: AuthenticationService, private _restService: RestService) { }

  ngOnInit() {
    this.username = this._authenticationService.getUser().username;
  }

  private isLoggedIn() {
    return this._authenticationService.isLoggedIn();
  }

  private logout() {
    this._authenticationService.logout();
    this._restService.logout().subscribe();
  }
}
