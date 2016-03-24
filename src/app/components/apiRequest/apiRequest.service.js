(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .factory('apiRequest', apiRequest);

  /** @ngInject */
  function apiRequest($http) {

    var headers = {headers: {'Content-Type' : 'application/json; charset=UTF-8'}};

    /**
     * GET リクエスト
     */
    var requestGet = function(api, sC, eC) {
      $http.get(api, headers
      .success(function(data) {
        sC(data);
      })
      .error(function(data, status) {
        eC(data, status);
      });
    };

    /**
     * POST リクエスト
     */
    var requestPost = function(api, args, sC, eC) {
      $http.post(api, args, headers
      .success(function(data) {
        sC(data);
      })
      .error(function(data, status) {
        eC(data, status);
      });
    };

    return {
      requestGet: requestGet,
      requestPost: requestPost
    };
  }
})();
