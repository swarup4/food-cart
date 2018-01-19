// import HttpError from "./httpError";

let data = {};
let rootScope;
// let errorList = {};

class AuthIntercept {
    constructor($rootScope) {
        rootScope = $rootScope;
    }
    request(config) {
        let currentUser, accessToken;
        if(sessionStorage.userDetails != undefined){
            currentUser = JSON.parse(sessionStorage.userDetails);
            accessToken = currentUser ? currentUser.token : null;
            if (accessToken) {
                config.headers.authorization = accessToken;
            }
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