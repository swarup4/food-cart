import loginService from "../modules/login/login.service";
// import HttpError from "./httpError";

let data = {};
let rootScope;
// let errorList = {};

class AuthIntercept extends loginService {
    constructor($rootScope) {
        super();
        data.userDetails = this.getUserDetails();
        rootScope = $rootScope;
    }
    request(config) {
        let currentUser = data.userDetails;
        let accessToken = currentUser ? currentUser.token : null;
        if (accessToken) {
            config.headers.authorization = accessToken;
        }
        return config;
    }
    requestError(config) {
        rootScope.callErrorMessage(config);
        return config;
    }
    response(res) {
        return res;
    }
    responseError(res) {
        rootScope.callErrorMessage(res);
        return res;
    }
    static callFactory($rootScope) {
        return new AuthIntercept($rootScope);
    }
}

AuthIntercept.ngInject = ['$rootScope'];
export default AuthIntercept.callFactory;