angular.module('minmax', [])
    .controller('MinMaxCtrl', function($scope, $http) {
        $scope.formData = {};

        $scope.onSubmit = function () {
            console.log("Hey i'm submitted!");
            console.log($scope.formData);

            $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).
                success(function (data) {
                    console.log(':)');
                }).error(function (data) {
                    console.log(':(');
                });
        };
    });

// https://minmax-server.herokuapp.com/register/'