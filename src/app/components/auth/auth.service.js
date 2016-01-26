(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .factory('authentication', authentication);

  /** @ngInject */
  function authentication($http, $location) {

    /**
     * API URL
     */
    var authApi = 'http://ec2-52-69-222-2.ap-northeast-1.compute.amazonaws.com/api/authenticate';
    var userApi = 'http://ec2-52-69-222-2.ap-northeast-1.compute.amazonaws.com/api/user';

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
    var checkLogin = function(token, successCb, errorCb) {
      var api = authApi + '?token=' + token;

      $http.get(api)
      .success(function(data) {
        console.log("islogin");
        userInfo = data.user;
        successCb();
      })
      .error(function(data) {
        console.log("not login");
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
        console.log(data.status);
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
        console.log("create user. Error.");
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
