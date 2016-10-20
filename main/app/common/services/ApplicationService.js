'use strict';

angular.module('robot.manager').service('ApplicationService', ['ItesoftStorageService', 'Application',
    function(ItesoftStorageService, Application){

    function loadLocal(){
        var application = ItesoftStorageService.load();
        return application ? application : new Application();
    }

    return {
        load : loadLocal,
        save : ItesoftStorageService.save
    }
}]);