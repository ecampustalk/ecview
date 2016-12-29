/**
 * Created by Shrikant on 5/15/2016.
 */
(function() {
    'use strict';

    angular
        .module('app.library')
        .controller('transaction.controller', transaction_controller);

    transaction_controller.$inject = ['$scope','book_data_factory','$mdToast','$location'];
    function transaction_controller($scope,book_data_factory,$mdToast,$location) {

        activate();

        ////////////////

        function activate() {

            var last = {
                bottom: false,
                top: true,
                left: false,
                right: true
            };
            $scope.toastPosition = angular.extend({},last);
            $scope.getToastPosition = function() {
                sanitizePosition();
                return Object.keys($scope.toastPosition)
                    .filter(function(pos) { return $scope.toastPosition[pos]; })
                    .join(' ');
            };
            function sanitizePosition() {
                var current = $scope.toastPosition;
                if ( current.bottom && last.top ) current.top = false;
                if ( current.top && last.bottom ) current.bottom = false;
                if ( current.right && last.left ) current.left = false;
                if ( current.left && last.right ) current.right = false;
                last = angular.extend({},current);
            }
            $scope.showSimpleToast = function(msg) {
                var pinTo = $scope.getToastPosition();
                $mdToast.show(
                    $mdToast.simple()
                        .textContent(msg)
                        .position(pinTo )
                        .hideDelay(1000)
                );
            };


            book_data_factory.get_books().then(function(response) {
                if(response.data.StatusCode===200)
                {
                    $scope.books = response.data.Result;
                }
            });


            book_data_factory.get_users().then(function(response) {
                if(response.data.StatusCode===200)
                {
                    $scope.users=response.data.Result;
                }
            });

            book_data_factory.get_transaction_types().then(function(response) {
                if(response.data.StatusCode===200)
                {
                    $scope.transaction_types=response.data.Result;
                }
            });

            $scope.add_transaction = function(){

                book_data_factory.add_transaction($scope.book.id,$scope.user.id,$scope.transaction.id).then(function(response) {
                    if(response.data.StatusCode===200)
                    {
                        $scope.showSimpleToast('Transaction completed.');
                        $location.path('/library');
                    }
                });
            };

        }
    }
})();