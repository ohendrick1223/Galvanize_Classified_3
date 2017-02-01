(function() {
  'use strict';

  angular.module('app')
    .component('post', {
      controller: controller,
      templateUrl: 'js/classifieds/classifieds-post.template.html'
    });

    controller.$inject = ['$http', '$state', 'postService'];

    function controller($http, $state, postService) {
      const vm = this;

      vm.$onInit = function() {
      };
      vm.submitPost = postService.submitPost;

    }
    console.log("getting to classifieds-post.component.js");
}()); //end of IIFE
