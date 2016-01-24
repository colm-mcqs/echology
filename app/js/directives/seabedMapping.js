/**
 * Created by Margo on 31/07/15.
 */
var app = angular.module("echoApp");

app.directive("seabedMappingDirective", function(){
    return{
        restrict: "E",
        templateUrl: "partials/seabed-mapping.html",
        link: function(){

        }
    }
});