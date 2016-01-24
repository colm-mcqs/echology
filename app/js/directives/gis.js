/**
 * Created by Margo on 31/07/15.
 */
var app = angular.module("echoApp");

app.directive("gisDirective", function(){
    return{
        restrict: "E",
        templateUrl: "partials/gis.html",
        link: function(){

        }
    }
});