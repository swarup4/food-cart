import OrderDirective from './modules/order/order.directive';

var moduleName = 'mainDirective';

angular.module(moduleName, [])
    .directive('orderDirective', OrderDirective);

export default moduleName;