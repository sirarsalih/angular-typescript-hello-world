///<reference path="../../scripts/jquery.d.ts"/>
///<reference path="../../scripts/angular.d.ts"/>
///<reference path="../mainFeature/mainCtrl.ts"/>
///<reference path="../mainFeature/mainSvc.ts"/>
///<reference path="../mainFeature/mainDirective.ts"/>

var myApp = angular.module("myApp", []);

myApp.controller("MainCtrl", ["$scope", "MainSvc", ($scope, MainSvc)
    => new MainFeature.MainCtrl($scope, MainSvc)]);

myApp.factory("MainSvc", ()
    => new MainFeature.MainSvc());

myApp.directive("mainDirective", ()
    => new MainFeature.MainDirective());