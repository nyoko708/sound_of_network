(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .controller('MyPageController', MyPageController);

  /** @ngInject */
  function MyPageController($scope, $location, $http, apihost) {
    var vm = this;

    vm.projects = [];
    vm.getRequests = [];
    vm.sendRequests = [];

    var token = localStorage.getItem('id_token');

    activate();

    function activate() {

      getMyProject();

      getMyRequests();

      getMySendRequests();
    }

    function getMyProject() {
      var api = 'http://' + apihost + '/api/me/projects?token=' + token;

    }

    function getMyRequests() {
      var api = 'http://' + apihost + '/api/me/request/get?token=' + token;

    }

    function getMySendRequests() {
      var api = 'http://' + apihost + '/api/me/request/send?token=' + token;

    }

    function requestApi(api, sC, eC) {
      $http.get(api,
          {headers: {
                      'Content-Type' : 'application/json; charset=UTF-8'
                    }})
      .success(function(data) {
        console.log(data);
      })
      .error(function(data, status) {
      });
    }
  }
})();
