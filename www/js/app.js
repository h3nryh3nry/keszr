angular.module('ionicApp', ['ionic'])
  
 .controller('AppCtrl', function($scope) {
    ionic.Platform.ready(function() {
        intel.xdk.device.hideSplashScreen();
    });

 });
              
              