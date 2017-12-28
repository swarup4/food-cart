// import signupService from "./login.service";

class SignupController {
  constructor($scope, $rootScope) {
    $scope.pageName = "Sign Up Page";
  }
}
SignupController.ngInject = ['$scope', '$rootScope'];
export default SignupController;