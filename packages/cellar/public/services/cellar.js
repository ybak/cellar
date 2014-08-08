'use strict';

angular.module('mean.cellar').factory('Cellar', ['$resource',
    function ($resource) {
        return $resource('/api/wines/:wineId', {
            wineId: '@_id'
        }, {
            query: {
                method: 'GET',
                isArray: false
            },
            update: {
                method: 'PUT'
            }
        });
    }
]).config(function ($modalProvider) {
    angular.extend($modalProvider.defaults, {
        html: true
    });
}).service('$confirm', function ($modal, $rootScope, $q) {
    var scope = $rootScope.$new();
    var deferred;
    scope.title = 'confirm';
    scope.content = 'Confirm deletion?';
    scope.answer = function (res) {
        deferred.resolve(res);
        confirm.hide();
    };

    var confirm = $modal({template: 'cellar/views/confirm.tpl.html', scope: scope, show: false});
    var parentShow = confirm.show;
    confirm.show = function () {
        deferred = $q.defer();
        parentShow();
        return deferred.promise;
    };

    return confirm;
});