import loginService from "./loginService";

class LoginController {
  constructor($scope, loginService) {
    $scope.fname = "Swarup";
    $scope.lname = loginService.getLastName();
  }
}
LoginController.ngInject = ['$scope', 'loginService'];
export default LoginController;