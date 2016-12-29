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
                //$scope.increment();
            };
            $scope.IsMonth=true;
            $scope.currentDate= new Date();
            $scope.year = $scope.currentDate.getFullYear();
            $scope.month = $scope.currentDate.toLocaleString("en-us", { month: "long" });



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

            //$scope.setDate=function(counter)
            //{
            //    var newDate = new Date(+$scope.currentDate);
            //    //newDate.setDate(newDate.getDate() + 1);
            //    //$scope.currentDate = newDate;
            //
            //    //$scope.currentDate= new Date($scope.expirationdate);
            //    if($scope.IsMonth)
            //        newDate.setDate(newDate.getDate() + 1);
            //    else if($scope.IsWeek)
            //        newDate.setDate(newDate.getDate() + 1);
            //    else
            //        newDate.setDate(newDate.getDate() + 1);
            //
            //    $scope.currentDate = newDate;
            //    $scope.year = $scope.currentDate.getFullYear();
            //    $scope.month =$scope.currentDate.toLocaleString("en-us", { month: "long" });
            //    $scope.dayNumber =$scope.currentDate.getDate();
            //};

            $scope.getDateForWeek=function(counter)
            {
                return new Date($scope.currentDate.getFullYear(),$scope.currentDate.getMonth(),$scope.currentDate.getDate()+counter).getDate()+
                    " "+new Date($scope.currentDate.getFullYear(),$scope.currentDate.getMonth(),$scope.currentDate.getDate()+counter).toLocaleString("en-us", { weekday: "short" }).toUpperCase();;
            };
        }
    }
})();