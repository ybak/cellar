'use strict';

angular.module('mean.cellar').directive('jqueryUiModal', function () {
    return function (scope, elem, attrs) {
        elem.click(function (e) {
            e.preventDefault();
            angular.element(document.querySelector('#dialog-confirm')).dialog('open');
            return false;
        });
        var dialog = angular.element(document.querySelector('#dialog-confirm')).dialog({
            autoOpen: false,
            width: 600,
            buttons: {
                'Ok': function () {
                    scope.delete();
                    dialog.dialog('close');
                },
                'Cancel': function () {
                    dialog.dialog('close');
                }
            }
        });
    };
});