/// <reference path="../_all.ts" />
'use strict';
var app;
(function (app) {
    var listings;
    (function (listings) {
        var ListingsController = (function () {
            function ListingsController(scope, accountService, logger, location, NotifyingCache, $i18next) {
                var self = this;
                self.logger = logger;
                self.location = location;
                self.notifyingCache = NotifyingCache;
                self.i18next = $i18next;
                self.items = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }, { id: "6" }];
            }
            ListingsController.$inject = ['$scope', 'accountService', 'logger', '$location', 'NotifyingCache', '$i18next'];
            return ListingsController;
        })();
        listings.ListingsController = ListingsController;
        var ListingController = (function () {
            function ListingController(scope, accountService, logger, location, NotifyingCache, $i18next) {
                var self = this;
                self.logger = logger;
                self.location = location;
                self.notifyingCache = NotifyingCache;
                self.i18next = $i18next;
            }
            ListingController.$inject = ['$scope', 'accountService', 'logger', '$location', 'NotifyingCache', '$i18next'];
            return ListingController;
        })();
        listings.ListingController = ListingController;
    })(listings = app.listings || (app.listings = {}));
})(app || (app = {}));
angular.module('app.listings').controller('listingsController', app.listings.ListingsController);
angular.module('app.listings').controller('listingController', app.listings.ListingController);
//# sourceMappingURL=controllers.js.map