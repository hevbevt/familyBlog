/**
 * Created by duanhe on 16/7/17.
 */
var blog = angular.module('blog',['ui.router', 'ui.bootstrap']);
var router = function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('index', {
        url: '/',
        controller: 'indexCtrl',
        templateUrl: '../partials/index.html'
    }).state('index.reg', {
        url:'reg',
        controller: 'registerCtrl',
        templateUrl: '../partials/register.html'
    }).state('index.login', {
        url:'login',
        templateUrl: '../partials/login.html'
    });
    $urlRouterProvider.otherwise('/');
};
blog.config(['$stateProvider', '$urlRouterProvider', router]);