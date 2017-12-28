import HomeController from './modules/home/home.controller';
import LoginController from './modules/login/login.controller';
import SignupController from './modules/signup/signup.controller';
import OrderController from './modules/order/order.controller';

var moduleName = 'mainController';

angular.module(moduleName, [])
    .controller("homeController", HomeController)
    .controller("loginController", LoginController)
    .controller("signupController", SignupController)
    .controller("orderController", OrderController);

export default moduleName;