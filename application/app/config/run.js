import 'angular-ui-router';

import orderService from "../modules/order/order.service";
import loginService from "../modules/login/login.service";

let Run = ($rootScope, $location, $transitions, orderService, loginService) => {

    $transitions.onStart({}, ($transitions) => {
        debugger;
        let fromState = $transitions.$from();
        let toState = $transitions.$to();
        console.log(fromState + " " + toState);
        // if (orderService.authName == "Swarup") {
        //     if (toState.name == "login") {
        //         return $transitions.router.stateService.target(fromState.name);
        //     }
        // }else{
        //     if(toState == "login" || toState == "signup" || toState == "home"){
        //         return true;
        //     }else{
        //         return $transitions.router.stateService.target("login");
        //     }            
        // }
    });
}

Run.$inject = ['$rootScope', '$location', '$transitions', 'orderService', 'loginService'];
export default Run;