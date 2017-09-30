import OrderService from  "./order.service";

class OrderController{
    constructor($scope, $rootScope, orderService){
        this.orderService = orderService;
        $scope.name = "Swarup";
        $rootScope.pageTitle = "Orders";
    }
    getAllOrder(){
        this.orderService.getAllOrders().then(function(success){
            console.log(success);
            this.allOder = success.data;
        }, function(err){
            console.log(err);
        })
        //this.orderService.getAllOrders();
    }

    getUserOrder(userId){
        this.orderService.getUserOrders(userId).then(function(success){
            this.userOder = success.data;
        }, function(err){
            console.log(err);
        })
    }
}

OrderController.$inject = ['$scope', '$rootScope', 'orderService'];
export default OrderController;