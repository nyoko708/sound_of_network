(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .directive('acmeSkillset', acmeSkillset);

  /** @ngInject */
  function acmeSkillset() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/skillset/skillset.html',
      scope: {
          creationDate: '='
      },
      controller: SkillsetController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SkillsetController($scope, $location, $http, apihost) {

      $scope.skillset = {};

      var token = localStorage.getItem('id_token');

      getMySkillSet();

      function getMySkillSet() {
        var api = "http://" + apihost + "/api/me/profile/cando?token=" + token;
        $http.get(api,
            {headers: {
                        'Content-Type' : 'application/json; charset=UTF-8'
                      }})
        .success(function(data) {
          $scope.cando = data.cando;
        })
        .error(function(data, status) {
        });
      }
    }
  }

})();
