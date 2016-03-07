/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('apihost', 'ec2-54-64-114-130.ap-northeast-1.compute.amazonaws.com');

})();
