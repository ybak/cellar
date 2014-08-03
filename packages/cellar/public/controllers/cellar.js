'use strict';

angular.module('mean.cellar').controller('CellarController', ['$scope', '$stateParams', 'Global', 'Cellar',
    function ($scope, $stateParams, Global, Cellar) {
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

        $scope.findOne = function () {
            Cellar.get({
                wineId: $stateParams.wineId
            }, function (wine) {
                $scope.wine = wine;
            });
        };

    }
]);

angular.module('myModule', ['ui.bootstrap']);