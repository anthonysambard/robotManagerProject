'use strict';

angular.module('robot.manager')
    .controller('HandCtrl', ['$scope', 'Application', 'Step', 'RobotPlayerService',
        function($scope, Application, Step, RobotPlayerService){

        $scope.application = new Application();
        $scope.currentStep = new Step();
            $scope.robotPlayerService = RobotPlayerService;

        $scope.addCurrentStep = function(){
            $scope.application.playlist.push($scope.currentStep);
            $scope.currentStep = new Step($scope.currentStep);
        }

        $scope.startPlaylist = function(){
            angular.forEach($scope.application.playlist, function(stepToPlay){
                $scope.robotPlayerService.playHand(stepToPlay.hand);
            })
        };
}])
;