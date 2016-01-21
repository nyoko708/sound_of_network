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
    function SidebarController(authentication) {
      // token取得
      var token = localStorage.getItem('id_token');

      // ログインしていたら
      var userInfo = null;
      var loginSuccess = function() {
        userInfo = authentication.getUserInfo();
        //alert("こんにちは、" + userInfo.name)
      }

      // ログインしているか確認
      authentication.checkLogin(token, loginSuccess);
    }
  }

})();
