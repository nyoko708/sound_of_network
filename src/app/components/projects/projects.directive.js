(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .directive('acmeProjects', acmeProjects);

  /** @ngInject */
  function acmeProjects() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/projects/projects.html',
      scope: {
          creationDate: '='
      },
      controller: ProjectsController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ProjectsController($scope, $location, $http, apihost) {

      // 変数初期化
      $scope.projects = {};

      var limit = 10;
      getProjects(limit);

      function getProjects(limit) {
        var api = "http://" + apihost + "/api/project"
        $http.get(api,
             {headers: {
                          'Content-Type' : 'application/json; charset=UTF-8'
                        }})
        .success(function(data) {
          console.log(data);
          $scope.projects = data.projects;
        })
        .error(function(data, status) {
          alert("データの取得に失敗しました");
        });
      }
    }
  }

})();
