class Routes{
    constructor(){
        let apiUrl = "http://localhost:3001/api";
        // let apiUrl = "http://localhost:3000/employee";
        this.getAllOrderDetails = apiUrl;
        // this.getAllOrderDetails = apiUrl + "/allOrder";
        this.getUserOrderDetails = apiUrl + "/allOrder?id=";
        
        // Signup Urls
        this.signupUrl = apiUrl + "/login/signup";
    }
    static callFactory(){
        return new Routes();
    }
}
Routes.$inject = [];
export default Routes.callFactory;