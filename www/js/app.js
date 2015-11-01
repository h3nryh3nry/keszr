var app = angular.module('keszr', ['ionic', 'leaflet-directive']);

app.config(function($stateProvider, $urlRouterProvider) {
    // Allowed application states
    $stateProvider
        .state('index', {
            url : '/',
            templateUrl: 'templates/home.html'
        })
        .state('map', {
            url : '/map',
            templateUrl: 'templates/map.html'
        })
        .state('found', {
            url : '/found',
            templateUrl: 'templates/found.html'
        })
        .state('friends', {
            url : '/friends',
            templateUrl: 'templates/friends.html'
        })
        .state('go', {
            url : '/go',
            templateUrl: 'templates/go.html'
        })
        .state('settings', {
            url : '/settings',
            templateUrl: 'templates/settings.html'
        })
        .state('cache', {
            url : '/cache/:cacheId',
            templateUrl: 'templates/cache.html',
            controller: 'CacheController'
        });
    
    // When route does not match, go to '/'
    $urlRouterProvider.otherwise('/');
});

var AppCtrl = app.controller('AppCtrl', function($scope, $ionicSideMenuDelegate) {    
    $scope.toggleLeftMenu = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };

    ionic.Platform.ready(function() {
        intel.xdk.device.hideSplashScreen();
    });
});