'use strict';

angular.module('mean.cellar').controller('CellarController', ['$scope',  'Global', 'Cellar',
    function ($scope, Global, Cellar) {
        $scope.global = Global;
        $scope.package = {
            name: 'cellar'
        };

        $scope.pageChanged = function () {
            Cellar.query({page: $scope.wines.page, limit: $scope.wines.limit }, function (wines) {
                $scope.wines = wines;
            });
        };

        $scope.paging = function (page, limit) {
            Cellar.query({page: page, limit: limit }, function (wines) {
                $scope.wines = wines;
            });
        };

    }
]);

angular.module('myModule', ['ui.bootstrap']);