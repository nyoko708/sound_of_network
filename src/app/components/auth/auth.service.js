(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .factory('authentication', authentication);

  /** @ngInject */
  function authentication($http, $location) {

    /**
     * auth api host
     */
    var authApi = 'http://ec2-52-193-71-150.ap-northeast-1.compute.amazonaws.com/api/authenticate';

    /**
     * user infomation
     */
    var userInfo = null;

    /**
     * login処理 API
     */
    var login = function(email, password, successCb, errorCb) {
      $http.post(authApi, {
        email:email,
        password:password
      },
      {headers: {
        'Content-Type' : 'application/json; charset=UTF-8'
      }})
      .success(function(data) {
        console.log("Auth Api Success.");
        localStorage.setItem('id_token', data.token);
        successCb();
      })
      .error(function(data, status) {
        console.log("Auth Api Error.");
        errorCb();
      });
    };

    /**
     * ログイン中か確認 API
     */
    var checkLogin = function(token, cb) {
      var api = authApi + '?token=' + token;

      $http.get(api)
      .success(function(data) {
        console.log("islogin");
        userInfo = data.user
        cb();
      })
      .error(function(data) {
        console.log("not login");
      });

    };

    var getUserInfo = function() {
      return userInfo;
    };

    var logout = function() {
      localStorage.removeItem('id_token');
    }

    var service = {
      authApi: authApi,
      login: login,
      logout: logout,
      checkLogin: checkLogin,
      getUserInfo: getUserInfo
    };

    return service;
  }

})();
