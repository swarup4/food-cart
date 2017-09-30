let Config = ($stateProvider, $urlRouterProvider) => {
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
}

Config.ngInject = ['$stateProvider', '$urlRouterProvider'];

export default Config;