/**
 * Created by Shrikant on 12/18/2016.
 */

angular
    .module('app')
    .directive('day', function() {
        return {
            restrict: 'E',
            scope: {
                card: '=item'
            },
            templateUrl: 'app/shared/navigation/views/day.html'
        };

    });
