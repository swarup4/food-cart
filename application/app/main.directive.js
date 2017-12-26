import OrderDirective from './modules/order/order.directive';
import HeaderDirective from './modules/common/header.directive';
import FooterDirective from './modules/common/footer.directive';


var moduleName = 'mainDirective';

angular.module(moduleName, [])
    .directive('orderDirective', OrderDirective)
    .directive('headerDirective', HeaderDirective)
    .directive('footerDirective', FooterDirective)

export default moduleName;