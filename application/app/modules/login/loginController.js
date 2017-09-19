//import homeFactory from "./../services/homeFactory"
class LoginController {
  constructor(scope) {
    scope.fname = "Swarup";
    //scope.lname = shopingFactory.getLastName();
  }
}
LoginController.ngInject = ['$scope'];
export default LoginController;

//app.controller("loginCtrl", LoginController);

// import homeFactory from "./../services/homeFactory"
// class HomeController {
//   constructor($scope,homeFactory) {
//     $scope.fname = homeFactory.getFirstName();
//     $scope.lname = homeFactory.getLastName();
//   }
// }
// export default HomeController;
// HomeController.ngInject = ['$scope', 'homeFactory'];