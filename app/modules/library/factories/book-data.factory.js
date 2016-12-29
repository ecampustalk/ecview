/**
 * Created by Shrikant on 5/10/2016.
 */

(function(){

    var app = angular.module('app.library');

    var API_Base="http://localhost:12589/"

    app.factory('book_data_factory', function($http) {

        $http.defaults.headers.put = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
        };

        var get_authors = function(){
            return $http.get(API_Base+'api/Values'); // this will return a promise to controller
        };


        var add_author = function(name){
            var req = {
                method: 'POST',
                url: API_Base+'addLibraryBookAuther',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    "ID": 1,
                    "Name": name,
                    "IsActive": true, "CreatedDate": "2016-06-07", "ModifiedDate": "2016-06-07", "CreatedBy": 2, "ModifiedBy": 2
                }
            }
            return $http(req); // this will return a promise to controller
        };

        var delete_author = function(id){
            return $http.get(API_Base+'deleteLibraryBookAuther/'+id); // this will return a promise to controller
        };


        //book api calls

        var get_books = function(){
            return $http.get(API_Base+'librarybooks'); // this will return a promise to controller
        };


        var add_book = function(name,isbn,edition,year,price,quantity,avilablestock,booktypeid,
                                publicationid,authorid){
            var req = {
                method: 'POST',
                url: API_Base+'addLibraryBook',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    "ID": 1,
                    "Name": name,
                    "ImageFront": "",
                    "ImageBack": "",
                    "ISBN": isbn,
                    "Edition": edition,
                    "Year": "2016-06-07",
                    "Price": price,
                    "Quantity": quantity,
                    "AvilableStock": avilablestock,
                    "BookTypeID": booktypeid,
                    "PublicationID": publicationid,
                    "AutherID": authorid,
                    "LibraryID": 1,
                    "IsActive": true, "CreatedDate": "2016-06-07", "ModifiedDate": "2016-06-07", "CreatedBy": 2, "ModifiedBy": 2
                }
            }
            return $http(req); // this will return a promise to controller
        };

        var delete_book = function(id){
            return $http.get(API_Base+'deleteLibraryBook/'+id); // this will return a promise to controller
        };

        //book_type api calls

        var get_book_types = function(){
            return $http.get(API_Base+'LibraryBookTypes'); // this will return a promise to controller
        };


        var add_book_type = function(name,description){
            var req = {
                method: 'POST',
                url: API_Base+'addLibraryBookType',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    "ID": 1,
                    "Name": name,
                    "Description": description,
                    "IsActive": true, "CreatedDate": "2016-06-07", "ModifiedDate": "2016-06-07", "CreatedBy": 2, "ModifiedBy": 2
                }
            }
            return $http(req); // this will return a promise to controller
        };

        var delete_book_type = function(id){
            return $http.get(API_Base+'deleteLibraryBookType/'+id); // this will return a promise to controller
        };

        //book_publication api calls

        var get_book_publications = function(){
            return $http.get(API_Base+'LibraryPublications'); // this will return a promise to controller
        };


        var add_book_publication = function(name,description){
            var req = {
                method: 'POST',
                url: API_Base+'addLibraryPublication',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    "ID": 1,
                    "Name": name,
                    "Description": description,
                    "IsActive": true, "CreatedDate": "2016-06-07", "ModifiedDate": "2016-06-07", "CreatedBy": 2, "ModifiedBy": 2
                }
            }
            return $http(req); // this will return a promise to controller
        };

        var delete_book_publication = function(id){
            return $http.get(API_Base+'deleteLibraryPublication/'+id); // this will return a promise to controller
        };

        var get_users = function(){
            return $http.get(API_Base+'api/user/users'); // this will return a promise to controller
        };


        var add_transaction = function(bookid,userid,transactiontypeid){
            var req = {
                method: 'POST',
                url: API_Base+'addLibraryTransaction',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    "ID": 1,
                    "ByUserID": userid,
                    "ToUserID": userid,
                    "BookID": bookid,
                    "BookTransactionTypeID": transactiontypeid,
                    "Amount": 1.1,
                    "IsCredit": true,
                    "Quantity": 1.1,
                    "LibraryID": 1,
                    "IsActive": true, "CreatedDate": "2016-06-07", "ModifiedDate": "2016-06-07", "CreatedBy": 2, "ModifiedBy": 2
                }
            }
            return $http(req); // this will return a promise to controller
        };

        var get_transaction_types = function(){
            return $http.get(API_Base+'LibraryTransactionTypes'); // this will return a promise to controller
        };

        return {
            get_authors:  get_authors,
            add_author: add_author,
            delete_author: delete_author,

            add_book_type: add_book_type,
            get_book_types: get_book_types,
            delete_book_type: delete_book_type,

            add_book_publication: add_book_publication,
            get_book_publications: get_book_publications,
            delete_book_publication: delete_book_publication,

            get_books: get_books,
            add_book: add_book,
            delete_book: delete_book,

            get_users: get_users,
            get_transaction_types:get_transaction_types,

            add_transaction:add_transaction

        }
    });




}());



//angular.module('app').factory('data_factory', function($http) {
//
//    var get_iot_data = function(){
//       return $http.get('/AngularChartjs/assets/data/iot.json'); // this will return a promise to controller
//    };
//
//    return {
//        get_iot_data:  get_iot_data
//    }
//});




