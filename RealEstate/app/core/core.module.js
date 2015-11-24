/// <reference path="../_all.ts" />
'use strict';
var app;
(function (app) {
    var coreModule = angular.module('app.core', [
        /*
         *  Angular Modules
         */
        //'ngResource', 'ngRoute', 
        'ngSanitize',
        'ngAnimate',
        //'ngplus',
        'ui.router',
        'jm.i18next',
        /*
         * Our reusable cross app code modules
         */
        'blocks.cache',
        'blocks.logger',
        'blocks.interceptor',
        'blocks.exception',
        'blocks.router',
        'ui.bootstrap',
        'dialogs.main'
    ]);
    coreModule.factory('app.core', ['$filter', '$q', '$rootScope', '$timeout', 'dialogs', 'moment', core]);
    function core($filter, $q, $rootScope, $timeout, dialogs, moment) {
        var throttles = {};
        var applicationParameterDataTypes = [
            { value: 'String', text: 'String' },
            { value: 'Boolean', text: 'Bool' },
            { value: 'Int64', text: 'Number' },
            { value: 'Hidden', text: 'Hidden' }
        ];
        var service = {
            // common angular dependencies
            $filter: $filter,
            $q: $q,
            $timeout: $timeout,
            $rootScope: $rootScope,
            // generic
            dialogs: dialogs,
            moment: moment,
            activateController: activateController,
            createSearchThrottle: createSearchThrottle,
            debouncedThrottle: debouncedThrottle,
            isNumber: isNumber,
            uniqueBy: uniqueBy,
            textContains: textContains,
            trueFalseOptions: [
                {
                    value: true,
                    label: 'Yes'
                }, {
                    value: false,
                    label: 'No'
                }
            ],
            applicationParameterDataTypes: applicationParameterDataTypes,
            textToDate: textToDate
        };
        return service;
        function activateController(promises, controllerId) {
            return $q.all(promises).then(function (eventArgs) {
                var data = { controllerId: controllerId };
            });
        }
        function createSearchThrottle(viewmodel, list, filteredList, filter, delay) {
            // After a delay, search a viewmodel's list using 
            // a filter function, and return a filteredList.
            // custom delay or use default
            delay = +delay || 300;
            // if only vm and list parameters were passed, set others by naming convention 
            if (!filteredList) {
                // assuming list is named sessions, filteredList is filteredSessions
                filteredList = 'filtered' + list[0].toUpperCase() + list.substr(1).toLowerCase(); // string
                // filter function is named sessionFilter
                filter = list + 'Filter'; // function in string form
            }
            // create the filtering function we will call from here
            var filterFn = function () {
                // translates to ...
                // vm.filteredSessions 
                //      = vm.sessions.filter(function(item( { returns vm.sessionFilter (item) } );
                viewmodel[filteredList] = viewmodel[list].filter(function (item) {
                    return viewmodel[filter](item);
                });
            };
            return (function () {
                // Wrapped in outer IFFE so we can use closure 
                // over filterInputTimeout which references the timeout
                var filterInputTimeout;
                // return what becomes the 'applyFilter' function in the controller
                return function (searchNow) {
                    if (filterInputTimeout) {
                        $timeout.cancel(filterInputTimeout);
                        filterInputTimeout = null;
                    }
                    if (searchNow || !delay) {
                        filterFn();
                    }
                    else {
                        filterInputTimeout = $timeout(filterFn, delay);
                    }
                };
            })();
        }
        function debouncedThrottle(key, callback, delay, immediate) {
            // Perform some action (callback) after a delay. 
            // Track the callback by key, so if the same callback 
            // is issued again, restart the delay.
            var defaultDelay = 1000;
            delay = delay || defaultDelay;
            if (throttles[key]) {
                $timeout.cancel(throttles[key]);
                throttles[key] = undefined;
            }
            if (immediate) {
                callback();
            }
            else {
                throttles[key] = $timeout(callback, delay);
            }
        }
        function isNumber(val) {
            // negative or positive
            return /^[-]?\d+$/.test(val);
        }
        function textContains(text, searchText) {
            return text && -1 !== text.toLowerCase().indexOf(searchText.toLowerCase());
        }
        function uniqueBy(arr, fn) {
            var unique = {};
            var distinct = [];
            arr.forEach(function (x) {
                var key = fn(x);
                if (!unique[key]) {
                    distinct.push(key);
                    unique[key] = true;
                }
            });
            return distinct;
        }
        function textToDate(dateText) {
            if (dateText instanceof Date) {
                return dateText;
            }
            if (dateText.length > 1) {
                return new Date(moment(dateText));
            }
            return "";
        }
    }
})(app || (app = {}));
//# sourceMappingURL=core.module.js.map