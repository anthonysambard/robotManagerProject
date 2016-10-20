'use strict';

angular.module('robot.manager')
.service('RobotPlayerService', ['ApplicationService', '$http', function(ApplicationService, $http){
    function _playHand(hand){
        $http({
            method:'GET',
            url: ApplicationService.load().API.URL + '/fingers?',
            params:hand
        }).then(function(){
            console.log('HTTP SUCCESS');
        }, _error)
    }

    function _error(){
        console.log('HTTP ERROR');
    }

    return {
        //attention : si on ajoute les (), on souhaite avoir le résultat de la fonction
        playHand : _playHand
    }
}]);