angular.module('ionicApp', ['ionic'])
  
 .controller('AppCtrl', function($scope, $ionicSideMenuDelegate) {
    
    $scope.toggleLeftMenu = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };

    ionic.Platform.ready(function() {
        intel.xdk.device.hideSplashScreen();
    });

 });
              
              