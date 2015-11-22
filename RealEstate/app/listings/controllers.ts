/// <reference path="../_all.ts" />
'use strict';
        
module app.listings {

    export class ListingsController {
                                                             
        private logger: ILogger;
        private location: ng.ILocationService;
        private notifyingCache: INotifyingCache;
        private i18next: I18nextStatic;


        static $inject = ['$scope', 'accountService', 'logger', '$location', 'NotifyingCache', '$i18next'];
        constructor(scope: ng.IScope, accountService: ng.IServiceProvider, logger: ILogger, location: ng.ILocationService, NotifyingCache: INotifyingCache, $i18next: I18nextStatic) {
            var self = this;   

            self.logger = logger;
            self.location = location; 
            self.notifyingCache = NotifyingCache; 
            self.i18next = $i18next;                                 
        }
    }  
                
}
angular.module('app.listings').controller('listingsController', app.listings.ListingsController);