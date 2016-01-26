(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($scope, $location, authentication) {
    var vm = this;

    $scope.user = {};

    var successLogin = function() {
      $location.path("/mypage");
    };

    var errorLogin = function() {
    };

    var successCreate = function(user) {
      authentication.login(user.email, user.password, successLogin, errorLogin);
    };

    var errorCreate = function() {
    };

    /**
     * 新規にユーザーを作る
     */
    $scope.create = function(user) {
      authentication.create(user.name, user.email, user.password, successCreate, errorCreate);
    };

  }
})();
