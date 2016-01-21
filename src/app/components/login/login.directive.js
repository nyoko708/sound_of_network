(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .directive('acmeLogin', acmeLogin);

  /** @ngInject */
  function acmeLogin() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/login/login.html',
      scope: {
          creationDate: '='
      },
      controller: LoginController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function LoginController($scope, $location, authentication) {

      // ログイン処理
      $scope.login = function (user) {
        authentication.login(user.email, user.password, loginSuccess, loginError);
        console.log(localStorage.getItem('id_token'));
      }

      // ログイン成功時の処理
      var loginSuccess = function() {
        $location.path('/mypage');
      }

      // ログイン失敗時の処理
      var loginError = function() {
        alert("ログイン認証に失敗しました");
      }
    }
  }

})();
