/**
 * Created by duanhe on 16/7/17.
 */
var blog = angular.module('blog',['ui.router', 'ui.bootstrap']);
var router = function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('index', {
        url: '/',
        templateUrl: '/base/index.html'
    }).state('reg', {

    });
    $urlRouterProvider.otherwise('/list');
};
blog.config(['$stateProvider', '$urlRouterProvider', router]);