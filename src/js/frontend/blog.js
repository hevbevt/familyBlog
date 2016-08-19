/**
 * Created by duanhe on 16/7/17.
 */
agGrid.initialiseAgGridWithAngular1(angular);
var blog = angular.module('blog',['ui.router', 'ui.bootstrap','agGrid']);
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
        controller: 'loginCtrl',
        templateUrl: '../partials/login.html'
    }).state('index.grid', {
        url:'grid',
        templateUrl: '../partials/grid.html',
        controller: 'gridCtrl'
    });
    $urlRouterProvider.otherwise('/');
};
blog.config(['$stateProvider', '$urlRouterProvider', router]);