class LoginService {
    constructor($http) {
        this.http = $http;
        // this.q = $q;
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
        let user = {};
        user.token = btoa("Swarup7");
        user.username = "Swarup7";
        user.userId = 2346662;
        return user;
    }
}
LoginService.ngInject = ['$http'];
export default LoginService;