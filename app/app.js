var app = angular.module('ShopingCart', ['ngMaterial', 'ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('login', {
        url: '/',
        templateUrl: './app/modules/login/login.html', 
        //controller: 'shopingCtrl'
    });
    $urlRouterProvider.otherwise("/");
});