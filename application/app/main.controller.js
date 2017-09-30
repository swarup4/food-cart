import LoginController from './modules/login/login.controller';
import OrderController from './modules/order/order.controller';

var moduleName = 'mainController';

angular.module(moduleName, [])
    .controller("loginController", LoginController)
    .controller("orderController", OrderController);

export default moduleName;