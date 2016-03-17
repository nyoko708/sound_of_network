(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .controller('RequestsController', RequestsController);

  /** @ngInject */
  function RequestsController($scope, $location, $http, apihost) {
    var vm = this;

    activate();

    function activate() {
    }

    /**
     * リクエストの作成
     */
    $scope.createRequest = function(request) {

    }
  }
})();
