/// <reference path="../_all.ts" />


module app.about {
    'use strict';

    angular.
        module('app.about').
        config(AboutConfig);

    AboutConfig.$inject = ['$stateProvider'];

    function AboutConfig($stateProvider: ng.ui.IStateProvider) {

        $stateProvider.
            state("about", {
                url: '/about',
                controller: 'app.about.AboutController',
                controllerAs: 'about',
                templateUrl: '/app/about/About.html'
            });
    }

}