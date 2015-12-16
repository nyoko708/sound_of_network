(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .controller('MyPageController', MyPageController);

  /** @ngInject */
  function MyPageController() {
    var vm = this;

    vm.awesomeThings = [];

    activate();

    function activate() {
    }

  }
})();
