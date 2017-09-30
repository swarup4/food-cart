import LoginService from './modules/login/login.service';
import OrderService from './modules/order/order.service';

var moduleName = 'mainService';

angular.module(moduleName, [])
    .service("loginService", LoginService)
    .service("orderService", OrderService);

export default moduleName;