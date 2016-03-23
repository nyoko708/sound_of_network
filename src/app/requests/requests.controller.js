(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .controller('RequestsController', RequestsController);

  /** @ngInject */
  function RequestsController($scope, $location, $http, $stateParams, apihost, shareData) {
    var vm = this;

    var requestId = $stateParams.requestId;

    vm.request = [];
    $scope.request = [];

    var token = localStorage.getItem('id_token');

    $scope.request.toUserId = shareData.data.id;
    $scope.request.toUserName = shareData.data.name;

    activate();

    function activate() {
      var path = $location.path();

      if(path.match(/create/)) {
        createRequest();
        getMyProfile();
      } else if(path.match(/detail/)) {
        detailRequest(requestId);
      }
    }

    function createRequest() {
      if($scope.request.toUserId == null || $scope.request.toUserName == null) {
        alert("もう一度はじめから申請してください");
        $location.path("/");
      }
    }

    function detailRequest(requestId) {
      var api = "http://" + apihost + "/api/request/" + requestId + "?token=" + token;

      $http.get(api,
          {headers: {
                      'Content-Type' : 'application/json; charset=UTF-8'
                    }})
      .success(function(data) {
        console.log(data);

        // 依頼した
        if(data.request.type == "send") {
          $scope.request.type = "依頼した";

          // 未読・既読
          $scope.request.readStatus = "未読";
          if(data.request.data.read_status == 1) {
            $socpe.request.readStatus = "既読";
          }

          // 承認・否認
          $scope.request.response = true; // レスポンスされた:true されてない:false
          $scope.request.responseStatus = "";
          if(data.request.data.response_status == 0) {
            $scope.request.response = false;
          } else if(data.request.data.response_status == 1) {
            $scope.request.responseStatus = "承認されました";
          } else if(data.request.data.response_status == 2) {
            $scope.request.responseStatus = "否認されました";
          }


        // 依頼された
        } else {
          $scope.request.type = "依頼された";
          $scope.request.readStatus = "";

          $scope.request.response = true; // レスポンス済み:true レスポンスしていない:false
          $scope.request.responseStatus = false; // 承認:true 否認:false
          if(data.request.data.response_status == 0) {
            $scope.request.response = false;
          } else if(data.request.data.response_status == 2) {
            $scope.request.responseStatus = true;
          }
        }

        // userIdから名前取得
        $scope.request.fromUserId = data.request.data.from_user_id;
        $scope.request.toUserId = data.request.data.to_user_id;
        $scope.request.message = data.request.data.message;
      })
      .error(function(data, status) {
        console.log("error. get user lists.");
      });
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
        to_message: request.toMessage
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

    function getMyProfile() {
      var api = "http://" + apihost + "/api/me/profile?token=" + token;
      $http.get(api,
          {headers: {
                      'Content-Type' : 'application/json; charset=UTF-8'
                    }})
      .success(function(data) {
        $scope.request.fromUserName = data.profile[0].name;
        $scope.request.fromUserId = data.profile[0].id;
      })
      .error(function(data, status) {
        console.log("error. get user lists.");
      });
    }

    function readRequest() {

    }

  }
})();
