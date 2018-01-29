import loginService from "../login/login.service";

let scope;
class userController {
    constructor($scope, $rootScope, loginService) {
        debugger;
        $rootScope.pageTitle = "User Details";
        this.scope = $scope;
        scope = this;
    }
    userDetails() {
        this.scope.userData = "Swarup Saha";
        // loginService.getUsers(userId).then(success => {
        //     scope.userData = success.data;
        // }, error => {
        //     console.log(error);
        // });
    };
    // userDetails();
}
userController.ngInject = ['$scope', '$rootScope', 'loginService'];
export default userController;