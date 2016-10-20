'use strict';

angular.module('robot.manager')
.factory('Hand', [function(){
    function Hand(){
        this.thumb = 180;
        this.ringfinger = 180;
        this.auricular = 180;
        this.index = 180;
        this.major = 180;
    }
    /*
    function Hand(lastHand){
        if(lastHand){
            this.thumb = lastHand.thumb;
            this.ringfinger = lastHand.ringfinger;
            this.auricular = lastHand.auricular;
            this.index = lastHand.index;
            this.major = lastHand.major;
        }
    }*/

    return function(){
        return new Hand();
    };
}]);