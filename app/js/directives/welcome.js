/**
 * Created by Margo on 31/07/15.
 */
var app = angular.module("echoApp");

app.directive("welcomeDirective", function(){
    return{
        restrict: "E",
        templateUrl: "partials/welcome.html",
        link: function(){

        },
        controller: function($scope, $modal, $http){
            $http.get('data/projects.json').then(function(data){
            $scope.projects = data.data;
                $scope.projectModal = function (project) {
                    $modal.open({
                        animation: true,
                        templateUrl: 'partials/project-modal.html',
                        size: 'lg',
                        controller: 'ProjectModalController',
                        resolve: {
                            project: function () {
                                return project;
                            }
                        }
                    });
                };
            });

            $http.get('data/visitedCountries.json'). then(function(countries){
                $scope.visitedCountries = countries.data;
                $scope.paper = Raphael('echologyMap');
                $scope.visitedColour="#045C99";
                $scope.map = getPaths($scope.paper, { fill: "#333", stroke: "#000", "stroke-width": .5, "stroke-linejoin": "round" });
                for (var countryCode in $scope.map) {
                    (function (countryPath, countryCode) {
                        if ($scope.visitedCountries[countryCode])
                        {
                            countryPath.attr({fill: $scope.visitedColour});
                        }
                        else {
                            // give paths some opacity look nice
                            countryPath.attr({opacity: 0.6});

                            // get random colour
                            colour = Raphael.getColor();
                        }
                    })($scope.map[countryCode], countryCode);
                }
            })
        }
    }
});