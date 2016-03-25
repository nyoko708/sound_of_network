(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .factory('authentication', authentication);

  /** @ngInject */
  function authentication($http, $location, apihost) {

    /**
     * API URL
     */
    var authApi = 'http://'+ apihost +'/api/authenticate';
    var userApi = 'http://'+ apihost +'/api/user';

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
        localStorage.setItem('id_token', data.token);
        successCb();
      })
      .error(function(data, status) {
        errorCb();
      });
    };

    /**
     * ログイン中か確認 API
     */
    var checkLogin = function(token, successCb, errorCb) {

      var api = authApi + '?token=' + token;

      $http.get(api)
      .success(function(data) {
        userInfo = data.user;
        successCb();
      })
      .error(function(data) {
        errorCb();
      });

    };

    var getUserInfo = function() {
      return userInfo;
    };

    var logout = function() {
      localStorage.removeItem('id_token');
    }

    /**
     * 新規ユーザー作成
     */
    var create = function(name, email, password, successCb, errorCb) {
      var api = userApi;
      $http.post(api, {
        name: name,
        email:email,
        password:password
      },
      {headers: {
                  'Content-Type' : 'application/json; charset=UTF-8'
                }})
      .success(function(data) {
        if(data.status == "OK") {
          var user = {};
          user.email = email;
          user.password = password;
          successCb(user);
        } else {
          errorCb();
        }
      })
      .error(function(data, status) {
        errorCb();
      });
    }

    var service = {
      authApi: authApi,
      login: login,
      logout: logout,
      checkLogin: checkLogin,
      getUserInfo: getUserInfo,
      create: create
    };

    return service;
  }

})();
