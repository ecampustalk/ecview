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