var app = angular.module('ionicApp', ['ionic', 'leaflet-directive']);

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

var MapController = app.controller('MapController', ['$scope', function($scope) {
    angular.extend($scope, {
        mapCenter : {
            lat : 52.407,
            lng : 16.934,
            zoom : 15
        },
        defaults: {
            tileLayer: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
            zoomControlPosition: 'topright',
        }
    });
}]);
              