/**
 * Created by Shrikant on 5/15/2016.
 */
(function() {
    'use strict';

    angular
        .module('app.library')
        .config(appRoutes);
    appRoutes.$inject = ['$routeProvider', '$locationProvider'];

    function appRoutes($routeProvider, $locationProvider) {




        $routeProvider
            .when('/library/authors/add', {
                templateUrl: 'app/modules/library/views/author-add.html',
                controller: 'author.controller'
            })
            .when('/library/authors', {
                templateUrl: 'app/modules/library/views/author-list.html',
                controller: 'author.controller'
            })
            .when('/library/books/add', {
                templateUrl: 'app/modules/library/views/book-add.html',
                controller: 'book.controller'
            })
            .when('/library/books', {
                templateUrl: 'app/modules/library/views/book-list.html',
                controller: 'book.controller'
            })
            .when('/library/book-types/add', {
                templateUrl: 'app/modules/library/views/book-type-add.html',
                controller: 'book.controller'
            })
            .when('/library/book-types', {
                templateUrl: 'app/modules/library/views/book-type-list.html',
                controller: 'book.controller'
            })
            .when('/library/librarys', {
                templateUrl: 'app/modules/library/views/library-add.html',
                controller: 'library.controller'
            })
            .when('/library/librarys/add', {
                templateUrl: 'app/modules/library/views/library-add.html',
                controller: 'library.controller'
            })
            .when('/library/list', {
                templateUrl: 'app/modules/library/views/library-list.html',
                controller: 'library.controller'
            })
            .when('/library/publication', {
                templateUrl: 'app/modules/library/views/publication-add.html',
                controller: 'book.controller'
            })
            .when('/library/publications', {
                templateUrl: 'app/modules/library/views/publication-list.html',
                controller: 'book.controller'
            })
            .when('/library/transaction', {
                templateUrl: 'app/modules/library/views/transaction-add.html',
                controller: 'transaction.controller'
            })
            .when('/library/transactions', {
                templateUrl: 'app/modules/library/views/transaction-list.html',
                controller: 'transaction.controller'
            })
            .when('/library/transaction-type', {
                templateUrl: 'app/modules/library/views/transaction-type-add.html',
                controller: 'transaction.controller'
            })
            .when('/library/transaction-types', {
                templateUrl: 'app/modules/library/views/transaction-type-list.html',
                controller: 'transaction.controller'
            })
            .when('/library', {
                templateUrl: 'app/modules/library/views/dashboard.html',
                controller: 'library.controller'
            })
            .otherwise({
                redirectTo: '/library'
            });

        // configure html5 to get links working on jsfiddle
        //$locationProvider.html5Mode(true);
    }
})();