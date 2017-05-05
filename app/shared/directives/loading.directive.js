/**
 * Created by Shrikant on 5/3/2017.
 */
angular
    .module('app')
    .directive('loading',   ['$http' ,function ($http)
    {
        return {
            restrict: 'A',
            template: '<md-progress-linear style="top:0px;left:0px;margin: 0px;padding:0% !important ;" ng-show="showloader" md-mode="indeterminate"></md-progress-linear>',
            link: function (scope, elm, attrs)
            {
                scope.isLoading = function () {
                    return $http.pendingRequests.length > 0;
                };

                scope.$watch(scope.isLoading, function (v)
                {
                    if(v){
                        scope.showloader=true;
                    }else{
                        scope.showloader=false;
                    }
                });
            }
        };
    }]);
