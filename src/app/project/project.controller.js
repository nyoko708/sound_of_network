(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .controller('ProjectController', ProjectController);

  /** @ngInject */
  function ProjectController() {
    var vm = this;

    vm.awesomeThings = [];

    activate();

    function activate() {
    }

  }
})();
