(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $location, $http, $timeout, webDevTec, toastr, authentication, apihost) {

    var vm = this;

    $scope.go = function ( path ) {
        $location.path( path );
    };

    // token 取得
    // login 確認
    var token = localStorage.getItem('id_token');
    if(token != '') {
      authentication.checkLogin(token, isLogin, notLogin);
    }

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1450076453149;
    vm.showToastr = showToastr;
    vm.users = [];

    activate();

    function activate() {
      getWebDevTec();
      getUserList();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    /**
     * ログインしてたら
     */
    function isLogin() {
      $location.path("/mypage");
    }

    /**
     * ログインしていなかったら
     */
    function notLogin() {
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getUserList() {
      // 自分が参加しているプロジェクト取得
      var api = 'http://' + apihost + '/api/user';
      $http.get(api,
          {headers: {
                      'Content-Type' : 'application/json; charset=UTF-8'
                    }})
      .success(function(data) {
        console.log(data);
        vm.users = data.profiles;
      })
      .error(function(data, status) {
        console.log("error. get users.");
      });
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();
      vm.awesomeThings[vm.awesomeThings.length] = {   $$hashKey: "",
                                                      description: "aaa is project. desc desc desc.",
                                                      logo: "angular.png",
                                                      rank: 1,
                                                      title: "AAAAAA Project",
                                                      url: "https://angularjs.org/"
                                                  }

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
