import OrderService from  "./order.service";

class OrderController{

    constructor($scope, $rootScope, orderService){
        this.scope = $scope;
        this.orderService = orderService;
        this.scope.name = "Swarup";
        $rootScope.pageTitle = "Orders";
    }
    getAllOrder(){
        this.orderService.getAllOrders().then(success => {
            this.scope.allOder = success.data;
        }, err => {
            console.log(err);
        });
    }

    getUserOrder(userId){
        this.orderService.getUserOrders(userId).then(success =>{
            this.userOder = success.data;
        }, err => {
            console.log(err);
        })
    }
    setAuth(){
        this.orderService.setAuthName("Swarup");
    }
    getName(){
        this.scope.name;
    }
}

OrderController.$inject = ['$scope', '$rootScope', 'orderService'];
export default OrderController;