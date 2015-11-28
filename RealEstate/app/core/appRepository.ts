angular.module('app').factory('appRepository', ['$resource', function ($resource) {

    return {

        getResources: function () {
            return $resource('api/Resource').query();
        }

    };
}]);
 