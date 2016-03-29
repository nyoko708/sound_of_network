(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .directive('acmeSidebar', acmeSidebar);

  /** @ngInject */
  function acmeSidebar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/sidebar/sidebar.html',
      scope: {
          creationDate: '='
      },
      controller: SidebarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SidebarController($scope, $location, authentication) {

      // 変数初期化
      $scope.user = {};

      // token取得
      var token = localStorage.getItem('id_token');

      // ログインしていたら
      var userInfo = null;
      var isLogin = function() {
        userInfo = authentication.getUserInfo();
        console.log(userInfo);
        $scope.user.name = userInfo.name;
        $scope.user.image = userInfo.image_file_name;
      }

      // ログインしていなかったら
      var notLogin = function() {
        $location.path("/");
      }

      // ログインしているか確認
      authentication.checkLogin(token, isLogin, notLogin);

      $scope.logout = function() {
        authentication.logout();
      }
    }
  }

})();
