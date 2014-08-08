'use strict';

angular.module('mean.cellar').controller('CellarController', ['$scope', '_', '$state', '$stateParams', '$confirm', '$alert', 'Global', 'Cellar',
    function ($scope, _, $state, $stateParams, $confirm, $alert, Global, Cellar) {
        $scope.global = Global;
        $scope.package = {
            name: 'cellar'
        };

        $scope.years = [];
        _.each(_.range(2000, 2014), function (year) {
            $scope.years.push('' + year);
        });

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

        $scope.delete = function ($event) {
            $event.preventDefault();

            $confirm.show().then(function (res) {
                if (res === 'yes') {
                    if ($scope.wine) {
                        $scope.wine.$remove(function (response) {
                            $state.go('browse wines');
//                            $alert({title: 'hint:', content: 'Wine deleted!', type: 'info', show: true, duration: 3});
                        });
                    }
                }
            });
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
