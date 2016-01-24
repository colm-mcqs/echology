'use strict';

// Declare app level module which depends on views, and components
angular.module('echoApp', [
  'ngRoute',
    'ui.bootstrap',
    'perfect_scrollbar',
    'duScroll',
    'duParallax'
]).
config(['$routeProvider', function($routeProvider, $locationProvider) {
        $routeProvider.otherwise({redirectTo: '/index.html'});
       // $locationProvider.html5Mode(true);

}])
    .controller('echoController', function($scope, $location, $anchorScroll, $modal, parallaxHelper){
        $scope.background = parallaxHelper.createAnimator(-0.3);
        $scope.links = ['gis', 'seabedMapping', 'otherServices','equipment', 'welcome'];
        $scope.jumpToLocation = function(key){
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
    })

.controller('ContactController', function($scope, $http){
        $scope.success = false;
        $scope.error = false;
        $scope.email={};
        $scope.sendEmail = function () {

            console.log('sending email');
            console.log($scope.email);
            $http.post('/sendMail', $scope.email).
                success(function (data) {
                    $scope.success = data.mail;
                    $scope.error = !data.mail;
                    $scope.user = {};
                }).
                error(function () {
                    $scope.error = true;
                });
        }
    })

.controller('ProjectModalController', function($scope, project){

        $scope.project_url = project.url;
        $scope.project_text = project.text;
        $scope.project_title= project.title;
})


.controller('LoginModalCtrl', function ($scope, $http) {

    this.cancel = $scope.$dismiss;

    this.submit = function (user, password) {
       $http.post('/api/authenticate',{user: user, password: password}).then(function (user) {
            $scope.$close(user);
        });
    };

});