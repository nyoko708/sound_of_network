(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .controller('ProjectsController', ProjectsController);

  /** @ngInject */
  function ProjectsController($scope, $location, $http, apihost) {
    var vm = this;

    vm.projects = [];

    /**
     * 遷移
     */
    $scope.go = function ( path ) {
      $location.path( path );
    };

    var token = localStorage.getItem('id_token');

    // 自分が参加しているプロジェクト取得
    var api = 'http://' + apihost + '/api/me/projects?token=' + token;
    $http.get(api,
    {headers: {
                    'Content-Type' : 'application/json; charset=UTF-8'
                  }})
    .success(function(data) {
      console.log(data);
      vm.projects = data.projects;
    })
    .error(function(data, status) {
      console.log("error. get my project.");
    });

    /**
     * プロジェクトの作成
     */
    $scope.createProject = function(projectData) {
      var api = 'http://'+ apihost +'/api/project/create';

      api = api + '?token=' + token;

      var access = 0;
      if(projectData.access == 1) {
        access = 1;
      }

      $http.post(api, {
        name: projectData.name,
        description: projectData.description,
        goal_description: projectData.goal_description,
        access: access
      },
      {headers: {
                  'Content-Type' : 'application/json; charset=UTF-8'
                }})
      .success(function(data) {
        console.log(data);
        $location.path('/project/detail/'+data.projectId);
      })
      .error(function(data, status) {
        alert("プロジェクトの作成に失敗しました");
      });
    };

    activate();

    function activate() {
    }

  }
})();
