class HeaderDirective{
    constructor(){
        this.scope = false;
        this.restrict = 'AE';
        this.templateUrl = './application/app/modules/common/templates/header.html';
    }
    controller($scope){
        $scope.lname = "Saha";
    }
    static directiveFactory(){
        return new HeaderDirective();
    }
}

export default HeaderDirective.directiveFactory;