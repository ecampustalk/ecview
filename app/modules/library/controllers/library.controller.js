/**
 * Created by Shrikant on 5/15/2016.
 */
(function() {
    'use strict';

    angular
        .module('app.library')
        .controller('library.controller', library_controller);

    library_controller.$inject = ['$scope'];
    function library_controller($scope) {

        activate();

        ////////////////

        function activate() {

            $scope.menu=[
                {
                    id : 1,
                    count : 0,
                    title : "Issue Book",
                    icon : "icon ion-ios-book",
                    link : "#/library/transaction"
                },
                {
                    id : 2,
                    count : 0,
                    title : "Books",
                    icon : "icon ion-person",
                    link : "#/library/books"
                },
                {
                    id : 3,
                    count : 0,
                    title : "Authors",
                    icon : "icon ion-person",
                    link : "#/library/authors"
                },
                {
                    id : 4,
                    count : 0,
                    title : "Book Types",
                    icon : "icon ion-person",
                    link : "#/library/book-types"
                },
                {
                    id : 5,
                    count : 0,
                    title : "Publications",
                    icon : "icon ion-person",
                    link : "#/library/publications"
                }
            ]
        }
    }
})();