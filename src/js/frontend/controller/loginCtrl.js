var loginCtrl = function($scope, Svc) {
   
    $scope.login = function() {
        Svc.login($scope.name, $scope.password).then(function(resp){
            console.log('login success');
            location.href = '/#/';
        }, function(err) {
            console.log(err);
        })
    }
};
blog.controller('loginCtrl', ['$scope', 'RegisterSvc', loginCtrl]);