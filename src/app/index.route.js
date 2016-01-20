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
      .state('search', {
        url: '/search',
        templateUrl: 'app/search/search.html',
        controller: 'SearchController',
        controllerAs: 'search'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileController',
        controllerAs: 'profile'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsController',
        controllerAs: 'projects'
      })
      .state('list', {
        url: '/list',
        templateUrl: 'app/projects/list.html',
        controller: 'ListController',
        controllerAs: 'list'
      })
      .state('requests', {
        url: '/requests',
        templateUrl: 'app/requests/requests.html',
        controller: 'RequestsController',
        controllerAs: 'requests'
      })
      .state('setting', {
        url: '/setting',
        templateUrl: 'app/setting/setting.html',
        controller: 'SettingController',
        controllerAs: 'setting'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
