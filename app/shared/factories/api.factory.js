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
