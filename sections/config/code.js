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
