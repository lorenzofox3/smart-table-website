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
        var newData=[];
        for (var j = 0; j < 20; j++) {
            newData.push(createRandomItem());
        }

        $scope.rowCollection = newData;
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

    $scope.displayedCollection = angular.copy($scope.rowCollection);
}]);
