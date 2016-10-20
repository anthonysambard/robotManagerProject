'use strict';

angular.module('robot.manager')
    .controller('HandCtrl', ['$scope', 'Application', 'Step', 'RobotPlayerService', '$timeout', 'ApplicationService',
        function($scope, Application, Step, RobotPlayerService, $timeout, ApplicationService){

        $scope.application = new Application();
            $scope.currentStep = new Step();

            $scope.applicationService = ApplicationService;
            $scope.robotPlayerService = RobotPlayerService;

        $scope.addCurrentStep = function(){
            $scope.currentStep.hand.rColor = Math.floor(Math.random() * 255) + 1;
            $scope.currentStep.hand.gColor = Math.floor(Math.random() * 255) + 1;
            $scope.currentStep.hand.bColor = Math.floor(Math.random() * 255) + 1;

            $scope.application.playlist.push($scope.currentStep);
            $scope.currentStep = new Step($scope.currentStep);
        };

        $scope.startPlaylist = function(index){
            var i = index ? index : 0;
            console.log('Items in playlist : ' + $scope.application.playlist.length);
            $scope.robotPlayerService.playHand($scope.application.playlist[i].hand)
                .then(function(){
                    i++;
                    if(i < $scope.application.playlist.length){
                        $timeout(function(){
                            console.log('Wait for 2s before the ' + i + ' hand mouvements ...');
                            $scope.startPlaylist(i);
                        }, 2000);
                    }
                })
        };

        $scope.savePlaylist = function(){

        };

        $scope.cleanPlaylist = function(){
            $scope.application.playlist = [];
            $scope.currentStep = new Step();
        };
}])
;