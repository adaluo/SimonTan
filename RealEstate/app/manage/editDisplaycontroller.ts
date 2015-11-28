/// <reference path="../_all.ts" />
'use strict';

module app.manage {

    export class EditDisplayController extends baseController{

        private logger: ILogger;
        private location: ng.ILocationService;
        private notifyingCache: INotifyingCache;
        private i18next: I18nextStatic;
        public text: string;
        repo: any;
        resources: any;
        tableParams: any;

        static $inject = ['app.core', 'appRepository', 'ngTableParams', '$scope', 'accountService', 'logger', '$location', 'NotifyingCache', '$i18next'];
        constructor(core: any, appRepository: any, ngTableParams:any, scope: ng.IScope, accountService: ng.IServiceProvider, logger: ILogger, location: ng.ILocationService, NotifyingCache: INotifyingCache, $i18next: I18nextStatic) {
            
           

            this.logger = logger;
            this.location = location;
            this.notifyingCache = NotifyingCache;
            this.i18next = $i18next;

           
            this.repo = appRepository;

            var setTableData = () => {
                this.tableParams = new ngTableParams({

                    page: 1, // show first page
                    count: 100, // count per page

                    sorting: {
                        'TypeLookupId': 'asc' // initial sorting
                    }
                }, {
                        total: this.resources.length, // length of data
                        getData: ($defer, params) => {
                            // use build-in angular filter

                            var orderedData = params.sorting() ?
                                core.$filter('orderBy')(this.resources, params.orderBy()) :
                                this.resources;

                            params.total(orderedData.length); // set total for recalc pagination
                            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                        }
                    });

            }
            this.promises = [this.getresources()];
            super(core, "Edit Display", "Edit Display");
        }

        getresources() {
            if (this.resources === undefined) {
                this.resources = this.repo.getResources();

                return this.resources.$promise;
            }
            return null;

        }
    }


}

angular.module('app.manage').controller('EditDisplayController', app.manage.EditDisplayController); 