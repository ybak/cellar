'use strict';

angular.module('mean.cellar').factory('Cellar', ['$resource',
    function ($resource) {
        return $resource('/api/wines/:wineId', {
            wineId: '@_id'
        }, {
            query: {
                method: 'GET',
                isArray : false
            }
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);