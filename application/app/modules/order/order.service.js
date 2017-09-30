import routes from "../../config/routing";
class OrderServices {
    constructor($http, $q, routes){
        this.http = $http;
        this.q = $q;
        this.routes = routes;
    }
    getAllOrders(){
        let deferred = this.q.defer();
        this.http.get(this.routes.getAllOrderDetails).then(function(success){
            deferred.resolve(success);
        }, function(error){
            deferred.reject(error);
        });
    }

    getUserOrders(userId){
        let deferred = this.q.defer();
        this.http.get(this.routes.getUserOrderDetails + userId).then(function(success){
            deferred.resolve(success);
        }, function(error){
            deferred.reject(error);
        });
    }
}

OrderServices.$inject = ['$http', '$q', 'routes'];
export default OrderServices;