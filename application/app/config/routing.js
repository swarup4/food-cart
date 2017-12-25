class Routes{
    constructor(){
        // let apiUrl = "http://localhost:3001/api";
        let apiUrl = "http://localhost:3000/employees";
        this.getAllOrderDetails = apiUrl;
        // this.getAllOrderDetails = apiUrl + "/allOrder";
        this.getUserOrderDetails = apiUrl + "/allOrder?id=";
    }
    static callFactory(){
        return new Routes();
    }
}
Routes.$inject = [];
export default Routes.callFactory;