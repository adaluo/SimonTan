/// <reference path="../_all.ts" />
var app;
(function (app) {
    var test;
    (function (test) {
        'use strict';
        angular.
            module('app.test').
            config(UserAccountConfig);
        UserAccountConfig.$inject = ['$stateProvider'];
        function UserAccountConfig($stateProvider) {
            $stateProvider.
                state("test", {
                url: "/test",
                templateUrl: '/app/test/test.html',
                controller: function ($scope) {
                    $scope.title = 'Test';
                }
            });
        }
    })(test = app.test || (app.test = {}));
})(app || (app = {}));
//# sourceMappingURL=config.route.js.map