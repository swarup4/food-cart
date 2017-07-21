class ShopingFactory {
    constructor(http, q) {
        
    }
    getLastName(){
        var lname = "Saha";
        return lname;
    }
}
ShopingCtrl.$inject = ['$http', '$q'];
//export default ShopingCtrl;

app.factory("shopingFactory", ShopingFactory);