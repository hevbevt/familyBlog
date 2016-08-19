/**
 * Created by duanhe on 16/8/1.
 */
var registerCtrl = function ($scope, Svc) {
    var param = {
        name: $scope.regName,
        password: $scope.regPassword,
        password_re: $scope.regPasswordRepeat,
        email: $scope.regEmail
    };
    $scope.register = function () {
        Svc.register(param).then(function (resp) {
            console.log('reg success');
            location.href = "/login";
        }, function (err) {
            console.log(err);
        })
    }
};
blog.controller('registerCtrl', ['$scope','RegisterSvc', registerCtrl]);