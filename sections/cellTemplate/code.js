app.controller('cellTemplateCtrl', ['$scope', function (scope) {
    scope.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];

    scope.columnCollection = [
        {label: 'First Name', map: 'firstName'},
        {label: 'Last Name', map: 'lastName', formatFunction: 'uppercase'},
        {label: 'Birth Date', map: 'birthDate', formatFunction: 'date'},
        {label: 'Balance', map: 'balance', formatFunction: 'currency'},
        {label: 'e-mail', map: 'email', cellTemplate: '<a href="mailto:{{formattedValue}}">{{formattedValue}}</a>'},
        {label: 'Favourite color', cellTemplateUrl: 'assets/template/custom.html'}
    ];
}]);
