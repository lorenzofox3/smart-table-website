app.controller('filterCtrl', ['$scope', '$filter', function (scope, filter) {
    scope.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com', strictSearchValue: "abc", strictSelectValue: "ab"},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com', strictSearchValue: "ab", strictSelectValue: "abc"},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com', strictSearchValue: "abc", strictSelectValue: "abc"}
    ];

  scope.displayCollection = [].concat(scope.rowCollection);

    scope.predicates = ['firstName', 'lastName', 'birthDate', 'balance', 'email'];
    scope.selectedPredicate = scope.predicates[0];
}]);

app.filter('myStrictFilter', function($filter){
  return function(input, predicate){
    return $filter('filter')(input, predicate, true);
  }
});

app.filter('unique', function() {

  return function (arr, field) {
    var o = {}, i, l = arr.length, r = [];
    for(i=0; i<l;i+=1) {
      o[arr[i][field]] = arr[i];
    }
    for(i in o) {
      r.push(o[i]);
    }
    return r;
  };
})