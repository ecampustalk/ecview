(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by Shrikant on 5/2/2016.
 */

    'use strict';

    // Init the application configuration module for AngularJS application
    window.ApplicationConfiguration = (function () {

        var APIURL="http://localhost/";

        var applicationModuleName = 'app';

        var applicationModuleVendorDependencies = ['ngRoute',
            'ngAnimate',
            'ngMaterial',
            'ngCookies'
        ];

        angular.module(applicationModuleName, applicationModuleVendorDependencies || [])
            .config(function($mdThemingProvider) {

                $mdThemingProvider.definePalette('amazingPaletteName', {
                    '50': 'ffebee',
                    '100': 'ffcdd2',
                    '200': 'ef9a9a',
                    '300': 'e57373',
                    '400': 'ef5350',
                    '500': 'f44336',
                    '600': 'e53935',
                    '700': 'd32f2f',
                    '800': 'c62828',
                    '900': 'b71c1c',
                    'A100': 'ff8a80',
                    'A200': 'ff5252',
                    'A400': 'ff1744',
                    'A700': 'd50000',
                    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                                        // on this palette should be dark or light

                    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
                        '200', '300', '400', 'A100'],
                    'contrastLightColors': undefined    // could also specify this if default was 'dark'
                });


                $mdThemingProvider.theme('default')
                .primaryPalette('teal');
                //.dark();
                //.primaryPalette('pink', {
                //    'default': '400', // by default use shade 400 from the pink palette for primary intentions
                //    'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
                //    //'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
                //    'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
                //})
                // If you specify less than all of the keys, it will inherit from the
                // default shades
                //.accentPalette('purple', {
                //    'default': '200' // use shade 200 for default, and keep all other shades the same
                //});
                    //.primaryPalette('amazingPaletteName');
        });


        // Add a new vertical module
        var registerModule = function (moduleName, dependencies) {
            // Create angular module
            angular.module(moduleName, dependencies || []);

            // Add the module to the AngularJS configuration file
            angular.module(applicationModuleName).requires.push(moduleName);
        };

        return {
            applicationModuleName: applicationModuleName,
            applicationModuleVendorDependencies: applicationModuleVendorDependencies,
            registerModule: registerModule,
            APIURL: APIURL
        };

    })();

},{}],2:[function(require,module,exports){
/**
 * Created by Shrikant on 5/2/2016.
 */

(function() {
    'use strict';

    // Use Applicaion configuration module to register a new module
    ApplicationConfiguration.registerModule('app.admin',[]);


})();
},{}],3:[function(require,module,exports){
/**
 * Created by Shrikant on 5/15/2016.
 */
(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .config(appRoutes);
    appRoutes.$inject = ['$routeProvider', '$locationProvider'];

    function appRoutes($routeProvider, $locationProvider) {

        $routeProvider
            .when('/dashboard', {
                templateUrl: 'app/modules/dashboard/views/dashboard-student.html',
                controller: 'dashboard.controller'
            })
            .when('/dashboard/admin', {
                templateUrl: 'app/modules/dashboard/views/dashboard-admin.html',
                controller: 'dashboard.controller'
            })
            .otherwise({
                redirectTo: '/library'
            });
    }
})();
},{}],4:[function(require,module,exports){
/**
 * Created by Shrikant on 5/15/2016.
 */
(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('dashboard.controller', dashboard_controller);

    dashboard_controller.$inject = ['$scope','$mdMedia'];
    function dashboard_controller($scope,$mdMedia) {

        activate();

        ////////////////

        function activate() {

            $scope.increment = function() {
                var newDate = new Date(+$scope.currentDate);

                if($scope.IsMonth)
                    newDate.setMonth(newDate.getMonth() + 1);
                else if($scope.IsWeek)
                    newDate.setDate(newDate.getDate() + 7);
                else
                    newDate.setDate(newDate.getDate() + 1);

                $scope.currentDate = newDate;
            };

            $scope.decrement = function() {
                var newDate = new Date(+$scope.currentDate);

                if($scope.IsMonth)
                    newDate.setMonth(newDate.getMonth() - 1);
                else if($scope.IsWeek)
                    newDate.setDate(newDate.getDate() - 7);
                else
                    newDate.setDate(newDate.getDate() - 1);

                $scope.currentDate = newDate;
            };

            $scope.setdate = function(newdate) {
                $scope.currentDate = newdate;
            };
            $scope.IsMonth=true;
            $scope.currentDate= new Date();

            $scope.show = function(size){
                if($mdMedia(size))
                {
                    $scope.IsDay=true;
                    $scope.IsMonth=false;
                    $scope.IsWeek=false;
                }
                return $mdMedia(size);
            };

            $scope.weeks = [
                {
                    name:"SUN",
                    number:1,
                    days:[
                        1,
                        8,
                        15,
                        22,
                        29,
                        36
                    ]
                },
                {
                    name:"MON",
                    number:2,
                    days:[
                        2,
                        9,
                        16,
                        23,
                        30,
                        37
                    ]
                },
                {
                    name:"TUE",
                    number:3,
                    days:[
                        3,
                        10,
                        17,
                        24,
                        31,
                        38
                    ]
                },
                {
                    name:"WED",
                    number:4,
                    days:[
                        4,
                        11,
                        18,
                        25,
                        32,
                        39
                    ]
                },
                {
                    name:"THU",
                    number:5,
                    days:[
                        5,
                        12,
                        19,
                        26,
                        33,
                        40
                    ]
                },
                {
                    name:"FRI",
                    number:6,
                    days:[
                        6,
                        13,
                        20,
                        27,
                        34,
                        41
                    ]
                },
                {
                    name:"SAT",
                    number:7,
                    days:[
                        7,
                        14,
                        21,
                        28,
                        35,
                        42
                    ]
                }
            ]


            $scope.calView=function(id){
                $scope.IsMonth=false;
                $scope.IsWeek=false;
                $scope.IsDay=false;
                switch(id){
                    case 0:
                        $scope.IsMonth=true;
                        break;
                    case 1:
                        $scope.IsWeek=true;
                        break;
                    case 2:
                        $scope.IsDay=true;
                        break;
                }
            };


            $scope.getDay=function(id){

                var item ={}
                var daysInMonth = new Date($scope.currentDate.getFullYear(), $scope.currentDate.getMonth()+1, 0).getDate();
                var dayOffset = id - new Date($scope.currentDate.getFullYear(), $scope.currentDate.getMonth(), 1).getDay();
                if(dayOffset<=daysInMonth && (dayOffset)> 0)
                {
                    item.day = dayOffset;
                }
                else
                    item.day = "";

                item.task1="Urgent Meeting...";
                item.task2="Physics leture";
                item.task3="Chemestry";
                return item;
            };

            $scope.getDate=function(){
                var item ={}
                item.monthyear=$scope.currentDate.toLocaleString("en-us", { month: "long"})+" "+
                $scope.currentDate.getFullYear();
                return item;
            };


            $scope.getDateForWeek=function(counter)
            {
                return new Date($scope.currentDate.getFullYear(),$scope.currentDate.getMonth(),$scope.currentDate.getDate()+counter).getDate()+
                    " "+new Date($scope.currentDate.getFullYear(),$scope.currentDate.getMonth(),$scope.currentDate.getDate()+counter).toLocaleString("en-us", { weekday: "short" }).toUpperCase();;
            };
        }
    }
})();
},{}],5:[function(require,module,exports){
/**
 * Created by Shrikant on 12/16/2016.
 */

(function() {
    'use strict';

    // Use Applicaion configuration module to register a new module
    ApplicationConfiguration.registerModule('app.dashboard',[]);

    angular
        .module('app.dashboard').config(['$httpProvider', function($httpProvider) {

        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.withCredentials = false;
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
        //$httpProvider.defaults.headers.common["Accept"] = "application/json";
        //$httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    }
    ]);

})();
},{}],6:[function(require,module,exports){
/**
 * Created by Shrikant on 12/16/2016.
 */

},{}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
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
},{}],10:[function(require,module,exports){
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
},{}],11:[function(require,module,exports){
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
},{}],12:[function(require,module,exports){
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





},{}],13:[function(require,module,exports){
/**
 * Created by Shrikant on 5/2/2016.
 */

(function() {
    'use strict';

    // Use Applicaion configuration module to register a new module
    ApplicationConfiguration.registerModule('app.library',[]);

    angular
        .module('app.library').config(['$httpProvider', function($httpProvider) {

        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.withCredentials = false;
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
        //$httpProvider.defaults.headers.common["Accept"] = "application/json";
        //$httpProvider.defaults.headers.common["Content-Type"] = "application/json";
        }
    ]);

})();
},{}],14:[function(require,module,exports){
/**
 * Created by Shrikant on 5/3/2016.
 */
(function() {
    'use strict';

    angular
        .module('app.login')
        .config(appRoutes);
    appRoutes.$inject = ['$routeProvider', '$locationProvider'];

    function appRoutes($routeProvider, $locationProvider) {

        $routeProvider
            .when('/login', {
                templateUrl: 'app/modules/login/views/login.html',
                controller: 'login.controller',
                //resolve: {
                //    // I will cause a 1 second delay
                //    delay: function($q, $timeout) {
                //        var delay = $q.defer();
                //        $timeout(delay.resolve, 1000);
                //        return delay.promise;
                //    }
                //}
            })
            .when('/register', {
                templateUrl: 'app/modules/login/views/register.html',
                controller: 'login.controller',
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        return delay.promise;
                    }
                }
            })
            .when('/change-password', {
                templateUrl: 'app/modules/login/views/change-password.html',
                controller: 'login.controller',
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        return delay.promise;
                    }
                }
            })
            .when('/forgot-password', {
                templateUrl: 'app/modules/login/views/forgot-password.html',
                controller: 'login.controller',
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        return delay.promise;
                    }
                }
            });

        // configure html5 to get links working on jsfiddle
        //$locationProvider.html5Mode(true);
    }
})();
},{}],15:[function(require,module,exports){
/**
 * Created by Shrikant on 5/2/2016.
 */
(function() {
    'use strict';

    angular
        .module('app.login')
        .controller('login.controller', login_controller);

    login_controller.$inject = ['$scope','api','login_factory','$mdToast','$location','$cookies'];
    function login_controller($scope,api,login_factory,$mdToast,$location,$cookies) {

        // Retrieving a cookie
        //var favoriteCookie = $cookies.get('myFavorite');
        //// Setting a cookie
        //$cookies.put('myFavorite', 'oatmeal');


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


            //$scope.users = [
            //    {
            //        'name': 'Shrikant Gond',
            //        'email': 'shrikantgond@gmail.com',
            //        'password': 'shrikant',
            //        'new_password': ''
            //    },
            //    {
            //        'name': 'Avinash Gond',
            //        'email': 'avinashgond@gmail.com',
            //        'password': 'avinash',
            //        'new_password': ''
            //    },
            //    {
            //        'name': 'Test',
            //        'email': 'test@gmail.com',
            //        'password': 'test',
            //        'new_password': ''
            //    },
            //    {
            //        'name': 'Test 1',
            //        'email': 'test1@gmail.com',
            //        'password': 'test1',
            //        'new_password': ''
            //    }
            //];

            $scope.demo = function(){

                var data = {
                    "M": {
                        "IsActive": false,
                        "Name" : "newLib"
                    },
                    "V": 1.1,
                    "Pg": 0,
                    "Mx": 2,
                    "And": [
                        "Location"
                    ],
                    "Or": [
                        "Name",
                        "IsActive"
                    ],
                    "Also":"LibraryBooks",
                    "Asc":true,
                    "Sort" : "ID"
                };

                api.get($scope.email,data).then(function(response) {
                    if(response.status===200)
                    {
                        $scope.showSimpleToast('Author added.'+response.data);
                        $location.path('/login');
                    }
                });
            };

            $scope.register_user = function(){

                api.register_user($scope.email,$scope.password).then(function(response) {
                    if(response.data.StatusCode===200)
                    {
                        $scope.showSimpleToast('Author added.');
                        $location.path('/login');
                    }
                });
            };

            $scope.login_user = function(){

                var token = $cookies.get('token');

                if(token==null || token==undefined){
                    login_factory.login_user($scope.email,$scope.password).then(function(response) {
                        if(response.status===202 && response.data!=null)
                        {
                            $cookies.put('token', response.data);
                            $location.path('/library');
                        }
                        else {
                            $cookies.remove('token');
                            $location.path('/Login');
                        }
                    });
                }
                else {
                    $location.path('/library');
                    $scope.loggedin=true;
                }
            };

        }
    }
})();
},{}],16:[function(require,module,exports){
/**
 * Created by Shrikant on 5/10/2016.
 */

(function(){

    var app = angular.module('app.login');

    var API_Base="http://localhost:18123/"

    app.factory('login_factory', ['$http','api', function($http,api) {

        $http.defaults.headers.put = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
        };

        var get_users = function(){
            return $http.get(API_Base+'api/user/users'); // this will return a promise to controller
        };


        var register_user = function(email,password){
            var req = {
                method: 'POST',
                crossOrigin: true,
                url: API_Base+'adduser',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    "ID": 1,
                    "Name": email,
                    "Password": password,
                    "UserName": email,
                    "IsActive": true, "CreatedDate": "2016-06-07", "ModifiedDate": "2016-06-07", "CreatedBy": 2, "ModifiedBy": 2
                }
            }
            return $http(req); // this will return a promise to controller
        };

        var login_user = function(email,password){
            //return $http.get(API_Base+'api/user/login/'+email+'/'+password); // this will return a promise to controller
            var req = {
                method: 'POST',
                crossOrigin: true,
                url: API_Base+'Library/get',
                headers: {
                    'Content-Type': 'application/json',
                    'username' : 'admin',
                    'password' : 'admin'
                    //'token':'VjBzSVE1QXlxczhYc0trZ0RTZkVBVDBJZUNQRGNHVjQycEdad29VVHlLQT06Mjo2MzYxNjU5MjY1ODgzNDMzMjg='
                },
                data: {
                    "M": {
                    }
                }
            }
            //return $http(req); // this will return a promise to controller
            return api.login(email,password);
        };

        var delete_user = function(id){
            return $http.get(API_Base+'deleteuser/'+id); // this will return a promise to controller
        };


        return {
            register_user:  register_user,
            login_user: login_user,
            delete_user: delete_user,
            get_users:get_users

        }
    }]);

}());


},{}],17:[function(require,module,exports){
/**
 * Created by Shrikant on 5/2/2016.
 */
var module_name = 'app.login';
// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule(module_name,[]);
},{}],18:[function(require,module,exports){
/**
 * Created by Shrikant on 5/15/2016.
 */
(function() {
    'use strict';

    angular
        .module('app.user')
        .config(appRoutes);
    appRoutes.$inject = ['$routeProvider', '$locationProvider'];

    function appRoutes($routeProvider, $locationProvider) {

        $routeProvider
            .when('/user', {
                templateUrl: 'app/modules/user/views/user-add.html',
                controller: 'user.controller'
            })
            .when('/users', {
                templateUrl: 'app/modules/user/views/user-list.html',
                controller: 'user.controller'
            })
            .when('/module', {
                templateUrl: 'app/modules/user/views/module-add.html',
                controller: 'user.controller'
            })
            .when('/modules', {
                templateUrl: 'app/modules/user/views/module-list.html',
                controller: 'user.controller'
            })
            .when('/module-subscription-type', {
                templateUrl: 'app/modules/user/views/module-subscription-type-add.html',
                controller: 'user.controller'
            })
            .when('/module-subscription', {
                templateUrl: 'app/modules/user/views/module-subscription-add.html',
                controller: 'user.controller'
            })
            .when('/subject-location', {
                templateUrl: 'app/modules/user/views/subject-location-add.html',
                controller: 'user.controller'
            })
            .when('/subject-locations', {
                templateUrl: 'app/modules/user/views/subject-location-list.html',
                controller: 'user.controller'
            });

        // configure html5 to get links working on jsfiddle
        //$locationProvider.html5Mode(true);
    }
})();
},{}],19:[function(require,module,exports){
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
},{}],20:[function(require,module,exports){
/**
 * Created by Shrikant on 5/2/2016.
 */

(function() {
    'use strict';

    // Use Applicaion configuration module to register a new module
    ApplicationConfiguration.registerModule('app.user',[]);


})();
},{}],21:[function(require,module,exports){
/**
 * Created by Shrikant on 5/22/2016.
 */
/**
 * Created by Shrikant on 5/12/2016.
 */
//(function() {
//    'use strict';
//
//    angular
//        .module('app')
//        .directive('dashboard', function() {
//
//            //define the directive object
//            var directive = {};
//            //restrict = E, signifies that directive is Element directive
//            directive.restrict = 'E';
//
//            //template replaces the complete element with its text.
//            directive.template = '' +
//                '<md-card style="max-width: 250px;" flex-wrap>'+
//
//                '<md-button class="md-button md-primary" ng-disabled style="height: 100%;'+
//                'background-color:#00b3e2; width: 100%;min-height: 100px; margin:0px;padding: 0px;" aria-label="Comment">'+
//                '<div style="padding: 20px;" layout="row" layout-align="space between">'+
//                '<i class="icon ion-android-bus" style="color: rgba(224, 224, 224, 0.53);'+
//                'font-size: 60px;" ></i>'+
//                '<div layout="column" layout-align="start end">'+
//                '<label style="font-family: "roboto light"; color:white;font-weight: 100;' +
//                'font-size: xx-large;">{{notification.count}}</label>'+
//                '<label style="color:white;font-weight: 100;margin-top: 10px; font-size: small;">{{button.title}}</label>'+
//                '</div>'+
//                '</div>'+
//                '</md-button>'+
//
//                '</md-card>';
//
//            //scope is used to distinguish each student element based on criteria.
//            directive.scope = {
//                notification : "=count",
//                css : "=class",
//                button : "=title"
//            }
//
//            //compile is called during application initialization. AngularJS calls
//            //it once when html page is loaded.
//
//            //directive.compile = function(element, attributes) {
//            //    element.css("border", "1px solid #cccccc");
//            //
//            //    //linkFunction is linked with each element with scope to get the
//            //    //element specific data.
//            //        var linkFunction = function($scope, element, attributes) {
//            //        element.html("Student: <b>"+$scope.student.name +"</b> , Roll No:
//            //            <b>"+$scope.student.rollno+"</b><br/>");
//            //        element.css("background-color", "#ff00ff");
//            //    }
//            //    return linkFunction;
//            //}
//            return directive;
//
//        });
//
//});
},{}],22:[function(require,module,exports){
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

},{}],23:[function(require,module,exports){
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

},{}],24:[function(require,module,exports){
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

},{}],25:[function(require,module,exports){
/**
 * Created by Shrikant on 5/25/2016.
 */
(function(){

    var app = angular.module('app');

    var API_Base=ApplicationConfiguration.APIURL; //"http://localhost/"

    app.factory('api', ['$http','$cookies', function($http,$cookies){

        $http.defaults.headers.put = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
        };

        var get = function(module,postData){
            var token = $cookies.get('token');

            var req = {
                //cache: true,
                method: 'POST',
                crossOrigin: true,
                url: API_Base+module+'/get',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                },
                data: postData
            }
            return $http(req); // this will return a promise to controller
        };

        var save = function(module,postData){
            var token = $cookies.get('token');

            var req = {
                method: 'POST',
                crossOrigin: true,
                url: API_Base+module+'/save',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                },
                data: postData
            }
            return $http(req); // this will return a promise to controller
        };

        var del = function(module,postData){
            var token = $cookies.get('token');

            var req = {
                method: 'POST',
                crossOrigin: true,
                url: API_Base+module+'/delete',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                },
                data: postData
            }
            return $http(req); // this will return a promise to controller
        };

        var login = function(username,password){
            var req = {
                method: 'POST',
                crossOrigin: true,
                url: API_Base+'Library/get',
                headers: {
                    'Content-Type': 'application/json',
                    'username' : username,
                    'password' : password
                },
                data: {
                    "M": {
                    }
                }
            }

            return $http(req);
        };

        return {
            get:  get,
            save:  save,
            del:  del,
            login: login
        }

    }]);

}());

},{}],26:[function(require,module,exports){
/**
 * Created by Shrikant on 5/25/2016.
 */

angular
    .module('app')
    .factory('breadcrumb_factory', ['$rootScope', '$location', function($rootScope, $location){

        var breadcrumbs = [];
        var breadcrumbsService = {};

        var pathElements = $location.path().split('/'), result = [], i;
        var breadcrumbPath = function (index) {
            return '/' + (pathElements.slice(0, index + 1)).join('/');
        };

        pathElements.shift();
        for (i=0; i<pathElements.length; i++) {
            result.push({name: pathElements[i], path: breadcrumbPath(i)});
        }

        breadcrumbs = result;

        //we want to update breadcrumbs only when a route is actually changed
        //as $location.path() will get updated imediatelly (even if route change fails!)
        $rootScope.$on('$routeChangeSuccess', function(event, current){

            var pathElements = $location.path().split('/'), result = [], i;
            var breadcrumbPath = function (index) {
                return '/' + (pathElements.slice(0, index + 1)).join('/');
            };

            pathElements.shift();
            for (i=0; i<pathElements.length; i++) {
                result.push({name: pathElements[i], path: breadcrumbPath(i)});
            }

            breadcrumbs = result;
        });

        breadcrumbsService.getAll = function() {
            return breadcrumbs;
        };

        breadcrumbsService.getFirst = function() {
            return breadcrumbs[0] || {};
        };

        return breadcrumbsService;
    }]);

},{}],27:[function(require,module,exports){

/**
 * Created by Shrikant on 5/2/2016.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('nav.controller', nav_controller);

    nav_controller.$inject = ['$scope','$timeout', '$mdSidenav','breadcrumb_factory','$mdToast','$location','$cookies'];

    function nav_controller ($scope, $timeout, $mdSidenav,breadcrumb_factory,$mdToast,$location,$cookies) {

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



            $scope.$on('$routeChangeSuccess', function(event, current){

                $scope.breadcrumbs=breadcrumb_factory.getAll();

                var token = $cookies.get('token');
                if(token==null || token==undefined) {

                    $scope.loggedin=false;
                    $scope.showSimpleToast('login required.');
                    $location.path('/login');
                }
                else {
                    $scope.token=token;
                    $scope.loggedin=true;
                }
            });

            $scope.breadcrumbs=breadcrumb_factory.getAll();
            $scope.breadcrumb=breadcrumb_factory.getFirst();

            $scope.toggleLeft = buildDelayedToggler('left');
            $scope.toggleRight = buildToggler('right');
            $scope.isOpenRight = function(){
                return $mdSidenav('right').isOpen();
            };

            //function to add bounce effect to the slide animate of side navigation panels
            function debounce(func, wait, context) {
                var timer;
                return function debounced() {
                    var context = $scope,
                        args = Array.prototype.slice.call(arguments);
                    $timeout.cancel(timer);
                    timer = $timeout(function() {
                        timer = undefined;
                        func.apply(context, args);
                    }, wait || 10);
                };
            }

            //function to add 200 millli-seconds delay to debonce function of the slide animate of side navigation panels
            function buildDelayedToggler(navID) {
                return debounce(function() {
                    $mdSidenav(navID)
                        .toggle()
                }, 200);
            }

            //function to toggle side navigation panels
            function buildToggler(navID) {
                return function() {
                    $mdSidenav(navID)
                        .toggle()
                }
            }


            $scope.admin_menu=[
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

            $scope.mgmt_menu=[
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

            $scope.groups = [];
            for (var i=0; i<10; i++) {
                $scope.groups[i] = {
                    name: i,
                    items: []
                };
                for (var j=0; j<3; j++) {
                    $scope.groups[i].items.push(i + '-' + j);
                }
            }

            /*
             * if given group is the selected group, deselect it
             * else, select the given group
             */
            $scope.toggleGroup = function(group) {
                if ($scope.isGroupShown(group)) {
                    $scope.shownGroup = null;
                } else {
                    $scope.shownGroup = group;
                }
            };
            $scope.isGroupShown = function(group) {
                return $scope.shownGroup === group;
            };


            $scope.logout = function(){
                $cookies.remove('token');
                $scope.showSimpleToast('logout success.');
                $location.path('/login');
                $scope.loggedin=false;
            };

        }
    }
})();

},{}]},{},[1,25,26,21,22,23,24,27,2,5,13,17,20,6,12,16,4,8,9,10,11,15,19,3,7,14,18]);
