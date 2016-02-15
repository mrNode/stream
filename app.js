// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    
    cordova.exec(function (success){ },  function (error){}, "CDVStreamManager", "askPermissionMedia", []);
    
    // start server
    cordova.exec(function (s1){
      // stream
      cordova.exec(function (s2){ }, function (e2){ }, "CDVStreamManager", "openStreamController", []);                                  
    }, function (er2){ }, "CDVStreamManager", "startServer", [])
  });
});
