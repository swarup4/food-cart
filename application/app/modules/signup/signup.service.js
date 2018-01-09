import routes from "../../config/routing";
class SignupServices {
    constructor($http, $q, routes){
        this.http = $http;
        this.q = $q;
        this.routes = routes;
    }
    signupUser(data){
        let deferred = this.q.defer();
        this.http.post(this.routes.signupUrl, data).then(success => {
            debugger;
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

SignupServices.$inject = ['$http', '$q', 'routes'];
export default SignupServices;