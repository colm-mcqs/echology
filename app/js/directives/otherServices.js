/**
 * Created by Margo on 31/07/15.
 */
var app = angular.module("echoApp");

app.directive("otherServicesDirective", function(){
    return{
        restrict: "E",
        templateUrl: "partials/other-services.html",
        link: function(){

        }
    }
});