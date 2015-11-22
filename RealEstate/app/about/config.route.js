/// <reference path="../_all.ts" />
var app;
(function (app) {
    (function (about) {
        'use strict';

        angular.module('app.about').config(AboutConfig);

        AboutConfig.$inject = ['$stateProvider'];

        function AboutConfig($stateProvider) {
            $stateProvider.state("about", {
                url: '/about',
                controller: 'app.about.AboutController',
                controllerAs: 'about',
                templateUrl: '/app/about/About.html'
            });
        }
    })(app.about || (app.about = {}));
    var about = app.about;
})(app || (app = {}));
//# sourceMappingURL=config.route.js.map
