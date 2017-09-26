'use strict';

angular.module('myApp.pageFeedback', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/feedback', {
            templateUrl: 'page-feedback/page-feedback.html',
            controller: 'PageFeedbackCtrl'
        });
    }])

    .controller('PageFeedbackCtrl', [function() {

    }]);