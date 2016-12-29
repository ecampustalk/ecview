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