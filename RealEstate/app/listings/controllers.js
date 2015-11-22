/// <reference path="../_all.ts" />
'use strict';
var app;
(function (app) {
    (function (listings) {
        var ListingsController = (function () {
            function ListingsController(scope, accountService, logger, location, NotifyingCache, $i18next) {
                var self = this;

                self.logger = logger;
                self.location = location;
                self.notifyingCache = NotifyingCache;
                self.i18next = $i18next;
            }
            ListingsController.$inject = ['$scope', 'accountService', 'logger', '$location', 'NotifyingCache', '$i18next'];
            return ListingsController;
        })();
        listings.ListingsController = ListingsController;
    })(app.listings || (app.listings = {}));
    var listings = app.listings;
})(app || (app = {}));
angular.module('app.listings').controller('listingsController', app.listings.ListingsController);
//# sourceMappingURL=controllers.js.map
