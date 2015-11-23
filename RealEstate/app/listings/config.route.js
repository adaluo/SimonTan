/// <reference path="../_all.ts" />
var app;
(function (app) {
    (function (listings) {
        'use strict';

        angular.module('app.listings').config(ListingsConfig);

        ListingsConfig.$inject = ['$stateProvider'];

        function ListingsConfig($stateProvider) {
            $stateProvider.state("listings", {
                url: '/listings',
                controller: 'app.listings.ListingsController',
                controllerAs: 'listings',
                templateUrl: '/app/listings/Listings.html'
            }).state("listing", {
                url: '/listing/{id:[0-9]*}',
                controller: 'app.listings.ListingController',
                controllerAs: 'listing',
                templateUrl: '/app/listings/Listing.html'
            });
        }
    })(app.listings || (app.listings = {}));
    var listings = app.listings;
})(app || (app = {}));
//# sourceMappingURL=config.route.js.map
