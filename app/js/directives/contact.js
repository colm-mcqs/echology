/**
 * Created by Colm on 15/08/15.
 */
var app = angular.module("echoApp");

app.directive("contactDirective", function() {
    return {
        restrict: "E",
        templateUrl: "partials/contact.html",
        link: function () {

        },
        controller: function ($scope, $modal) {
            $scope.contactModal = function () {
                $modal.open({
                    animation: true,
                    templateUrl: 'partials/contact-modal.html',
                    size: 'lg',
                    controller: 'ContactController'
                });

                $scope.closeModal = function(){
                    $modal.close();
                }
            }
        }
    }
});