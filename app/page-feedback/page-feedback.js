'use strict';

angular.module('myApp.pageFeedback', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/feedback', {
            templateUrl: 'page-feedback/page-feedback.html',
            controller: 'PageFeedbackCtrl'
        });
    }])

    .controller('PageFeedbackCtrl', ['$scope', '$http', function($scope) {

        $scope.hello = function hello() {
            console.log('hello ' + $scope.name);
        };
        $scope.name = 'John Connor';
        $scope.greeting = 'hi guest';
        $scope.transformedText = function transformedText() {
            return 'it was really ' + $scope.name;
        }

    }]);