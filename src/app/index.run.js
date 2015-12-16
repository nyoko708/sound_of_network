(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
