/**
 * User: laurentrenard
 * Date: 10/3/13
 * Time: 9:55 PM
 **/
var app = angular.module('app', ['ui.bootstrap.tabs', 'smartTable.table']);
app.directive('custom', ['$log', function (log) {
    return {
        restrict: 'E',
        //include smart table controller to use its API if needed
        require: '^smartTable',
        template: '<select ng-model="favouriteColor">' +
            '<option value="">--choose favorite color--</option>' +
            '<option value="red">red</option>' +
            '<option value="blue">blue</option>' +
            '<option value="yellow">yellow</option>' +
            '</select>',
        replace: true,
        link: function (scope, element, attrs, ctrl) {

            var allowedColors = ['red', 'yellow', 'blue'];

            //can use scope.dataRow, scope.column, scope.formatedValue, and ctrl API
            scope.$watch('favouriteColor', function (value) {
                if (allowedColors.indexOf(value) != -1) {
                    scope.dataRow.favouriteColor = scope.favouriteColor;
                }
            });
        }
    }
}]);
app.directive('columnFilter', function () {
    return {
        restrict: 'C',
        require: '^smartTable',
        link: function (scope, element, attrs, ctrl) {
            scope.searchValue = '';
            scope.$watch('searchValue', function (value) {
                ctrl.search(value, scope.column);
            })
        }
    }
});
app.controller('mainCtrl', ['$scope', function (scope) {
    scope.greeting = 'hello Laurent';
}]);