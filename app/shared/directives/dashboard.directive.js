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