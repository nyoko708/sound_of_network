(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .controller('ProjectDetailController', ProjectDetailController);

  /** @ngInject */
  function ProjectDetailController($stateParams, $http, $location, $scope) {
    var vm = this;

    $scope.project = {};

    var token = localStorage.getItem('id_token');
    var api = "http://ec2-52-68-111-183.ap-northeast-1.compute.amazonaws.com/api/project/";
    api = api + $stateParams.projectId + "?token=" + token;

    $http.get(api,
    {headers: {
                'Content-Type' : 'application/json; charset=UTF-8'
              }})
    .success(function(data) {
      console.log(data.project);
      $scope.project = data.project;
    })
    .error(function(data, status) {
      console.log("aaaaa");
    });

    activate();

    function activate() {
    }

  }
})();
