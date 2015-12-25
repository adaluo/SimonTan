/// <reference path="../_all.ts" />
'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app;
(function (app) {
    var manage;
    (function (manage) {
        var EditDisplayController = (function (_super) {
            __extends(EditDisplayController, _super);
            function EditDisplayController(core, scope, accountService, logger, location, NotifyingCache, $i18next) {
                var self = this;
                self.logger = logger;
                self.location = location;
                self.notifyingCache = NotifyingCache;
                self.i18next = $i18next;
                self.items = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }, { id: "6" }];
                _super.call(this, core, "Edit Display", "Edit Display");
            }
            EditDisplayController.$inject = ['core', '$scope', 'accountService', 'logger', '$location', 'NotifyingCache', '$i18next'];
            return EditDisplayController;
        })(app.baseController);
        manage.EditDisplayController = EditDisplayController;
    })(manage = app.manage || (app.manage = {}));
})(app || (app = {}));
angular.module('app.manage').controller('EditDisplayController', app.manage.EditDisplayController);
//# sourceMappingURL=controllers.js.map