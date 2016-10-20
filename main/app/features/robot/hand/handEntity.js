'use strict';

angular.module('robot.manager')
.factory('Hand', [function(){
    function Hand(red, green, blue){
        this.thumb = 180;
        this.ringfinger = 180;
        this.auricular = 180;
        this.index = 180;
        this.major = 180;
        this.rColor = red ? red : 0;
        this.gColor = green ? green : 0;
        this.bColor = blue ? blue : 0;
    }

    return function(red,green,blue){
        return new Hand(red,green,blue);
    };
}]);