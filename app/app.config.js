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
