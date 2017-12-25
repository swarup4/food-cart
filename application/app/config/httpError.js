class HttpErrorInterceptor{
    constructor(){

    }
    request(config){
        // config.header.authorization = "Swarup7";
        console.log(config);
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
        return new HttpErrorInterceptor();
    }
}

export default HttpErrorInterceptor.callFactory;