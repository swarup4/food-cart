import "./loginService.js";

class ShopingCtrl {
  constructor(scope, shopingFactory) {
    scope.fname = "Swarup";
    scope.lname = shopingFactory.getLastName();
  }
}
ShopingCtrl.$inject = ['$scope', 'shopingFactory'];
//export default ShopingCtrl;

app.controller("shopingCtrl", ShopingCtrl);