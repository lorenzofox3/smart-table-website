/**
 * User: laurentrenard
 * Date: 5/14/13
 * Time: 10:55 PM
 **/
app.controller('mainCtrl', ['$scope', function (scope) {
    scope.greeting = 'hello Laurent';
}]);
app.controller('basicsCtrl', ['$scope', function (scope) {
    scope.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];

    scope.columnCollection = [
        {label: 'First Name', map: 'firstName'},
        {label: 'same same but different', map: 'firstName'},
        {label: 'Last Name', map: 'lastName'}
    ];
}]);
app.controller('formatCtrl', ['$scope', function (scope) {
    scope.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];

    scope.columnCollection = [
        {label: 'First Name', map: 'firstName', formatFunction: function (value, formatParameter) {
            //this only display the first letter
            return value[0];
        }},
        {label: 'Last Name', map: 'lastName', formatFunction: 'uppercase'},
        {label: 'Birth Date', map: 'birthDate', formatFunction: 'date'},
        {label: 'Balance', map: 'balance', formatFunction: 'currency', formatParameter: '$'}
    ];
}]);
app.controller('sortCtrl', ['$scope', '$filter', function (scope, filter) {
    scope.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];

    scope.columnCollection = [
        {label: 'First Name', map: 'firstName', sortPredicate: function (dataRow) {
            //predicate as a function (see angular orderby documentation) : it will sort by the string length
            return dataRow.firstName.length;
        } },
        {label: 'Last Name', map: 'lastName', formatFunction: 'uppercase'},
        {label: 'Birth Date', map: 'birthDate', formatFunction: 'date'},
        {label: 'Balance', map: 'balance', formatFunction: 'currency', formatParameter: '$'},
        {label: 'e-mail', map: 'email', isSortable: false}
    ];
}]);
app.controller('filterCtrl', ['$scope', function (scope) {
    scope.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];

    scope.columnCollection = [
        {label: 'First Name', map: 'firstName'},
        {label: 'Last Name', map: 'lastName', formatFunction: 'uppercase', headerTemplateUrl: 'assets/template/customHeader.html'},
        {label: 'Birth Date', map: 'birthDate', formatFunction: 'date'},
        {label: 'Balance', map: 'balance', formatFunction: 'currency', formatParameter: '$'},
        {label: 'e-mail', map: 'email'}
    ];
    scope.globalConfig = {
        isGlobalSearchActivated: true
    };
}]);
app.controller('selectionCtrl', ['$scope', function (scope) {
    scope.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];

    scope.columnCollection = [
        {label: 'First Name', map: 'firstName'},
        {label: 'Last Name', map: 'lastName', formatFunction: 'uppercase'},
        {label: 'Birth Date', map: 'birthDate', formatFunction: 'date'},
        {label: 'Balance', map: 'balance', formatFunction: 'currency', formatParameter: '$'},
        {label: 'e-mail', map: 'email'}
    ];
    scope.globalConfig = {
        selectionMode: 'multiple',
        displaySelectionCheckbox: true
    };

    scope.canDisplayCheckbox = function () {
        return scope.globalConfig.selectionMode === 'multiple';
    };
}]);
app.controller('editCtrl', ['$scope', function (scope) {
    scope.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];

    scope.columnCollection = [
        {label: 'First Name', map: 'firstName', isEditable: true},
        {label: 'Last Name', map: 'lastName', formatFunction: 'uppercase'},
        {label: 'Birth Date', map: 'birthDate', formatFunction: 'date', isEditable: true, type: 'date'},
        {label: 'Balance', map: 'balance', formatFunction: 'currency', formatParameter: '$', isEditable: true, type: 'number'},
        {label: 'e-mail', map: 'email', isEditable: true, type: 'email'}
    ];
}]);
app.controller('styleCtrl', ['$scope', function (scope) {
    scope.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];

    scope.columnCollection = [
        {label: 'First Name', map: 'firstName', headerClass: "firstName-header"},
        {label: 'Last Name', map: 'lastName', formatFunction: 'uppercase', cellClass: "lastName-cell"},
        {label: 'Birth Date', map: 'birthDate', formatFunction: 'date'},
        {label: 'Balance', map: 'balance', formatFunction: 'currency'},
        {label: 'e-mail', map: 'email'}
    ];
}]);
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
        {label: 'e-mail', map: 'email'},
        {label: 'Favourite color', cellTemplateUrl: 'assets/template/custom.html'}
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

    scope.columnCollection = [
        {label: 'First Name', map: 'firstName'},
        {label: 'Last Name', map: 'lastName'},
        {label: 'Age', map: 'age'},
        {label: 'Balance', map: 'balance', formatFunction: 'currency', formatParameter: '$'},
        {label: 'e-mail', map: 'email'}
    ];

    scope.globalConfig = {
        isPaginationEnabled: true,
        itemsByPage: 12,
        maxSize: 8
    };
}]);

app.controller('configCtrl', ['$scope', function (scope) {

    scope.rowCollectionColumn = [
        {name: 'isSortable', description: 'tell whether we can sort by the given column', defaultValue: 'true'},
        {name: 'isEditable', description: 'tell whether we can Edit the cell in the given column', defaultValue: 'false'},
        {name: 'type', description: 'the type of the input if the column cells are editable', defaultValue: 'text'},
        {name: 'headerTemplateUrl', description: 'the url to a custom template for the column header', defaultValue: 'partials/defaultHeader.html'},
        {name: 'map', description: 'the property of the data model objects the column cell will be bound to', defaultValue: 'undefined'},
        {name: 'label', description: 'the label of the header column', defaultValue: 'undefined'},
        {name: 'sortPredicate', description: 'the predicate to use when we sort by the column', defaultValue: 'undefined'},
        {name: 'formatFunction', description: 'the function or the filter name to use when formatting the column cells', defaultValue: 'undefined'},
        {name: 'formatParameter', description: 'a parameter to pass to the formatFunction', defaultValue: 'undefined'},
        {name: 'cellTemplateUrl', description: 'the url of the template if custom template is used for the column cells', defaultValue: 'undefined'},
        {name: 'headerClass', description: 'a class name to add to the column header', defaultValue: 'undefined'},
        {name: 'cellClass', description: 'a class name to add to the column cells', defaultValue: 'undefined'}
    ];

    scope.rowCollectionConfig = [
        {name: 'selectionMode', description: 'the selection mode used ("multiple","single","none"', defaultValue: 'none'},
        {name: 'isGlobalSearchActivated', description: 'display or not a input to filter data rows globally', defaultValue: 'false'},
        {name: 'displaySelectionCheckBox', description: 'if in multiple selection mode tell whether to display a column with checkbox for selection', defaultValue: 'false'},
        {name: 'isPaginationEnabled', description: 'tell whether to display the pagination at the bottom of the table', defaultValue: 'true'},
        {name: 'itemsByPage', description: 'the number of items displayed by page', defaultValue: '10'},
        {name: 'maxSize', description: 'the maximum number of page links to display at the bottom', defaultValue: '5'},
        {name: 'sortAlgorithm', description: 'a function if you want to use your own sort algorithm', defaultValue: 'undefined'},
        {name: 'filterAlgorithm', description: 'a function if you want to use your own filter algorithm', defaultValue: 'undefined'}
    ];

    scope.columnCollection = [
        {label: 'Property Name', map: 'name', cellClass: 'property-name'},
        {label: 'Description', map: 'description'},
        {label: 'Default value', map: 'defaultValue'}
    ];
}]);
