/// <reference path="../_all.ts" />
var app;
(function (app) {
    var listings;
    (function (listings) {
        'use strict';
        angular.
            module('app.listings').
            config(ListingsConfig);
        ListingsConfig.$inject = ['$stateProvider'];
        function ListingsConfig($stateProvider) {
            $stateProvider.
                state("listings", {
                url: '/listings',
                controller: 'app.listings.ListingsController',
                controllerAs: 'listings',
                templateUrl: '/app/listings/Listings.html'
            });
        }
    })(listings = app.listings || (app.listings = {}));
})(app || (app = {}));
//# sourceMappingURL=config.route.js.map