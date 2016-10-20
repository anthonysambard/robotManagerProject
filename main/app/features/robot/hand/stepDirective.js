'use strict';

angular.module('ui.step', [])
.directive('stepUi', [function(){
    return {
        restrict:'EA',
        transclude:true,
        scope: {
            step:'='
        },
        templateUrl:'app/features/robot/hand/step.html',
        controller : ['$scope', function($scope){
        }]
    }
}]);