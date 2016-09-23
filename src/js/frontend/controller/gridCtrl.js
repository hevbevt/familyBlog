var gridCtrl = function($scope) {
    var order = [{
        name: 'chainOrder',
        product:[{
            hasChild: true,
            layout: 1,
            name:'P1',
            children:[{
                layout: 2,
                name: 'M1',
                hasChild: false
            },{
                layout: 2,
                name: 'M2', 
                hasChild: true,
                children: [{
                    layout: 3,
                    name: 'M3',
                    hasChild: false
                }]
            }]
        }]
    },{
        name: 'aloneOrder',
        product:[]
    }];

    var columnDefs = [
        {headerName: '层级', field: 'layout', cellRenderer:'group'},
        {headerName: "订单名", field: "name"},
        {headerName: "pinned on right", pinned: 'right'}
    ];

    var rowDataFactory = function rowDataFactory(data) {
        var rowData = [];
        for (var i = 0; i < data.length; i ++) {
            var _data = data[i];
            var o = {
                name: _data.name,
                fullWidth: true,
                layout: 0
            }
            rowData.push(o);
            for(var j = 0; _data.product && j < _data.product.length; j++) {
                var product = _data.product[j];
                var p = {
                    hasChild: product.hasChild,
                    children: product.children,
                    name: product.name,
                    layout: 1
                }
                rowData.push(p);
            } 
        }
        return rowData;
    };

    var rowData = rowDataFactory(order);
    var floatingTopRowData = [
        {make: "Toyota", model: "Celica", price: 33000},
    ]

     $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData,
        isFullWidthCell: function(rowNode) {
            // in this example, we check the fullWidth attribute that we set
            // while creating the data. what check you do to decide if you
            // want a row full width is up to you, as long as you return a boolean
            // for this method.
            return rowNode.data.fullWidth;
        },
        fullWidthCellRenderer: function(params) {
            var template = '<div style="text-align: center;"><span>' + params.data.name + '</span></div>';
            return template;
        },
        getNodeChildDetails: function(product) {
            if (product.hasChild) {
                return {
                    group: true,
                    children: product.children,
                    expanded: false
                };
            } else {
                return null;
            }
        },
        headerHeight: 56,
        rowHeight: 76,
        rowSelection: 'single',
        enableColResize: true,
        suppressAutoSize: true,
        onGridReady: function(params) {
            params.api.sizeColumnsToFit();
        },
        icons: {
            groupExpanded: '<i class="fa fa-caret-down fa-lg"/>',
            groupContracted: '<i class="fa fa-caret-right fa-lg"/>'
        }
    };
   
    $scope.fit = function() {
        $scope.gridOptions.api.sizeColumnsToFit();
    }
    
};
blog.controller('gridCtrl', ['$scope', gridCtrl]);
