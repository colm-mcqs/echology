/**
 * Created by Margo on 31/07/15.
 */
var app = angular.module("echoApp");

app.directive("equipmentDirective", function(){
    return{
        restrict: "E",
        templateUrl: "partials/equipment.html",
        link: function(){

        }
    }
});