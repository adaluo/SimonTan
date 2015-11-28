/// <reference path="../../_all.ts" />
'use strict';
var app;
(function (app) {
    angular
        .module('blocks.interceptor')
        .factory('interceptor', interceptor);
    interceptor.$inject = ['$q', '$injector', '$location'];
    function interceptor($q, $injector, $location) {
        var _request = function (config) {
            config.headers = config.headers || {};
            //use this?: self.notifyingCache.get(app.CONST.sessionStorageKey);
            var authData = sessionStorage.getItem('authorizationData');
            if (authData && config.url !== 'token') {
                config.headers.Authorization = 'Bearer ' + JSON.parse(authData).access_token;
            }
            return config;
        };
        var authInterceptorServiceFactory = {
            request: _request
        };
        return authInterceptorServiceFactory;
    }
})(app || (app = {}));
//# sourceMappingURL=interceptor.js.map