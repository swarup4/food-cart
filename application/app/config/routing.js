class Routes{
    constructor(apiUrl){
        this.getAllOrderDetails = apiUrl + "/allOrder";
        this.getUserOrderDetails = apiUrl + "/allOrder?id=";
    }
    static callFactory(){
        return new Routes();
    }
}
Routes.$inject = ['apiUrl'];
export default Routes.callFactory;