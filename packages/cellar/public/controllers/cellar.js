'use strict';

angular.module('mean.cellar').controller('CellarController', ['$scope', '$location', '$stateParams', 'Global', 'Cellar',
    function ($scope, $location, $stateParams, Global, Cellar) {
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

        $scope.delete = function (wine) {
            //todo unimplement
        };

        $scope.create = function (isValid) {
            if (isValid) {
                var wine = $scope.wine;

                wine.$save(function () {
                    $scope.alerts = [
                        { type: 'success', msg: 'Success! Wine saved successfully' }
                    ];
                });
            } else {
                $scope.submitted = true;
            }
        };

        $scope.update = function (isValid) {
            if (isValid) {
                var wine = $scope.wine;

                wine.$update(function () {
                    $scope.alerts = [
                        { type: 'success', msg: 'Success! Wine saved successfully' }
                    ];
                });
            } else {
                $scope.submitted = true;
            }
        };

    }
]);

angular.module('myModule', ['ui.bootstrap']);