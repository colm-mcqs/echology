/**
 * Created by Margo on 31/07/15.
 */
var app = angular.module("echoApp");

app.directive("coverDirective", function(){
    return{
        restrict: "E",
        templateUrl: "partials/cover.html",
        link: function(){

        }
    }
});