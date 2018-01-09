import LoginService from './modules/login/login.service';
import SignupServices from './modules/signup/signup.service';
import OrderService from './modules/order/order.service';

var moduleName = 'mainService';

angular.module(moduleName, [])
    .service("loginService", LoginService)
    .service("signupService", SignupServices)
    .service("orderService", OrderService);

export default moduleName;