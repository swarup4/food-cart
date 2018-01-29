import HomeController from './modules/home/home.controller';
import LoginController from './modules/login/login.controller';
import userController from './modules/user/user.controller';
import SignupController from './modules/signup/signup.controller';
import OrderController from './modules/order/order.controller';

var moduleName = 'mainController';

angular.module(moduleName, [])
    .controller("homeController", HomeController)
    .controller("loginController", LoginController)
    .controller("userController", userController)
    .controller("signupController", SignupController)
    .controller("orderController", OrderController);

export default moduleName;