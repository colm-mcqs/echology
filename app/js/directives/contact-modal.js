/**
 * Created by Colm on 15/08/15.
 */
var app = angular.module("echoApp");

app.directive("contactModalDirective", function() {
    return {
        restrict: "E",
        scope:{
            email : email
        },
        templateUrl: "partials/contact-modal.html",
        link: function () {

        }
    }
});