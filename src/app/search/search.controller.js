(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .controller('SearchController', SearchController);

  /** @ngInject */
  function SearchController() {
    var vm = this;

    vm.awesomeThings = [];

    activate();

    function activate() {
    }

  }
})();
