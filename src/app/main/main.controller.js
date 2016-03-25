(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $location, $http, authentication, apihost) {

    var vm = this;

    $scope.go = function ( path ) {
        $location.path( path );
    };

    // token 取得
    // login 確認
    var token = localStorage.getItem('id_token');
    if(token != '') {
      authentication.checkLogin(token, isLogin, notLogin);
    }

    vm.users = [];

    activate();

    function activate() {
      getUserList();
    }

    /**
     * ログインしてたら
     */
    function isLogin() {
      $location.path("/mypage");
    }

    /**
     * ログインしていなかったら
     */
    function notLogin() {
    }

    function getUserList() {
      // 自分が参加しているプロジェクト取得
      var api = 'http://' + apihost + '/api/user';
      $http.get(api,
          {headers: {
                      'Content-Type' : 'application/json; charset=UTF-8'
                    }})
      .success(function(data) {
        vm.users = data.profiles;
      })
      .error(function(data, status) {
      });
    }
  }
})();
