/// <reference path="../_all.ts" />
'use strict';
        
module app.listings {

    export class ListingsController {
                                                             
        private logger: ILogger;
        private location: ng.ILocationService;
        private notifyingCache: INotifyingCache;
        private i18next: I18nextStatic;
        public items: any;

        static $inject = ['$scope', 'accountService', 'logger', '$location', 'NotifyingCache', '$i18next'];
        constructor(scope: ng.IScope, accountService: ng.IServiceProvider, logger: ILogger, location: ng.ILocationService, NotifyingCache: INotifyingCache, $i18next: I18nextStatic) {
            var self = this;   

            self.logger = logger;
            self.location = location; 
            self.notifyingCache = NotifyingCache; 
            self.i18next = $i18next;     
            
            self.items = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }, { id: "6" }];                            
        }
    }  
       
    
    export class ListingController {

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
angular.module('app.listings').controller('listingController', app.listings.ListingController);