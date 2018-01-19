import signupService from "./signup.service";

class SignupController {
  constructor($scope, $rootScope, signupService) {
    $scope.pageName = "Sign Up Page";
    this.signupService = signupService;
  }
  signUp(userData){
    console.log(userData);
    this.signupService.signupUser(userData).then(success => {
      console.log(success);
    }, error => {
      console.log(error);
    })
  }
}
SignupController.ngInject = ['$scope', '$rootScope', 'signupService'];
export default SignupController;