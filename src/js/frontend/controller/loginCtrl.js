var loginCtrl = function($scope, Svc) {
    var name = $scope.name;
    var password = $scope.password;
    $scope.login = function() {
        Svc.login(name, password).then(function(resp){
            
        }, function(err) {
            console.log(err);
        })
    }
};
blog.controller('loginCtrl', ['$scope', 'RegisterSvc', loginCtrl]);