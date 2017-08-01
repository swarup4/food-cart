class ShopingFactory {
    constructor(http, q) {
        
    }
    getLastName(){
        var lname = "Saha";
        return lname;
    }
}
ShopingFactory.$inject = ['$http', '$q'];
//export default ShopingFactory;

app.factory("shopingFactory", ShopingFactory);