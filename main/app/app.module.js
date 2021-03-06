'use strict';

angular.module('robot.manager', [
    'itesoft',
    'ngRoute',
    'ngSanitize',
    'pascalprecht.translate',
    'ui.bootstrap.dropdown',
    'localStorage.services',
    'ui.hand',
    'ui.step'
    ])
    .config(['ItesoftStorageServiceProvider',
        function(ItesoftStorageServiceProvider){
            console.log('Initialisation de la config');
            ItesoftStorageServiceProvider.defaultKey = 'ROBOT_MANAGER';
        }])
    .config(['$translateProvider', '$translatePartialLoaderProvider', function ($translateProvider, $translatePartialLoaderProvider) {
        // Declare languages mapping
        $translateProvider.registerAvailableLanguageKeys(['en', 'fr', 'de'], {
            'en_US': 'en',
            'en_GB': 'en',
            'fr_FR': 'fr',
            'fr-CA': 'fr',
            'de-DE': 'de'
        }).determinePreferredLanguage();

        // Use partial loader
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: 'assets/locale/{lang}/{part}-{lang}.json'
        });

        $translateProvider.useSanitizeValueStrategy();
    }])
    .run(['$rootScope', '$route', function ($rootScope, $route) {
        $rootScope.$on('$routeChangeSuccess', function () {
            $rootScope.pageTitle = $route.current.title;
        });
    }]);

