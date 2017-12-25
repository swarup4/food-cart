import angular from 'angular';
import 'angular-ui-router';
// import 'angular-material'

import mainService  from './main.service';
import mainController  from './main.controller';
import mainDirective  from './main.directive';

import  Routes from './config/routing';
import config from './config/config';
import AuthIntercept from './config/authInterceptor';
//import run from './config/run';

var app = angular.module('ShopingCart', ['ui.router', mainController, mainService, mainDirective]);

// app.constant("apiUrl", 'http://localhost:3001/api');

app.factory("routes", Routes);
app.factory("authIntercept", AuthIntercept);
app.config(config);
//app.run(run);