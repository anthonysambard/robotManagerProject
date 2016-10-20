'use strict';
angular.module('localStorage.services', [])
    .provider('ItesoftStorageService', [function(){

        var self = this;
        self.defaultKey = 'ROBOT_MANAGER';

        this.$get = function(){
            function _save(obj){
                if(obj)
                    localStorage.setItem(self.defaultKey, angular.toJson(obj));
            }

            function _load(){
                if(localStorage.getItem(self.defaultKey))
                    return angular.fromJson(localStorage.getItem(self.defaultKey));
                else
                    return [];
            }

            return {
                save : _save,
                load : _load
            }
        }
    }]);