'use strict';

angular.module('mean.cellar').config(['$stateProvider',
    function($stateProvider) {
            $stateProvider.state('browse wines', {
            url: '/cellar/browse',
            templateUrl: 'cellar/views/index.html'
        });
        $stateProvider.state('add wines', {
            url: '/cellar/add',
            templateUrl: 'cellar/views/index.html'
        });
    }
]);
