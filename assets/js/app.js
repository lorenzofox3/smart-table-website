/**
 * User: laurentrenard
 * Date: 10/3/13
 * Time: 9:55 PM
 **/
var app = angular.module('app', ['ui.bootstrap','smart-table']);
//app.directive('custom', ['$log', function (log) {
//    return {
//        restrict: 'E',
//        //include smart table controller to use its API if needed
//        require: '^smartTable',
//        template: '<select ng-model="favouriteColor">' +
//            '<option value="">--choose favorite color--</option>' +
//            '<option value="red">red</option>' +
//            '<option value="blue">blue</option>' +
//            '<option value="yellow">yellow</option>' +
//            '</select>',
//        replace: true,
//        link: function (scope, element, attrs, ctrl) {
//
//            var allowedColors = ['red', 'yellow', 'blue'];
//
//            //can use scope.dataRow, scope.column, scope.formatedValue, and ctrl API
//            scope.$watch('favouriteColor', function (value) {
//                if (allowedColors.indexOf(value) != -1) {
//                    scope.dataRow.favouriteColor = scope.favouriteColor;
//                }
//            });
//        }
//    }
//}]);
//app.directive('columnFilter', function () {
//    return {
//        restrict: 'C',
//        require: '^smartTable',
//        link: function (scope, element, attrs, ctrl) {
//            scope.searchValue = '';
//            scope.$watch('searchValue', function (value) {
//                ctrl.search(value, scope.column);
//            })
//        }
//    }
//});
app.controller('mainCtrl', ['$scope', function (scope) {
    scope.greeting = 'hello Laurent';
}]);

//app.directive('scrollTreshold', ['$window', function (window) {
//    return {
//        link: function (scope, element, attr) {
//            var treshold = attr.scrollTreshold || 100;
//            window.addEventListener('scroll', function (event) {
//                if (window.scrollY > treshold) {
//                    element.addClass('scroll-treshold');
//                } else {
//                    element.removeClass('scroll-treshold');
//                }
//            });
//        }
//    }
//}]);
app.controller('basicsCtrl', ['$scope', function (scope) {
    scope.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];
}]);


app.controller('safeCtrl', ['$scope', function ($scope) {

    var firstnames = ['Laurent', 'Blandine', 'Olivier', 'Max'];
    var lastnames = ['Renard', 'Faivre', 'Frere', 'Eponge'];
    var dates = ['1987-05-21', '1987-04-25', '1955-08-27', '1966-06-06'];
    var id = 1;

    function generateRandomItem(id) {

        var firstname = firstnames[Math.floor(Math.random() * 3)];
        var lastname = lastnames[Math.floor(Math.random() * 3)];
        var birthdate = dates[Math.floor(Math.random() * 3)];
        var balance = Math.floor(Math.random() * 2000);

        return {
            id: id,
            firstName: firstname,
            lastName: lastname,
            birthDate: new Date(birthdate),
            balance: balance
        }
    }

    $scope.rowCollection = [];

    for (id; id < 5; id++) {
        $scope.rowCollection.push(generateRandomItem(id));
    }

    //copy the references (you could clone ie angular.copy but then have to go through a dirty checking for the matches)
    $scope.displayedCollection = [].concat($scope.rowCollection);

    //add to the real data holder
    $scope.addRandomItem = function addRandomItem() {
        $scope.rowCollection.push(generateRandomItem(id));
        id++;
    };

    //remove to the real data holder
    $scope.removeItem = function removeItem(row) {
        var index = $scope.rowCollection.indexOf(row);
        if (index !== -1) {
            $scope.rowCollection.splice(index, 1);
        }
    }
}]);

app.controller('formatCtrl', ['$scope', function (scope) {
    scope.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];

    scope.removeRow = function removeRow(row) {
        var index = scope.rowCollection.indexOf(row);
        if (index !== -1) {
            scope.rowCollection.splice(index, 1);
        }
    }
}]);
app.controller('sortCtrl', ['$scope', '$filter', function (scope, filter) {
    scope.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];

    scope.getters={
        firstName: function (value) {
            //this will sort by the length of the first name string
            return value.firstName.length;
        }
    }
}]);

app.controller('filterCtrl', ['$scope', '$filter', function (scope, filter) {
    scope.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];
}]);


app.controller('selectionCtrl', ['$scope', '$filter', function (scope, filter) {
    scope.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];
}]);

app.controller('paginationCtrl', ['$scope', function (scope) {
    var
        nameList = ['Pierre', 'Pol', 'Jacques', 'Robert', 'Elisa'],
        familyName = ['Dupont', 'Germain', 'Delcourt', 'bjip', 'Menez'];

    function createRandomItem() {
        var
            firstName = nameList[Math.floor(Math.random() * 4)],
            lastName = familyName[Math.floor(Math.random() * 4)],
            age = Math.floor(Math.random() * 100),
            email = firstName + lastName + '@whatever.com',
            balance = Math.random() * 3000;

        return{
            firstName: firstName,
            lastName: lastName,
            age: age,
            email: email,
            balance: balance
        };
    }

    scope.rowCollection = [];
    for (var j = 0; j < 200; j++) {
        scope.rowCollection.push(createRandomItem());
    }
}]);

app.controller('pipeCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
    var nameList = ['Pierre', 'Pol', 'Jacques', 'Robert', 'Elisa'];
    var familyName = ['Dupont', 'Germain', 'Delcourt', 'bjip', 'Menez'];
    var promise = null;


    $scope.isLoading = false;
    $scope.rowCollection = [];


    function createRandomItem() {
        var
            firstName = nameList[Math.floor(Math.random() * 4)],
            lastName = familyName[Math.floor(Math.random() * 4)],
            age = Math.floor(Math.random() * 100),
            email = firstName + lastName + '@whatever.com',
            balance = Math.random() * 3000;

        return{
            firstName: firstName,
            lastName: lastName,
            age: age,
            email: email,
            balance: balance
        };
    }

    function getAPage() {
        $scope.rowCollection=[];
        for (var j = 0; j < 20; j++) {
            $scope.rowCollection.push(createRandomItem());
        }
    }

    $scope.callServer = function getData(tableState) {

        function callServer() {
            //here you could create a query string from tableState
            //fake ajax call
            $scope.isLoading = true;

            $timeout(function () {
                getAPage();
                $scope.isLoading = false;
            }, 2000);
        }


        //throttle to avoid an http request on every keystroke in the search fields for examples
        if (promise !== null) {
            $timeout.cancel(promise);
        }
        promise = $timeout(function () {
            callServer();
            promise = null;
        }, 500);
    };

    getAPage();

}]);

app.controller('customCtrl', ['$scope', function (scope) {
    scope.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];
}]);
app.directive('csSelect', function () {
    return {
        require: '^stTable',
        template: '<input type="checkbox"/>',
        scope: {
            row: '=csSelect'
        },
        link: function (scope, element, attr, ctrl) {

            element.bind('change', function (evt) {
                scope.$apply(function () {
                    ctrl.select(scope.row, 'multiple');
                });
            });

            scope.$watch('row.isSelected', function (newValue, oldValue) {
                if (newValue === true) {
                    element.parent().addClass('st-selected');
                } else {
                    element.parent().removeClass('st-selected');
                }
            });
        }
    };
});
