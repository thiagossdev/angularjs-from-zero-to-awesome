angular.module('minmax', [])
    .controller('MinMaxCtrl', function($scope) {
        $scope.formData = {};

        $scope.onSubmit = function () {
            console.log("Hey i'm submitted!");
            console.log($scope.formData);
        };
    });