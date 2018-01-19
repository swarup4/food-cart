import routes from "../../config/routing";
class LoginService {
    constructor($http, $q, routes) {
        this.http = $http;
        this.q = $q;
        this.routes = routes;
    }
    getLastName() {
        let lname = "Saha";
        return lname;
    }
    getFirstName() {
        let fname = "Swarup";
        return fname;
    }
    getUserDetails(){
        var data = { 
            username: 'Swarup007', 
            password: 'Swarup123' 
        };
        let deferred = this.q.defer();
        this.http.post(this.routes.loginUrl, data).then(success => {
            deferred.resolve(success);
        }, error => {
            deferred.reject(error);
        });
        return deferred.promise;
    }
}
LoginService.ngInject = ['$http', '$q', 'routes'];
export default LoginService;