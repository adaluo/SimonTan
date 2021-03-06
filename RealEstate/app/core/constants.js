/// <reference path="../_all.ts" />
'use strict';
var app;
(function (app) {
    angular
        .module('app.core')
        .constant('toastr', toastr)
        .constant('moment', moment);
    var CONST;
    (function (CONST) {
        CONST.sessionStorageKey = 'authorizationData';
        CONST.sessionSlackTime = 10; //kill session 10s before expires - if user want to renew session at 0 sec countdown, give server some slack time   
        CONST.sessionDisplaySessionEndWarningAtSecond = 30; //show warning 50sec before session expires       
    })(CONST = app.CONST || (app.CONST = {}));
    var EVENTS;
    (function (EVENTS) {
        EVENTS.i18LanguageChange = 'i18nextLanguageChange';
        EVENTS.loginSuccess = 'auth-login-success';
        EVENTS.loginFailed = 'auth-login-failed';
        EVENTS.logoutSuccess = 'auth-logout-success';
        //export var sessionTimeout: string = 'auth-session-timeout';
        //export var notAuthenticated: string = 'auth-not-authenticated';
        //export var notAuthorized: string = 'auth-not-authorized';
        EVENTS.cacheUpdated = 'cache-item-updated';
        EVENTS.cacheRemoved = 'cache-item-removed';
        EVENTS.loginRefreshTokenFailed = 'auth-refresh-failed';
        EVENTS.loginRefreshTokenSuccess = 'auth-refresh-success';
        EVENTS.sessionExpired = 'auth-session-expired';
        EVENTS.sessionEnding = 'auth-session-ending';
    })(EVENTS = app.EVENTS || (app.EVENTS = {}));
    ;
})(app || (app = {}));
//# sourceMappingURL=constants.js.map