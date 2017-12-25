import authIntercept from './authInterceptor';

let Config = ($stateProvider, $urlRouterProvider, $httpProvider) => {
    $stateProvider.state('login', {
        url: '/',
        templateUrl: './application/app/modules/login/login.html',
        controller: 'loginController',
        controllerAs: "scope"
    })
    $stateProvider.state('order', {
        url: '/order',
        templateUrl: './application/app/modules/order/order.html',
        controller: 'orderController',
        controllerAs: "scope"
    });
    $urlRouterProvider.otherwise("/");

    $httpProvider.interceptors.push('authIntercept');
}

Config.ngInject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

export default Config;