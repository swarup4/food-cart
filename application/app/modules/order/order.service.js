import routes from "../../config/routing";
class OrderServices {
    constructor($http, $q, routes){
        this.http = $http;
        this.q = $q;
        this.routes = routes;
    }
    getAllOrders(){
        let deferred = this.q.defer();
        this.http.get(this.routes.getAllOrderDetails).then(success => {
            deferred.resolve(success);
        }, error => {
            deferred.reject(error);
        });
        return deferred.promise;
    }

    getUserOrders(userId){
        let deferred = this.q.defer();
        this.http.get(this.routes.getUserOrderDetails + userId).then(success => {
            deferred.resolve(success);
        }, error => {
            deferred.reject(error);
        });
        return deferred.promise;
    }
    setAuthName(name){
        this.authName = name;
    }
}

OrderServices.$inject = ['$http', '$q', 'routes'];
export default OrderServices;