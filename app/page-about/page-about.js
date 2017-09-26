'use strict';

angular.module('myApp.pageAbout', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'page-about/page-about.html',
    controller: 'PageAboutCtrl'
  });
}])

.controller('PageAboutCtrl', [function() {

}]);