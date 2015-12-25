var app;
(function (app) {
    var manage;
    (function (manage) {
        'use strict';
        angular.
            module('app.manage').
            config(ManageConfig);
        ManageConfig.$inject = ['$stateProvider'];
        function ManageConfig($stateProvider) {
            $stateProvider.
                state("editListing", {
                url: '/editListing',
                controller: 'app.manage.EditListingController',
                controllerAs: 'editListing',
                templateUrl: '/app/manage/editListing.html'
            })
                .state("editDisplay", {
                url: '/editDisplay',
                controller: 'app.manage.EditDisplayController',
                controllerAs: 'editDisplay',
                templateUrl: '/app/manage/editDisplay.html'
            });
        }
    })(manage = app.manage || (app.manage = {}));
})(app || (app = {}));
//# sourceMappingURL=config.route.js.map