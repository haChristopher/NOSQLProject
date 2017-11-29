import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html"
})
export class AppComponent {

  public constructor(private _authenticationService: AuthenticationService) { }

  private isLoggedIn() {
    return this._authenticationService.isLoggedIn();
  }

  private logout() {
    this._authenticationService.logout();
  }
}
