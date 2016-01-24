/**
 * Created by Margo on 31/07/15.
 */
var app = angular.module("echoApp");

app.directive("navbarDirective", function(){
    return{
        restrict: "E",
        templateUrl: "partials/navbar.html",
        link: function(){

        },
        controller: function($scope, $location, $anchorScroll, $modal){
            $scope.links = ['gis', 'seabedMapping', 'otherServices','equipment', 'welcome'];
            $scope.jumpToLocation = function(key){
                console.log('Jumpiong to '+key)
                $location.hash(key);
                $anchorScroll();
            };

            $scope.contactModal = function () {

                 $modal.open({
                    animation: true,
                    templateUrl: 'partials/contact-modal.html',
                    size: 'lg',
                    controller: 'ContactController'
                });
            }
        }
    }
});