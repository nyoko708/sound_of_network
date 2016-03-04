/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('apihost', 'ec2-52-192-180-200.ap-northeast-1.compute.amazonaws.com');

})();
