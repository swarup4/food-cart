import loginService from "../modules/login/login.service";

let data = {};

class AuthIntercept extends loginService{
    constructor(){
        super();
        data.userDetails = this.getUserDetails();
    }
    request(config){
        let currentUser = data.userDetails;
        let accessToken = currentUser ? currentUser.token : null;
        if (accessToken) {
            config.headers.authorization = accessToken;
        }
        return config;
    }
    requestError(config){
        console.log();
        return config;
    }
    response(res){
        console.log(res);
        return res;
    }
    responseError(res){
        console.log(res);
        return res;
    }
    static callFactory(){
        return new AuthIntercept();
    }
}

export default AuthIntercept.callFactory;