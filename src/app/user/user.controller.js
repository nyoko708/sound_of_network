(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .controller('UserController', UserController);

  /** @ngInject */
  function UserController($scope, $location, $http, apihost) {
    var vm = this;

    vm.users = [];

    $scope.go = function ( path ) {
      $location.path( path );
    };

    var token = localStorage.getItem('id_token');

    var api = 'http://' + apihost + '/api/user?token=' + token;
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

    activate();

    function activate() {
    }

  }
})();
