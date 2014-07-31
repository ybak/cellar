'use strict';

angular.module('mean.cellar').controller('CellarController', ['$scope', 'Global', 'Cellar',
    function($scope, Global, Wines) {
        $scope.global = Global;
        $scope.package = {
            name: 'cellar'
        };

        $scope.find = function() {
            Wines.query(function(wines) {
                $scope.wines = wines;
            });
        };


    }
]);
