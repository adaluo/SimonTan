/// <reference path="../_all.ts" />
'use strict';

module app.manage {

    export class EditDisplayController extends baseController{

        private logger: ILogger;
        private location: ng.ILocationService;
        private notifyingCache: INotifyingCache;
        private i18next: I18nextStatic;
        public items: any;

        static $inject = ['app.core','$scope', 'accountService', 'logger', '$location', 'NotifyingCache', '$i18next'];
        constructor(core:any, scope: ng.IScope, accountService: ng.IServiceProvider, logger: ILogger, location: ng.ILocationService, NotifyingCache: INotifyingCache, $i18next: I18nextStatic) {
            
            var self = this;

            self.logger = logger;
            self.location = location;
            self.notifyingCache = NotifyingCache;
            self.i18next = $i18next;

            self.items = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }, { id: "6" }];

            super(core, "Edit Display", "Edit Display");
        }
    }


  

}

angular.module('app.manage').controller('EditDisplayController', app.manage.EditDisplayController); 