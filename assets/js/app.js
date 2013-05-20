/**
 * User: laurentrenard
 * Date: 5/14/13
 * Time: 10:55 PM
 **/
var app=angular.module('app',['ui.bootstrap.tabs','SmartTable.Table']);
app.directive('custom', function () {
    return {
        restrict:'E',
        //include smart table controller to use its API if needed
        require: '^smartTable',
        template:'<div></div>',
        replace:true,
        link: function (scope, element, attrs, ctrl) {
            //use the scope
            element.text(scope.formatedValue.toUpperCase());
        }
    }
});