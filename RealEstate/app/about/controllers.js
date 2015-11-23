/// <reference path="../_all.ts" />
'use strict';
var app;
(function (app) {
    var about;
    (function (about) {
        var AboutController = (function () {
            function AboutController(scope, accountService, logger, location, NotifyingCache, $i18next) {
                var self = this;
                self.logger = logger;
                self.location = location;
                self.notifyingCache = NotifyingCache;
                self.i18next = $i18next;
            }
            AboutController.$inject = ['$scope', 'accountService', 'logger', '$location', 'NotifyingCache', '$i18next'];
            return AboutController;
        })();
        about.AboutController = AboutController;
    })(about = app.about || (app.about = {}));
})(app || (app = {}));
angular.module('app.about').controller('aboutController', app.about.AboutController);
//# sourceMappingURL=controllers.js.map