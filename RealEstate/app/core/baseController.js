/// <reference path="../_all.ts" />
var app;
(function (app) {
    var baseController = (function () {
        function baseController(core, controllerId, title, callBackFunc) {
            if (callBackFunc === void 0) { callBackFunc = null; }
            this.core = core;
            this.controllerId = controllerId;
            this.title = title;
            this.callBackFunc = callBackFunc;
            core.$q.all(this.promises).
                then(function (eventArgs) {
                if (callBackFunc != null) {
                    callBackFunc(eventArgs);
                }
                console.log('Activated ' + title + ' View');
            })
                .catch(function (error) {
                console.log('Error in getting data for ' + title + ': ' + error.data.ExceptionMessage);
                toastr.error('Error in getting data for ' + title);
            });
        }
        baseController.prototype.showEditForm = function (form, promises) {
            this.core.$q.all(promises).
                then(function (eventArgs) {
                form.$show();
            })
                .catch(function (error) {
                toastr.error('Error in getting data for ' + form + ': ' + error.data.message);
            });
        };
        return baseController;
    })();
    app.baseController = baseController;
})(app || (app = {}));
//# sourceMappingURL=baseController.js.map