class FooterDirective{
    constructor(){
        this.scope = false;
        this.restrict = 'AE';
        this.templateUrl = './application/app/modules/common/templates/footer.html';
    }
    controller($scope, $rootScope, $mdToast){
        $scope.lname = "Saha";
        $rootScope.callErrorMessage = (error) => {
            $scope.openErrorTost();
        }
        $scope.openErrorTost = () => {
            let errorMsg = "Error! Something is Wrong"; 
            $mdToast.show(
                $mdToast.simple()
                    .textContent(errorMsg)
                    .action('Close')
                    .highlightAction(true)
                    .highlightClass('md-accent')
                    .position("top right")
                    .hideDelay(500000)
            ).then(function(response) {});
        }

    }
    static directiveFactory(){
        return new FooterDirective();
    }
}

export default FooterDirective.directiveFactory;