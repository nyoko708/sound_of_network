(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1450076453149;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getUserList() {

    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      console.log(vm.awesomeThings);

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
