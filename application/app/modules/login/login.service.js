class LoginService {
    constructor($http, $q) {
        this.http = $http;
        this.q = $q;
    }
    getLastName(){
        let lname = "Saha";
        return lname;
    }
   getFirstName(){
        let fname = "Swarup";
        return fname;
    }
}
LoginService.ngInject = ['$http', '$q'];
export default LoginService;