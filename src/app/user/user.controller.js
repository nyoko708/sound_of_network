(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .controller('UserController', UserController);

  /** @ngInject */
  function UserController($scope, $location, $http, $stateParams, apihost, shareData) {
    var vm = this;

    vm.users = [];
    $scope.user = [];
    $scope.request = [];

    $scope.go = function ( path ) {
      $location.path( path );
    };

    $scope.sendRequest = function( path ) {
      $scope.request.toUserId = shareData.data.id;
      $scope.request.toUserName = shareData.data.name;
      $location.path(path);
    }

    var userId = $stateParams.userId;

    activate(userId);

    function activate(userId) {
      if(userId == null) {
        getUserList();
      } else {
        getUser(userId);
      }
    }

    function getUserList() {
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

    function getUser(userId) {
      var api = 'http://' + apihost + '/api/user/' + userId;

      $http.get(api,
          {headers: {
                      'Content-Type' : 'application/json; charset=UTF-8'
                    }})
      .success(function(data) {
        shareData.data = data.profile[0];
        $scope.user = data.profile[0];
      })
      .error(function(data, status) {
        console.log("error. get user lists.");
      });
    }
  }
})();
