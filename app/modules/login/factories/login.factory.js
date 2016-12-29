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

