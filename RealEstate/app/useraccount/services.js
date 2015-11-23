/// <reference path="../_all.ts" />
'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app;
(function (app) {
    var useraccount;
    (function (useraccount) {
        var services;
        (function (services) {
            var BaseService = (function () {
                function BaseService($http, $q, NotifyingCache) {
                    //log.debug("BaseService consturctor called");
                    //this.apiPath = 'token';
                    this.httpService = $http;
                    this.qService = $q;
                    this.notifyingCache = NotifyingCache;
                }
                BaseService.$inject = ['$http', '$q', 'NotifyingCache'];
                return BaseService;
            })();
            services.BaseService = BaseService;
            var AccountService = (function (_super) {
                __extends(AccountService, _super);
                function AccountService($http, $q, NotifyingCache) {
                    _super.call(this, $http, $q, NotifyingCache);
                }
                //token
                AccountService.prototype.$login = function (model) {
                    var self = this;
                    var deferred = self.qService.defer();
                    model.grant_type = 'password';
                    model.client_id = 'app';
                    var config = {
                        url: 'token',
                        dataType: 'json',
                        method: 'POST',
                        data: app.common.querifyObject(model),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    };
                    self.httpService(config).
                        then(function (result) {
                        self.data = result.data;
                        self.data.clientIssuedTime = moment().unix();
                        self.notifyingCache.put(app.EVENTS.loginSuccess, self.data);
                        deferred.resolve(self.data);
                    }, function (error) {
                        self.notifyingCache.put(app.EVENTS.loginFailed, moment().toString());
                        deferred.reject(error);
                    });
                    return deferred.promise;
                };
                //api/account/Register
                AccountService.prototype.$register = function (model) {
                    var self = this;
                    var deferred = self.qService.defer();
                    var config = {
                        url: 'api/account/Register',
                        dataType: 'json',
                        method: 'POST',
                        data: model
                    };
                    self.httpService(config).
                        then(function (result) {
                        self.data = result.data;
                        deferred.resolve(self.data);
                    }, function (error) {
                        deferred.reject(error);
                    });
                    return deferred.promise;
                };
                //api/account/UserInfo
                AccountService.prototype.$userInfo = function () {
                    var self = this;
                    var deferred = self.qService.defer();
                    var config = {
                        url: 'api/account/UserInfo',
                        dataType: 'json',
                        method: 'GET' //we are passing token header with the injector
                    };
                    self.httpService(config).
                        then(function (result) {
                        self.data = result.data;
                        deferred.resolve(self.data);
                    }, function (error) {
                        deferred.reject(error);
                    });
                    return deferred.promise;
                };
                //token (refresh)
                AccountService.prototype.$refresh = function (model) {
                    var self = this;
                    var model;
                    var deferred = self.qService.defer();
                    model.grant_type = 'refresh_token';
                    model.client_id = 'app';
                    var config = {
                        url: 'token',
                        dataType: 'json',
                        method: 'POST',
                        data: app.common.querifyObject(model),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    };
                    self.httpService(config).
                        then(function (result) {
                        self.data = result.data;
                        self.data.clientIssuedTime = moment().unix();
                        self.notifyingCache.put(app.EVENTS.loginRefreshTokenSuccess, self.data);
                        deferred.resolve(self.data);
                    }, function (error) {
                        self.notifyingCache.put(app.EVENTS.loginRefreshTokenFailed, error);
                        deferred.reject(error);
                    });
                    return deferred.promise;
                };
                //logout
                AccountService.prototype.$logout = function () {
                    var self = this;
                    self.notifyingCache.put(app.EVENTS.logoutSuccess, moment().toString());
                };
                AccountService.$inject = ['$http', '$q', 'NotifyingCache'];
                return AccountService;
            })(BaseService);
            services.AccountService = AccountService;
        })(services = useraccount.services || (useraccount.services = {}));
    })(useraccount = app.useraccount || (app.useraccount = {}));
})(app || (app = {}));
angular.module('app.useraccount').service('accountService', app.useraccount.services.AccountService);
//# sourceMappingURL=services.js.map