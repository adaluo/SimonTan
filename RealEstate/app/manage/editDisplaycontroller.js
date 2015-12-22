/// <reference path="../_all.ts" />
'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var app;
(function (app) {
    var manage;
    (function (manage) {
        var EditDisplayController = (function (_super) {
            __extends(EditDisplayController, _super);
            function EditDisplayController(core, appRepository, ngTableParams, scope, accountService, logger, location, NotifyingCache, $i18next) {
                var _this = this;
                this.logger = logger;
                this.location = location;
                this.notifyingCache = NotifyingCache;
                this.i18next = $i18next;
                this.repo = appRepository;
                var setTableData = function () {
                    _this.tableParams = new ngTableParams({
                        page: 1,
                        count: 100,
                        sorting: {
                            'TypeLookupId': 'asc' // initial sorting
                        }
                    }, {
                        total: _this.resources.length,
                        getData: function ($defer, params) {
                            // use build-in angular filter
                            var orderedData = params.sorting() ?
                                core.$filter('orderBy')(_this.resources, params.orderBy()) :
                                _this.resources;
                            params.total(orderedData.length); // set total for recalc pagination
                            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                        }
                    });
                };
                this.promises = [this.getresources()];
                _super.call(this, core, "Edit Display", "Edit Display");
            }
            EditDisplayController.prototype.getresources = function () {
                if (this.resources === undefined) {
                    this.resources = this.repo.getResources();
                    return this.resources.$promise;
                }
                return null;
            };
            EditDisplayController.$inject = ['app.core', 'appRepository', 'ngTableParams', '$scope', 'accountService', 'logger', '$location', 'NotifyingCache', '$i18next'];
            return EditDisplayController;
        })(app.baseController);
        manage.EditDisplayController = EditDisplayController;
    })(manage = app.manage || (app.manage = {}));
})(app || (app = {}));
angular.module('app.manage').controller('EditDisplayController', app.manage.EditDisplayController);
//# sourceMappingURL=editDisplaycontroller.js.map