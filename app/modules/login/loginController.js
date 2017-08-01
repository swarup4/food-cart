//let hello = require("./hello.js");
import {hello} from './hello.js'; // or './module'
let val = hello();
console.log(val);

class LoginController {
  constructor(scope, shopingFactory) {
    scope.fname = "Swarup";
    scope.lname = shopingFactory.getLastName();
  }
}
LoginController.$inject = ['$scope', 'shopingFactory'];
//export default LoginController;

app.controller("loginCtrl", LoginController);