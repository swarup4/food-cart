function Config($stateProvider, $urlRouterProvider){
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './application/app/modules/login/login.html',
        controller: 'loginController'
    });
    $urlRouterProvider.otherwise("/");
}
Config.ngInject = ['$stateProvider', '$urlRouterProvider'];

export default Config;