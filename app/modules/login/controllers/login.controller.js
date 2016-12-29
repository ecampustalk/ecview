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