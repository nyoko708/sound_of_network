(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .controller('ProjectsController', ProjectsController);

  /** @ngInject */
  function ProjectsController($scope, $location) {
    var vm = this;

    $scope.go = function ( path ) {
      $location.path( path );
    };

    activate();

    function activate() {
    }

  }
})();
