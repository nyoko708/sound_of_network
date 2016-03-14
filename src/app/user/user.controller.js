(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .controller('UserController', UserController);

  /** @ngInject */
  function UserController($scope, $location, $http, $stateParams, apihost) {
    var vm = this;

    vm.users = [];
    vm.user = [];

    $scope.go = function ( path ) {
      $location.path( path );
    };

    var userId = $stateParams.userId;
    console.log(userId);

    activate();

    function activate() {
      getUserList();
    }

    function getUserList() {
      var api = 'http://' + apihost + '/api/user';
      $http.get(api,
          {headers: {
                      'Content-Type' : 'application/json; charset=UTF-8'
                    }})
      .success(function(data) {
        console.log(data);
        vm.users = data.profiles;
      })
      .error(function(data, status) {
        console.log("error. get user lists.");
      });
    }

    function getUser(userId) {

    }

  }
})();
