
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
