/**
 * Created by asa on 19/10/2016.
 */
'use strict';

angular.module('robot.manager').controller('ApiConfigCtrl', ['$scope', 'ApplicationService',
    function($scope, ApplicationService){
    //nécessaire de passer les variables dans le scope pour y accéder dans la vue
        $scope.applicationService = ApplicationService;
        $scope.application = $scope.applicationService.load();
}]);