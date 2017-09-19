import angular from 'angular';
import 'angular-ui-router';

function Config($stateProvider, $urlRouterProvider){
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './home/index.html',
        controller: 'homeController'
    });
    $urlRouterProvider.otherwise("/");
}
Config.ngInject = ['$stateProvider', '$urlRouterProvider'];

export default Config;