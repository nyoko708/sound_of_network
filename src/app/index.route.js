(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .state('mypage', {
        url: '/mypage',
        templateUrl: 'app/mypage/mypage.html',
        controller: 'MyPageController',
        controllerAs: 'mypage'
      })
      .state('project', {
        url: '/project',
        templateUrl: 'app/project/project.html',
        controller: 'ProjectController',
        controllerAs: 'project'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
