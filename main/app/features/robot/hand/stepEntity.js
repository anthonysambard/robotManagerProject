'use strict';

angular.module('robot.manager')
    .factory('Step', ['Hand', function(Hand){
        function Step(previousStep){
            if(previousStep){
                this.stepIndex = previousStep.stepIndex + 1;
                this.hand = angular.copy(previousStep.hand, this.hand);
            } else {
                this.stepIndex = 1;
                this.hand = new Hand();
            }
        }

        return function(previousStep){
            return new Step(previousStep);
        }
    }]);