class HomeController {
    constructor($scope) {
        $scope.pageName = "Home Page";
        $scope.name = "Swarup Saha";
    }
}
HomeController.ngInject = ['$scope'];
export default HomeController;