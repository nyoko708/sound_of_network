(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .controller('RequestsController', RequestsController);

  /** @ngInject */
  function RequestsController($scope, $location, $http, apihost) {
    var vm = this;

    var token = localStorage.getItem('id_token');

    activate();

    function activate() {
    }

    /**
     * リクエストの作成
     */
    $scope.createRequest = function(request) {
      var api = "http://" + apihost + "/api/request/create";
      api = api + "?token=" + token;

      $http.post(api, {
        from_user_id: request.fromUserId,
        to_user_id: request.toUserId,
        to_message: request.toMessage,
      },
      {headers: {
                  'Content-Type' : 'application/json; charset=UTF-8'
                }})
      .success(function(data) {
        $location.path('/request/detail/'+data.requestId);
      })
      .error(function(data, status) {
        alert("リクエストの作成に失敗しました");
      });
    }

  }
})();
