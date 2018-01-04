webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var ng2_modal_1 = __webpack_require__("../../../../ng2-modal/index.js");
var app_route_1 = __webpack_require__("../../../../../src/app/app.route.ts");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var app_component_1 = __webpack_require__("../../../../../src/app/components/app.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
var register_component_1 = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
var chatroom_component_1 = __webpack_require__("../../../../../src/app/components/chatroom/chatroom.component.ts");
var authentication_service_1 = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var authentication_guard_service_1 = __webpack_require__("../../../../../src/app/services/authentication-guard.service.ts");
var authentication_guard_service_2 = __webpack_require__("../../../../../src/app/services/authentication-guard.service.ts");
var rest_service_service_1 = __webpack_require__("../../../../../src/app/services/rest-service.service.ts");
var create_channel_component_1 = __webpack_require__("../../../../../src/app/components/modals/create-channel.component.ts");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent,
            chatroom_component_1.ChatroomComponent,
            create_channel_component_1.CreateChannelComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            ng2_modal_1.ModalModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(app_route_1.ROUTE_CONFIG)
        ],
        providers: [authentication_service_1.AuthenticationService, authentication_guard_service_1.AppGuardService, authentication_guard_service_2.ChatroomGuardService, rest_service_service_1.RestService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
var register_component_1 = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
var chatroom_component_1 = __webpack_require__("../../../../../src/app/components/chatroom/chatroom.component.ts");
var authentication_guard_service_1 = __webpack_require__("../../../../../src/app/services/authentication-guard.service.ts");
var authentication_guard_service_2 = __webpack_require__("../../../../../src/app/services/authentication-guard.service.ts");
exports.ROUTE_CONFIG = [
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        canActivate: [authentication_guard_service_1.AppGuardService]
    }, {
        path: 'login',
        component: login_component_1.LoginComponent,
        canActivate: [authentication_guard_service_1.AppGuardService]
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent,
        canActivate: [authentication_guard_service_1.AppGuardService]
    },
    {
        path: 'chatroom',
        component: chatroom_component_1.ChatroomComponent,
        canActivate: [authentication_guard_service_2.ChatroomGuardService]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
//# sourceMappingURL=app.route.js.map

/***/ }),

/***/ "../../../../../src/app/components/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n    <div id=\"header\">\r\n      <a href=\"./home\" class=\"logo\"></a>\r\n\r\n      <div class=\"content\">\r\n        <div class=\"inner\">\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n      </div>\r\n      <nav>\r\n        <ul>\r\n          <li *ngIf=\"!isLoggedIn()\"><a [routerLink]=\"['login']\">Einloggen</a></li>\r\n          <li *ngIf=\"!isLoggedIn()\"><a [routerLink]=\"['register']\">Registrieren</a></li>\r\n          <li *ngIf=\"isLoggedIn()\"><a style=\"cursor:pointer\" [routerLink]=\"['home']\" (click)=\"logout()\">Ausloggen</a></li>\r\n        </ul>\r\n      </nav>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var authentication_service_1 = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var AppComponent = (function () {
    function AppComponent(_authenticationService) {
        this._authenticationService = _authenticationService;
    }
    AppComponent.prototype.isLoggedIn = function () {
        return this._authenticationService.isLoggedIn();
    };
    AppComponent.prototype.logout = function () {
        this._authenticationService.logout();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/components/app.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof authentication_service_1.AuthenticationService !== "undefined" && authentication_service_1.AuthenticationService) === "function" && _a || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/chatroom/chatroom.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#chatroom_channels{\r\n    height: 100%;\r\n    border-right: 1px solid white;\r\n}\r\n\r\n#chatroom_channels label{\r\n    text-align: left;\r\n    margin-bottom: 0;\r\n    cursor: pointer;\r\n}\r\n\r\n.chatroom_channel {\r\n    margin-bottom: 15px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width: 100%;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding: 5px;\r\n}\r\n\r\n.chatroom_channel_image{\r\n    width: 2.5rem;\r\n    height: 2.5rem;\r\n    border: solid 1px #ffffff;\r\n    border-radius: 100%;\r\n    background-size: contain;\r\n    cursor: pointer;\r\n}\r\n\r\n#public_channel, #private_channel{\r\n    height: 50%;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n#chatroom_chat{\r\n    height: 100%;\r\n}\r\n\r\n#conversation{\r\n  overflow-y:scroll;\r\n}\r\n\r\n#chatroom_chat_messages {\r\n    background-color: #c1dde6;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    margin: 5px;\r\n    color: black;\r\n    text-align: left;\r\n    word-wrap: break-word;\r\n}\r\n\r\n#chatroom_chat_input{\r\n    height: 50px;\r\n    border-left: 0;\r\n    border-right: 0;\r\n    border-bottom: 0;\r\n    border-top: 1px solid white;\r\n    border-radius: 0;\r\n    background-color: grey;\r\n    overflow: hidden;\r\n    background-color: #373737;\r\n}\r\n\r\n#chatroom_chat_input:focus{\r\n    outline: none;\r\n    box-shadow: 0 0 0 0;\r\n}\r\n\r\n#messsagefield{\r\n    text-align: left;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chatroom/chatroom.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\" style=\"height:500px;width:1000px;margin:-3rem -2rem\">\n  <div class=\"row\" style=\"height:100%\">\n    <div class=\"col-xs-4\" id=\"chatroom_channels\">\n\n      <div class=\"row\" id=\"public_channel\">\n        <label style=\"margin-bottom: 15px;\">ÖFFENTLICH</label>\n        <div *ngFor=\"let channel of channels\">\n          <div *ngIf=\"channel.isPublic\" [attr.id]=\"channel.name\" (click)=\"loadChannel(channel)\" class=\"chatroom_channel\"><img class=\"pull-left chatroom_channel_image\" /><label class=\"pull-left\">&nbsp;&nbsp;{{channel.name}}</label>&nbsp;</div>\n        </div>\n      </div>\n\n      <div class=\"row\" id=\"private_channel\">\n        <label style=\"margin-bottom: 15px;\">Privat</label>\n        <div *ngFor=\"let channel of channels\">\n          <div *ngIf=\"!channel.isPublic\" [attr.id]=\"channel.name\" (click)=\"loadChannel(channel)\" class=\"chatroom_channel\"><img class=\"pull-left chatroom_channel_image\" /><label class=\"pull-left\">&nbsp;&nbsp;{{channel.name}}</label>&nbsp;</div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"col-xs-8\" id=\"chatroom_chat\">\n      <div id=\"conversation\" class=\"row\" style=\"height:90%\">\n        <label style=\"margin-top:15px\">{{activeChannel?.name}}</label>\n        <div *ngFor=\"let message of activeChannel?.conversation\" [ngClass]=\"{'col-xs-6': true, 'pull-left': !isOwnMessage(message), 'pull-right': isOwnMessage(message)}\" id=\"chatroom_chat_messages\">\n          <span *ngIf=\"!isOwnMessage(message) && message.status == 'read'\" class=\"fa fa-check\"></span>\n          <span id=\"userfield\" style=\"font-weight:bold\">{{message.sender.username}}</span>\n          <span id=\"messsagefield\" >{{message.message}}</span>\n          <span id=\"timeField\"></span>\n        </div>\n      </div>\n\n      <div class=\"row\" style=\"height:10%\">\n        <input placeholder=\"Schreibe eine Nachricht...\" [(ngModel)]=\"message\" (keypress)=\"keypressHandler($event)\" class=\"col-xs-10\"\n          id=\"chatroom_chat_input\" />\n        <button (click)=\"send()\" type=\"submit\" class=\"col-xs-2 btn waves-effect waves-light s2\" style=\"height:100%\" name=\"action\">Senden</button>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/chatroom/chatroom.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var io = __webpack_require__("../../../../socket.io-client/lib/index.js");
var channel_1 = __webpack_require__("../../../../../src/app/models/channel.ts");
var message_1 = __webpack_require__("../../../../../src/app/models/message.ts");
var user_1 = __webpack_require__("../../../../../src/app/models/user.ts");
var authentication_service_1 = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var rest_service_service_1 = __webpack_require__("../../../../../src/app/services/rest-service.service.ts");
var ChatroomComponent = (function () {
    function ChatroomComponent(_authenticationService, _restService) {
        this._authenticationService = _authenticationService;
        this._restService = _restService;
        this.message = "";
        this.socket = null;
    }
    ChatroomComponent.prototype.ngOnInit = function () {
        this.socket = io('http://localhost:8000');
        this.socket.on('message', function (data) {
            console.log(data);
            this.conversation.push(data);
        }.bind(this));
        this.channels = new Array();
        var conversation = [];
        conversation.push(new message_1.Message(new user_1.User("Chrsitopher", "1111"), "Hey alles senkrecht?", "read"));
        conversation.push(new message_1.Message(new user_1.User("Chrsitopher", "1111"), "Wurst?", "read"));
        conversation.push(new message_1.Message(new user_1.User("Chrsitopher", "1111"), "Natürlicher Mergesort!", "read"));
        conversation.push(new message_1.Message(new user_1.User("Hamid", "2222"), "Hallo Hasan Halloooooooooooooooooooooooooooooooooooooooooo", "read"));
        this.channels.push(new channel_1.Channel(1, "General", conversation, true));
        this.channels.push(new channel_1.Channel(2, "Public", conversation, true));
    };
    ChatroomComponent.prototype.loadChannel = function (activeChannel) {
        this.activeChannel = activeChannel;
        for (var _i = 0, _a = this.channels; _i < _a.length; _i++) {
            var channel = _a[_i];
            document.getElementById(channel.name).style.backgroundColor = "transparent";
        }
        document.getElementById(activeChannel.name).style.backgroundColor = "#373737";
    };
    ChatroomComponent.prototype.send = function () {
        this.socket.emit('message', {
            'message': new message_1.Message(new user_1.User("Chrsitopher", "1111"), this.message, "read")
        });
    };
    ChatroomComponent.prototype.isOwnMessage = function (message) {
        return this._authenticationService.getUser().username.toLowerCase() == message.sender.username.toLowerCase();
    };
    // send message on enter
    ChatroomComponent.prototype.keypressHandler = function (event) {
        if (event.keyCode === 13) {
            this.send();
        }
    };
    return ChatroomComponent;
}());
ChatroomComponent = __decorate([
    core_1.Component({
        selector: 'chatroom',
        template: __webpack_require__("../../../../../src/app/components/chatroom/chatroom.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/chatroom/chatroom.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof authentication_service_1.AuthenticationService !== "undefined" && authentication_service_1.AuthenticationService) === "function" && _a || Object, typeof (_b = typeof rest_service_service_1.RestService !== "undefined" && rest_service_service_1.RestService) === "function" && _b || Object])
], ChatroomComponent);
exports.ChatroomComponent = ChatroomComponent;
var _a, _b;
//# sourceMappingURL=chatroom.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Hs Mannheim Chatroom</h1>\n<p>Chatte mit Kommilitonen an der Hochschule Mannheim</p>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width:400px\">\r\n    <p class=\"title\">\r\n        Um die Chatfunktion nutzen zu können musst du eingeloggt sein.\r\n    </p>\r\n    <div>\r\n        <div class=\"row\">\r\n            <div class=\"input-field\">\r\n                <input [(ngModel)]=\"username\" id=\"email\" type=\"text\" validate>\r\n                <label for=\"username\">Benutzername</label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"input-field\">\r\n                <input [(ngModel)]=\"password\" id=\"password\" type=\"password\" class=\"validate\">\r\n                <label for=\"password\">Passwort</label>\r\n            </div>\r\n        </div>\r\n\r\n        <button (click)=\"login()\" type=\"submit\" name=\"action\">Login</button>\r\n        <br><br>\r\n        <p *ngIf=\"error\" style=\"margin-bottom:0; color:#bb2b2b\">Login fehlgeschlagen.</p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var authentication_service_1 = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var user_1 = __webpack_require__("../../../../../src/app/models/user.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var LoginComponent = (function () {
    function LoginComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.username = "";
        this.password = "";
        this.error = false;
    }
    LoginComponent.prototype.login = function () {
        if (!this._service.login(new user_1.User(this.username, this.password))) {
            this.error = !this.error;
        }
        else {
            this._router.navigate(["chatroom"]);
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof authentication_service_1.AuthenticationService !== "undefined" && authentication_service_1.AuthenticationService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/modals/create-channel.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"myModal.open()\"><i class=\"fa fa-plus\"></i></button>\r\n<modal #myModal>\r\n    <modal-header>\r\n        <h1>Modal header</h1>\r\n    </modal-header>\r\n    <modal-content>\r\n        Hello Modal!\r\n    </modal-content>\r\n    <modal-footer>\r\n      <button class=\"btn btn-primary\" (click)=\"myModal.close()\">&times;</button>\r\n    </modal-footer>\r\n</modal>"

/***/ }),

/***/ "../../../../../src/app/components/modals/create-channel.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var CreateChannelComponent = (function () {
    function CreateChannelComponent() {
    }
    return CreateChannelComponent;
}());
CreateChannelComponent = __decorate([
    core_1.Component({
        selector: 'create-channel-modal',
        template: __webpack_require__("../../../../../src/app/components/modals/create-channel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/modals/modal.component.css")]
    })
], CreateChannelComponent);
exports.CreateChannelComponent = CreateChannelComponent;
//# sourceMappingURL=create-channel.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/modals/modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width:400px\">\r\n    <p class=\"title\">\r\n        Registriere dich im HS Mannheim Chatroom.\r\n    </p>\r\n    <div>\r\n        <div class=\"row\">\r\n            <div class=\"input-field\">\r\n                <input [(ngModel)]=\"user.username\" id=\"email\" type=\"text\" validate>\r\n                <label for=\"username\">Benutzername</label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"input-field\">\r\n                <input [(ngModel)]=\"user.password\" id=\"password\" type=\"password\" class=\"validate\">\r\n                <label for=\"password\">Passwort</label>\r\n            </div>\r\n        </div>\r\n\r\n        <button (click)=\"register()\" type=\"submit\" name=\"action\">Registrieren</button>\r\n        <br><br>\r\n        <p *ngIf=\"error\" style=\"margin-bottom:0; color:#bb2b2b\">Login fehlgeschlagen.</p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    })
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/channel.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Channel = (function () {
    function Channel(_id, _name, _conversation, _isPublic) {
        this._id = _id;
        this._name = _name;
        this._conversation = _conversation;
        this._isPublic = _isPublic;
    }
    Object.defineProperty(Channel.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Channel.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Channel.prototype, "conversation", {
        get: function () {
            return this._conversation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Channel.prototype, "isPublic", {
        get: function () {
            return this._isPublic;
        },
        enumerable: true,
        configurable: true
    });
    return Channel;
}());
exports.Channel = Channel;
//# sourceMappingURL=channel.js.map

/***/ }),

/***/ "../../../../../src/app/models/message.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Message = (function () {
    function Message(_sender, _message, _status) {
        this._sender = _sender;
        this._message = _message;
        this._status = _status;
    }
    Object.defineProperty(Message.prototype, "sender", {
        get: function () {
            return this._sender;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Message.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Message.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: true,
        configurable: true
    });
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=message.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(_username, _password) {
        this._username = _username;
        this._password = _password;
        this._imageHref = "C:/Entwicklung/SVN/nosql/chatapp/src/assets/images/usericon.png";
    }
    Object.defineProperty(User.prototype, "username", {
        get: function () {
            return this._username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "imageHref", {
        get: function () {
            return this._imageHref;
        },
        set: function (imageHref) {
            this._imageHref = imageHref;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication-guard.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var authentication_service_1 = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var AppGuardService = (function () {
    function AppGuardService(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
    }
    AppGuardService.prototype.canActivate = function () {
        if (this._authenticationService.isLoggedIn()) {
            this._router.navigate(["chatroom"]);
            return false;
        }
        return true;
    };
    return AppGuardService;
}());
AppGuardService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof authentication_service_1.AuthenticationService !== "undefined" && authentication_service_1.AuthenticationService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], AppGuardService);
exports.AppGuardService = AppGuardService;
var ChatroomGuardService = (function () {
    function ChatroomGuardService(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
    }
    ChatroomGuardService.prototype.canActivate = function () {
        if (!this._authenticationService.isLoggedIn()) {
            this._router.navigate(["home"]);
            return false;
        }
        return true;
    };
    return ChatroomGuardService;
}());
ChatroomGuardService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_c = typeof authentication_service_1.AuthenticationService !== "undefined" && authentication_service_1.AuthenticationService) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object])
], ChatroomGuardService);
exports.ChatroomGuardService = ChatroomGuardService;
var _a, _b, _c, _d;
//# sourceMappingURL=authentication-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var user_1 = __webpack_require__("../../../../../src/app/models/user.ts");
var AuthenticationService = (function () {
    function AuthenticationService(_router) {
        this._router = _router;
        this.users = [
            new user_1.User("admin", "admin"),
            new user_1.User("hamid", "hamid")
        ];
    }
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem("user");
    };
    AuthenticationService.prototype.login = function (user) {
        var authenticatedUser = this.users.find(function (u) { return u.username === user.username; });
        if (authenticatedUser && authenticatedUser.password === user.password) {
            localStorage.setItem("user", JSON.stringify(authenticatedUser));
            return true;
        }
        return false;
    };
    AuthenticationService.prototype.getUser = function () {
        var user = JSON.parse(localStorage.getItem("user"));
        return new user_1.User(user._username, user._password);
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        return localStorage.getItem("user") != undefined || localStorage.getItem("user") != null;
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/rest-service.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var RestService = (function () {
    function RestService(http) {
        this.http = http;
    }
    RestService.prototype.get = function (path) {
        return this.http.get(path)
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    RestService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return RestService;
}());
RestService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], RestService);
exports.RestService = RestService;
var _a;
//# sourceMappingURL=rest-service.service.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map