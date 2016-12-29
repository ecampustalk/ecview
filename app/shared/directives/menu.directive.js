/**
 * Created by Shrikant on 5/12/2016.
 */

angular
    .module('app')
    .directive('menu', function() {
        return {
            restrict: 'E',
            scope: {
                card: '=item'
            },
            templateUrl: 'app/shared/navigation/views/menu.html'
        };

    });
