/**
 * Created by Shrikant on 5/15/2016.
 */
(function() {
    'use strict';

    angular
        .module('app.library')
        .controller('author.controller', author_controller);

    author_controller.$inject = ['$scope','book_data_factory','$mdToast','$location'];
    function author_controller($scope,book_data_factory,$mdToast,$location) {

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


            $scope.add_author = function(){

                book_data_factory.add_author($scope.name).then(function(response) {
                    if(response.data.StatusCode===200)
                    {
                        $scope.showSimpleToast('Author added.');
                        $location.path('/library/authors');
                        get_authors();
                    }
                });
            };

            $scope.delete_author = function(index){
                var author =$scope.authors.splice(index, 1);
                $scope.showSimpleToast('Author deleting.'+author[0].ID);
                book_data_factory.delete_author(author[0].ID).then(function(response) {
                    if(response.data.StatusCode===200)
                    {
                        $scope.showSimpleToast('Author deleted.');
                        get_authors();

                    }
                });
            };

            var get_authors = function(){

                book_data_factory.get_authors().then(function(response) {
                    if(response.data.StatusCode===200)
                    {
                        $scope.authors=response.data.Result;
                    }
                });
            };

            get_authors();

        }
    }
})();