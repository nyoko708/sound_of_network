(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($scope, $location, authentication) {
    var vm = this;

    var successLogin = function() {

    };

    var successCreate = function(user) {
      authentication.login(user.email, user.password, function() {
        $location.path('/mypage');
      },
      function() {
        $location.path('/login');
      });
    };

    var errorCreate = function() {
      alert("ユーザーの作成に失敗しました");
    };

    $scope.create = function(user) {
      authentication.create(user.name, user.email, user.password, successCreate(user), errorCreate);
    };

    activate();

    function activate() {
    }
  }
})();
