import loginService from "./login.service";

class LoginController {
  constructor($scope, $rootScope, loginService) {
    $scope.fname = "Swarup";
    $scope.lname = loginService.getLastName();
    $rootScope.pageTitle = "Login";
  }
}
LoginController.ngInject = ['$scope', '$rootScope', 'loginService'];
export default LoginController;