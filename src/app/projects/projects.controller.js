(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .controller('ProjectsController', ProjectsController);

  /** @ngInject */
  function ProjectsController($scope, $location) {
    var vm = this;

    /**
     * 遷移
     */
    $scope.go = function ( path ) {
      $location.path( path );
    };

    /**
     * プロジェクトの作成
     */
    $scope.createProject = function( projectData ) {

    };

    activate();

    function activate() {
    }

  }
})();
