(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .factory('shareData', shareData);

  /** @ngInject */
  function shareData() {
    return { data: '' };
  }
})();
