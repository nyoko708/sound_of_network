(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .controller('ProjectDetailController', ProjectDetailController);

  /** @ngInject */
  function ProjectDetailController($stateParams, $http, $location, $scope, apihost) {
    var vm = this;

    $scope.project = {};

    var token = localStorage.getItem('id_token');
    var api = 'http://' + apihost + '/api/project/';
    api = api + $stateParams.projectId + "?token=" + token;

    $http.get(api,
    {headers: {
                'Content-Type' : 'application/json; charset=UTF-8'
              }})
    .success(function(data) {
      $scope.project = data.project;
    })
    .error(function(data, status) {
    });

    activate();

    function activate() {
    }

  }
})();
