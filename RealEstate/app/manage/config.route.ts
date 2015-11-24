module app.manage {
    'use strict';

    angular.
        module('app.manage').
        config(ManageConfig);

    ManageConfig.$inject = ['$stateProvider'];

    function ManageConfig($stateProvider: ng.ui.IStateProvider) {

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

} 