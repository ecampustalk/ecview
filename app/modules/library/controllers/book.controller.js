/**
 * Created by Shrikant on 5/15/2016.
 */
(function() {
    'use strict';

    angular
        .module('app.library')
        .controller('book.controller', book_controller);

    book_controller.$inject = ['$scope','book_data_factory','$mdToast','$location'];
    function book_controller($scope,book_data_factory,$mdToast,$location) {

        activate();

        ////////////////

        function activate() {

            $scope.getBookTypes = function(searchText) {

                var book_types = getBookTypes().filter(function(state) {
                    return (state.name.toUpperCase().indexOf(searchText.toUpperCase()) !== -1
                    || state.abbreviation.toUpperCase().indexOf(searchText.toUpperCase()) !== -1);
                });
                return book_types;
            }

            function getBookTypes() {
                return [{
                    "name": "Maths",
                    "id": 1
                }, {
                    "name": "Physics",
                    "id": 2
                }];
            }

            //$scope.books=[
            //    {
            //        id : 1,
            //        name : "Maths",
            //        author : "Nethan Hoper",
            //        start_date : "15-07-2016",
            //        end_date : "11-04-2017"
            //    },
            //    {
            //        id : 2,
            //        name : "Physics",
            //        author : "Chris Negi",
            //        start_date : "24-07-2016",
            //        end_date : "16-04-2017"
            //    },
            //    {
            //        id : 3,
            //        name : "Basics of data mining",
            //        author : "Margarett H. Dunham",
            //        start_date : "12-08-2016",
            //        end_date : "29-03-2017"
            //    },
            //    {
            //        id : 4,
            //        name : "let us C",
            //        author : "Yashwant Kanitkar",
            //        start_date : "24-08-2016",
            //        end_date : "04-04-2017"
            //    }
            //]

            //$scope.book_types=[
            //    {
            //        id : 1,
            //        name : "Academic book"
            //    },
            //    {
            //        id : 2,
            //        name : "Journal"
            //    },
            //    {
            //        id : 3,
            //        name : "Magazine"
            //    },
            //    {
            //        id : 4,
            //        name : "Reference"
            //    }
            //]

            //$scope.publications=[
            //    {
            //        id : 1,
            //        name : "Nirali"
            //    },
            //    {
            //        id : 2,
            //        name : "Mc-graw Hill"
            //    },
            //    {
            //        id : 3,
            //        name : "Tech-Max"
            //    },
            //    {
            //        id : 4,
            //        name : "Pearson"
            //    }
            //]


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


            $scope.add_book = function(){

                book_data_factory.add_book($scope.book.name,$scope.book.isbn,$scope.book.edition,$scope.book.year
                    ,$scope.book.price,$scope.book.quantity,$scope.book.avilable_stock
                    ,$scope.book_type.id,$scope.publication.id,$scope.author.id).then(function(response) {
                    if(response.data.StatusCode===200)
                    {
                        $scope.showSimpleToast('book added.');
                        $location.path('/library/books');
                        get_books();
                    }
                });
            };

            $scope.delete_book = function(index){
                var id =$scope.authors.splice(index, 1)[0].ID;
                $scope.showSimpleToast('book deleting.'+id);
                book_data_factory.delete_book(id).then(function(response) {
                    if(response.data.StatusCode===200)
                    {
                        $scope.showSimpleToast('book deleted.');
                        get_authors();

                    }
                });
            };

            var get_books = function(){

                book_data_factory.get_books().then(function(response) {
                    if(response.data.StatusCode===200)
                    {
                        $scope.books=response.data.Result;
                    }
                });
            };

            $scope.add_book_type = function(){

                book_data_factory.add_book_type($scope.name).then(function(response) {
                    if(response.data.StatusCode===200)
                    {
                        $scope.showSimpleToast('book type added.');
                        $location.path('/library/book-types');
                        get_book_types();
                    }
                });
            };

            $scope.delete_book_type = function(index){
                var id =$scope.book_types.splice(index, 1)[0].ID;
                $scope.showSimpleToast('book type deleting.'+id);
                book_data_factory.delete_book_type(id).then(function(response) {
                    if(response.data.StatusCode===200)
                    {
                        $scope.showSimpleToast('book type deleted.');
                        get_book_types();

                    }
                });
            };

            var get_book_types = function(){

                book_data_factory.get_book_types().then(function(response) {
                    if(response.data.StatusCode===200)
                    {
                        $scope.book_types=response.data.Result;
                    }
                });
            };

            $scope.add_book_publication = function(){

                book_data_factory.add_book_publication($scope.name).then(function(response) {
                    if(response.data.StatusCode===200)
                    {
                        $scope.showSimpleToast('book publication added.');
                        $location.path('/library/publications');
                        get_book_publications();
                    }
                });
            };

            $scope.delete_book_publication = function(index){
                var id =$scope.book_publications.splice(index, 1)[0].ID;
                $scope.showSimpleToast('book publication deleting.'+id);
                book_data_factory.delete_book_publication(id).then(function(response) {
                    if(response.data.StatusCode===200)
                    {
                        $scope.showSimpleToast('book publication deleted.');
                        get_book_publications();

                    }
                });
            };

            var get_book_publications = function(){

                book_data_factory.get_book_publications().then(function(response) {
                    if(response.data.StatusCode===200)
                    {
                        $scope.publications=response.data.Result;
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
            get_books();
            get_book_types();
            get_book_publications();

        }
    }
})();