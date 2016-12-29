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