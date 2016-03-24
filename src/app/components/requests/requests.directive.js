(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .directive('acmeRequests', acmeRequests);

  /** @ngInject */
  function acmeRequests() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/requests/requests.html',
      scope: {
          creationDate: '='
      },
      controller: RequestsController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function RequestsController($scope, $http, apihost) {

      // 変数初期化
      $scope.requests = {};

      var token = localStorage.getItem('id_token');

      var limit = 10;
      getRequests(limit);

      function getRequests(limit) {
        var api = "http://" + apihost + "/api/me/requests?token=" + token;
        $http.get(api,
             {headers: {
                          'Content-Type' : 'application/json; charset=UTF-8'
                        }})
        .success(function(data) {
          $scope.sendRequests = data.requests.send;
          $scope.receiveRequests = data.requests.receive;
        })
        .error(function(data, status) {
          alert("データの取得に失敗しました");
        });
      }
    }
  }

})();
