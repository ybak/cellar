'use strict';

angular.module('mean.cellar').factory('Cellar', ['$resource',
    function($resource) {
        return $resource('/api/wines/:articleId', {
            articleId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);