'use strict';

angular.module('mean.cellar').controller('CellarController', ['$scope', 'Global', 'Cellar',
    function($scope, Global, Cellar) {
        $scope.global = Global;
        $scope.package = {
            name: 'cellar'
        };
    }
]);
