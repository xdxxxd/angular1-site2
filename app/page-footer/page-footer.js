'use strict';

angular.module('myApp.pageFooter', [])
.component('pageFooter', {
    template: '<div>' +
    '<div>' +
    'Angular seed app: v<span app-version></span>' +
    '<p>All rights reserved &copy;</p>' +
    '</div>' +
    '</div>'
});
