'use strict';

angular.module('mean.cellar').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('browse wines', {
            url: '/cellar/browse',
            templateUrl: 'cellar/views/list.html'
        }).state('edit wine', {
            url: '/cellar/:wineId/edit',
            templateUrl: 'cellar/views/edit.html'
        }).state('add wines', {
            url: '/cellar/add',
            templateUrl: 'cellar/views/create.html'
        });
    }
]);
