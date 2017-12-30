import authIntercept from './authInterceptor';

let Config = ($stateProvider, $urlRouterProvider, $httpProvider, $mdThemingProvider) => {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './application/app/modules/home/home.html',
        controller: 'homeController',
        controllerAs: "scope"
    });
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: './application/app/modules/login/login.html',
        controller: 'loginController',
        controllerAs: "scope"
    });
    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: './application/app/modules/signup/signup.html',
        controller: 'signupController',
        controllerAs: "scope"
    });
    $stateProvider.state('order', {
        parent: 'home',
        url: 'order',
        templateUrl: './application/app/modules/order/order.html',
        controller: 'orderController',
        controllerAs: "scope"
    });
    $urlRouterProvider.otherwise("/");

    $httpProvider.interceptors.push('authIntercept');
    // $mdThemingProvider.disableTheming();
    $mdThemingProvider.theme('teal')
        .primaryPalette('green')
        .accentPalette('red');
}

Config.ngInject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', '$mdThemingProvider'];

export default Config;