(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .controller('SettingController', SettingController);

  /** @ngInject */
  function SettingController() {
    var vm = this;

    vm.awesomeThings = [];

    activate();

    function activate() {
    }

  }
})();
