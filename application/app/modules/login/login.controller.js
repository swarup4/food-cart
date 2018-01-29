import loginService from "./login.service";

class LoginController {
  constructor($scope, $rootScope, loginService) {
    $scope.fname = "Swarup";
    $scope.lname = loginService.getLastName();
    $rootScope.pageTitle = "Login";
  }
  login() {
    var data = {
      username: 'Swarup007',
      password: 'Swarup123'
    };
    loginService.getUsers(data).then(success => {
      sessionStorage.userDetails = JSON.stringify(success.data);
    }, error => {
      console.log(error);
    });
  }
}
LoginController.ngInject = ['$scope', '$rootScope', 'loginService'];
export default LoginController;