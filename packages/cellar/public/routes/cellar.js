'use strict';

angular.module('mean.cellar').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('cellar example page', {
            url: '/cellar/example',
            templateUrl: 'cellar/views/index.html'
        });
    }
]);
