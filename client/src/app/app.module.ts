import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ng2-modal';
import { ROUTE_CONFIG } from './app.route';
import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { AuthenticationService } from './services/authentication.service';
import { AppGuardService } from './services/authentication-guard.service';
import { ChatroomGuardService } from './services/authentication-guard.service';
import { CreateChannelComponent } from './components/modals/create-channel.component';
import { User } from './models/user';
import { Channel } from './models/channel';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ChatroomComponent,
    CreateChannelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule,
    RouterModule.forRoot(ROUTE_CONFIG)
  ],
  providers: [AuthenticationService, AppGuardService, ChatroomGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
