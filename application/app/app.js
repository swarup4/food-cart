import angular from 'angular';
import 'angular-ui-router';
import 'angular-material'

import LoginController from './modules/login/loginController';
import LoginService from './modules/login/loginService';
import config from './config';

var app = angular.module('ShopingCart', ['ui.router', 'ngMaterial']);

app.config(config);
app.controller("loginController", LoginController);
app.service("loginService", LoginService);