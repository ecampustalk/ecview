/**
 * Created by Shrikant on 5/15/2016.
 */
(function() {
    'use strict';

    angular
        .module('app.user')
        .controller('user.controller', user_controller);

    user_controller.$inject = ['$scope'];
    function user_controller($scope) {

        activate();

        ////////////////

        function activate() {

            $scope.TodaysDate = new Date();
            $scope.minDate = new Date(
                $scope.TodaysDate.getFullYear(),
                $scope.TodaysDate.getMonth() - 2,
                $scope.TodaysDate.getDate());
            $scope.maxDate = new Date(
                $scope.TodaysDate.getFullYear(),
                $scope.TodaysDate.getMonth() + 2,
                $scope.TodaysDate.getDate());
            $scope.onlyWeekendsPredicate = function(date) {
                var day = date.getDay();
                return day === 0 || day === 6;
            }


        }
    }
})();