import OrderService from  "./order.service";

class OrderDirective{
    constructor(){
        this.scope = false;
        this.restrict = 'AE';
        this.templateUrl = './application/app/modules/order/views/basicDirective.html';
    }
    controller($scope){
        $scope.lname = "Saha";
        $scope.show = () => {
            callDisplay();
        }
        let callDisplay = () => {
            console.log("Hello Let Function");
        }
    }
    static directiveFactory(){
        return new OrderDirective();
    }
}

export default OrderDirective.directiveFactory;