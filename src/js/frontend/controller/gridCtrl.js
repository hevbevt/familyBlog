var gridCtrl = function($scope) {
    var columnDefs = [
        {headerName: "Make", field: "make"},
        {headerName: "Model", field: "model" },
        {headerName: "Price", field: "price"}
    ];

    var rowData = [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000}
    ];
    var floatingTopRowData = [
        {make: "Toyota", model: "Celica", price: 33000},
    ]

     $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData,
        headerHeight: 56,
        rowHeight: 76,
        //floatingTop*: 置顶
        floatingTopRowData: floatingTopRowData,
        rowSelection: 'single',
        enableColResize: true,
        suppressAutoSize: true
    };
    setTimeout(function(){
        $scope.gridOptions.api.sizeColumnsToFit();
    }, 0);
   
    $scope.fit = function() {
        $scope.gridOptions.api.sizeColumnsToFit();
    }
    
};
blog.controller('gridCtrl', ['$scope', gridCtrl]);