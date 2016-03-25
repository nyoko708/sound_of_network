(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .controller('ProfileController', ProfileController);

  /** @ngInject */
  function ProfileController($scope, $http, apihost) {
    var vm = this;

    var token = localStorage.getItem('id_token');

    activate();

    function activate() {
      getMyProfile();
    }

    function getMyProfile() {
      var api = 'http://' + apihost + '/api/me/profile?token=' + token;

      $http.get(api,
          {headers: {
                      'Content-Type' : 'application/json; charset=UTF-8'
                    }})
      .success(function(data) {
        console.log(data);
        $scope.user = data.profile[0];
      })
      .error(function(data, status) {
      });
    }
  }
})();
