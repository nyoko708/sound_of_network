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
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/login/signup.html',
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
      .state('projectcreate', {
        url: '/project/create',
        templateUrl: 'app/projects/create.html',
        controller: 'ProjectsController',
        controllerAs: 'projects'
      })
      .state('projectlist', {
        url: '/project/list',
        templateUrl: 'app/projects/list.html',
        controller: 'ProjectListController',
        controllerAs: 'list'
      })
      .state('projectdetail', {
        url: '/project/detail/{projectId:[0-9]}',
        templateUrl: 'app/projects/detail.html',
        controller: 'ProjectDetailController',
        controllerAs: 'detail'
      })
      .state('userlist', {
        url: '/user/list',
        templateUrl: 'app/user/list/index.html',
        controller: 'UserController',
        controllerAs: 'userlist'
      })
      .state('userdetail', {
        url: '/user/detail/{userId:[0-9]}',
        templateUrl: 'app/user/detail.html',
        controller: 'UserController',
        controllerAs: 'userdetail'
      })
      .state('requests', {
        url: '/requests',
        templateUrl: 'app/requests/requests.html',
        controller: 'RequestsController',
        controllerAs: 'requests'
      })
      .state('requestscreate', {
        url: '/request/create',
        templateUrl: 'app/requests/create.html',
        controller: 'RequestsController',
        controllerAs: 'create'
      })
      .state('requestsdetail', {
        url: '/request/detail/{requestId:[0-9]}',
        templateUrl: 'app/requests/detail.html',
        controller: 'RequestsController',
        controllerAs: 'detail'
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
