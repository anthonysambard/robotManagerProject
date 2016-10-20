'use strict';

angular.module('robot.manager')
    .factory('Step', ['Hand', function(Hand){
        function Step(previousStep){
            if(previousStep){
                console.log('previousStep.stepIndex = ' + previousStep.stepIndex);
                this.stepIndex = previousStep.stepIndex + 1;
                this.hand = angular.copy(previousStep.hand, this.hand);
            } else {
                console.log('aucun step précédent');
                this.stepIndex = 1;
                this.hand = new Hand();
            }
        }

        return function(previousStep){
            return new Step(previousStep);
        }
    }]);