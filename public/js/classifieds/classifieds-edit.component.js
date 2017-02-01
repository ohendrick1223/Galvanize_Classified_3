(function() {
  'use strict';

  angular.module('app')
    .component('edit', {
      controller: controller,
      templateUrl: 'js/classifieds/classifieds-edit.template.html'
    });

    controller.$inject = ['$http', '$state', 'postService', '$stateParams'];

    function controller($http, $state, postService, $stateParams) {
      const vm = this;
      console.log($stateParams);
      vm.$onInit = function() {
        $http.get(`classifieds/${$stateParams.editId}`).then(function(response) {

          console.log(response.data);
          vm.post = response.data;
        });
      };

      vm.editPost = postService.editPost;
    }

    console.log("getting to classifieds-edit.component.js");
}()); //end of IIFE
