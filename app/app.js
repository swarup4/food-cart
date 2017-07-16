var app = angular.module('ShopingCart', ['ngMaterial', 'ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('login', {
        url: '/',
        templateUrl: './app/modules/login/login.html', 
        //controller: 'LoginCtrl'
    });
    $urlRouterProvider.otherwise("/");
});



class ShopingCtrl {
  constructor(scope) {
    scope.name = "Swarup Saha";
  }
}
ShopingCtrl.$inject = ['$scope'];
//export default ShopingCtrl;

app.controller("shopingCtrl", ShopingCtrl);