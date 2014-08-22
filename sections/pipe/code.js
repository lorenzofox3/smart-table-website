app.controller('pipeCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
    var nameList = ['Pierre', 'Pol', 'Jacques', 'Robert', 'Elisa'];
    var familyName = ['Dupont', 'Germain', 'Delcourt', 'bjip', 'Menez'];

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
        $scope.rowCollection = [];
        for (var j = 0; j < 20; j++) {
            $scope.rowCollection.push(createRandomItem());
        }
    }

    $scope.callServer = function getData(tableState) {

        //here you could create a query string from tableState
        //fake ajax call
        $scope.isLoading = true;

        $timeout(function () {
            getAPage();
            $scope.isLoading = false;
        }, 2000);

    };

    getAPage();

}]);
