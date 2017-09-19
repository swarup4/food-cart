//var app = angular.module('ShopingCart', ['ngMaterial', 'ui.router']);

// app.config(function ($stateProvider, $urlRouterProvider) {
//     $stateProvider.state('login', {
//         url: '/',
//         templateUrl: './app/modules/login/login.html', 
//         controller: 'loginCtrl'
//     });
//     $urlRouterProvider.otherwise("/");
// });

import angular from 'angular';
import 'angular-ui-router';
import LoginController from '../app/modules/login/loginController';
//import HomeFactory from '../app/home/services/homeFactory';
//import config from '../app/config';

var app = angular.module('ShopingCart', ['ui.router']);

//app.config(config);
app.controller("loginController", LoginController);
//app.service("homeFactory", HomeFactory);